import { cookies } from 'next/headers'
import { createServerClient } from '@supabase/ssr'
import { env } from '@/env';
import type { Database } from 'supabase/types';

export function createClient() {
    const cookieStore = cookies()

    return createServerClient<Database>(
       env.NEXT_PUBLIC_SUPABASE_URL,
       env.NEXT_SUPABASE_ANON_KEY,
        {
            cookies: {
                getAll() {
                    return cookieStore.getAll()
                },
            },
        }
    )
};
