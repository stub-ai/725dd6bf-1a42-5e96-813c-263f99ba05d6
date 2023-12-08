import React, { useEffect, useRef } from 'react';

interface VideoCallProps {
  id: string;
  room: string;
  participants: number;
}

const VideoCall: React.FC<VideoCallProps> = ({ id, room, participants }) => {
  const userVideo = useRef<HTMLVideoElement>(null);
  const partnerVideo = useRef<HTMLVideoElement>(null);

  // ...existing code...

  return (
    <div>
      <h2>Welcome, {id}!</h2>
      <p>You are in room {room}. There are currently {participants} participants.</p>
      <video playsInline muted ref={userVideo} autoPlay />
      <video playsInline ref={partnerVideo} autoPlay />
    </div>
  );
};

export default VideoCall;