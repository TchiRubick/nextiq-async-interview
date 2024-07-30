import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import type { SessionResponse } from "@/types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
};

export const getStatus = (session: SessionResponse, loading: boolean) => {
  if (loading) return 'loading';

  if (!session) return 'unauthenticated';

  return 'authenticated'
};
