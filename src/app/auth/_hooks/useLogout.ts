"use client"

import { createClient } from "@/utils/supabase/client";
import { useRouter } from "next/navigation";

export const useLogout = () => {
  const supabase = createClient();
  const router = useRouter();

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push('/');
  };

  return handleLogout;
};
