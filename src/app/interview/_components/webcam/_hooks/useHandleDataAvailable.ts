import type { SetState } from '@/types';
import { useCallback } from 'react';

const useHandleDataAvailable = (setRecordedChunks: SetState<Blob[]>) => {
  return useCallback((event: BlobEvent) => {
    if (event.data.size > 0) {
      setRecordedChunks((prev) => prev.concat(event.data));
    }
  }, [setRecordedChunks]);
};

export default useHandleDataAvailable;
