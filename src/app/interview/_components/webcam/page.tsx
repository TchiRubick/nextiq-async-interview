'use client'

import type { MutableRefObject, FC } from 'react';
import Webcam from 'react-webcam';
import { useStartCapture,
  useStopCapture, 
  useUploadToSupabase, 
  useWebcamStreamCapture 
} from './_hooks';

export const WebcamRec: FC = () => {
  const {
    webcamRef,
    mediaRecorderRef,
    capturing,
    setCapturing,
    recordedChunks,
    setRecordedChunks,
    handleDataAvailable,
  } = useWebcamStreamCapture();

  const startCapture = useStartCapture(webcamRef, mediaRecorderRef, setCapturing, handleDataAvailable);
  const stopCapture = useStopCapture(mediaRecorderRef, setCapturing);
  const uploadToSupabase = useUploadToSupabase(recordedChunks, setRecordedChunks);

  const handleStopCaptureClickWithUpload = () => {
    stopCapture();
    void uploadToSupabase();
  };

  return (
    <>
      <Webcam audio={false} ref={webcamRef as MutableRefObject<Webcam>} mirrored/>
      {capturing ? (
        <button onClick={handleStopCaptureClickWithUpload}>Stop Capture</button>
      ) : (
        <button onClick={startCapture}>Start Capture</button>
      )}
    </>
  );
};
