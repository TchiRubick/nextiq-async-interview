import type { Database } from "supabase/types";

export type Credentials = {
  email: string,
  password: string
};

export type UserRole = Database["public"]["Enums"]["userRole"];

