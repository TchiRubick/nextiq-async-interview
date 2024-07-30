import type { Session } from "@supabase/supabase-js";
import { type Dispatch, type SetStateAction } from 'react';

export type Status = "loading" | "unauthenticated" | "authenticated";

export type SessionResponse = Session | null | undefined;

export type UseSession = {
  session: SessionResponse,
  status: Status
};

export type SetState<T> = Dispatch<SetStateAction<T>>;
