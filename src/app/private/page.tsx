import { redirect } from 'next/navigation';
import { createClient } from '@/utils/supabase/server';
import { LogoutButton } from '../auth/_components/logoutButton';

export default async function PrivatePage() {
    const supabase = createClient();
    const { data, error } = await supabase.auth.getUser();
    if (error ?? !data?.user) {
        redirect('/login')
    };

    return (
        <LogoutButton value={`Logout ${data.user?.email}`}/>
    )
};
