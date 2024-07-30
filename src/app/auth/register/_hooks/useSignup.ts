"use client"

import type { Credentials } from "@/app/auth/_type";
import { createClient } from "@/utils/supabase/client";
import { useRouter } from "next/navigation";

export const UseSingup = () => {
  const router = useRouter();
  
  const handleSubmit = async (data: Credentials) => {
    const supabase = createClient();
    try {
      const { error } = await supabase.auth.signUp({
        email: data.email,
        password: data.password,
      });
      if (error) {
        console.error('Error signing up:', error.message);
        return;
      }
      console.log('User signed up successfully:', data.email);
      void router.push( '/');
    } catch (error) {
      console.error('Error signing up:', error);
    }
  };

  return handleSubmit;
};
