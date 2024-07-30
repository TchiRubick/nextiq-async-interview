import type { MutableRefObject } from 'react';
import type Webcam from 'react-webcam';

export type WebcamRef = MutableRefObject<Webcam | null>;
export type MediaRecorderRef = MutableRefObject<MediaRecorder | null>;
export type HandleDataAvailable = (event: BlobEvent) => void;

export interface BlobEvent extends Event {
  data: Blob;
}