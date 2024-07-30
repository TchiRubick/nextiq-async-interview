import { useRef, useState, useCallback } from 'react';
import type Webcam from 'react-webcam';
import type { BlobEvent } from '../_types'; // Create this file for TypeScript types

export const useWebcamStreamCapture = () => {
  const webcamRef = useRef<Webcam>(null);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const [capturing, setCapturing] = useState(false);
  const [recordedChunks, setRecordedChunks] = useState<Blob[]>([]);

  const handleDataAvailable = useCallback((event: BlobEvent) => {
    if (event.data.size > 0) {
      setRecordedChunks((prev) => prev.concat(event.data));
    }
  }, []);

  return {
    webcamRef,
    mediaRecorderRef,
    capturing,
    setCapturing,
    recordedChunks,
    setRecordedChunks,
    handleDataAvailable,
  };
};
