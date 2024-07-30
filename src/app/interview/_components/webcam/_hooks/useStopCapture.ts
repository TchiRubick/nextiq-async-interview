import { useCallback } from 'react';
import type { MediaRecorderRef } from '../_types';

export const useStopCapture = (
  mediaRecorderRef: MediaRecorderRef,
  setCapturing: React.Dispatch<React.SetStateAction<boolean>>
) => {
  return useCallback(() => {
    if (mediaRecorderRef.current) {
      mediaRecorderRef.current.stop();
    }
    setCapturing(false);
  }, [mediaRecorderRef, setCapturing]);
};
