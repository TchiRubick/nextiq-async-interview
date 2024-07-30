'use client'

import { useState, useEffect, useMemo, useCallback } from 'react';
import { useRouter } from "next/navigation";
import type { SessionResponse, UseSession } from "@/types";
import { createClient } from '@/utils/supabase/client';
import {  getStatus } from "@/lib/utils"

export const useSession = (redirectUrl?: string): UseSession => {
  const supabase = createClient();
  const router = useRouter();
  const [session, setSession] = useState<SessionResponse>();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const status = useMemo(() => getStatus(session, isLoading), [session, isLoading]);

  const getSession = useCallback(async () => {
    const { data } = await supabase.auth.getSession();

    setIsLoading(false);
    setSession(data.session);
  }, []);
  
  useEffect(() => {
    void getSession();
  }, [getSession]);

  
  if(!session && redirectUrl && status !== 'loading'){
    router.push(redirectUrl)
  }

  return {
    session,
    status,
  };
};