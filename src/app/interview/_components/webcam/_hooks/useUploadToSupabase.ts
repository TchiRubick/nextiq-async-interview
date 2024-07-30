import { useCallback, type Dispatch, type SetStateAction} from 'react';
import { createClient } from '@/utils/supabase/client';

export const useUploadToSupabase = (
  recordedChunks: Blob[],
  setRecordedChunks: Dispatch<SetStateAction<Blob[]>>
) => {
  return useCallback(async () => {
    const supabase = createClient();

    const { data } = await supabase.auth.getUser();
 
    if (recordedChunks) {
      const blob = new Blob(recordedChunks, {
        type: 'video/webm',
      });
      const file = new File([blob], `${data.user?.email} - ${Date.now()}.webm`, { type: 'video/webm' });

      await supabase.storage.from('test').upload(`videos/${file.name}`, file);

      setRecordedChunks([blob]);
    }
  }, [recordedChunks, setRecordedChunks]);
};
