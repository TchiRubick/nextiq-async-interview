import { useCallback } from 'react';
import type { WebcamRef, MediaRecorderRef, HandleDataAvailable } from '../_types';

export const useStartCapture = (
  webcamRef: WebcamRef,
  mediaRecorderRef: MediaRecorderRef,
  setCapturing: React.Dispatch<React.SetStateAction<boolean>>,
  handleDataAvailable: HandleDataAvailable
) => {
  return useCallback(() => {
    setCapturing(true);
    if (webcamRef.current?.stream) {
      mediaRecorderRef.current = new MediaRecorder(webcamRef.current.stream, {
        mimeType: 'video/webm',
      });
      mediaRecorderRef.current.addEventListener('dataavailable', handleDataAvailable);
      mediaRecorderRef.current.start();
    }
  }, [webcamRef, mediaRecorderRef, setCapturing, handleDataAvailable]);
};
