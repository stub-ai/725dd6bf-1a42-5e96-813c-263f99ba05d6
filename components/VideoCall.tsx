import React, { useEffect, useRef } from 'react';

interface VideoCallProps {
  id: string;
  room: string;
}

const VideoCall: React.FC<VideoCallProps> = ({ id, room }) => {
  const userVideo = useRef(null);
  const partnerVideo = useRef(null);
  const peerRef = useRef(null);
  const otherUser = useRef(null);
  const userStream = useRef(null);
  const senders = useRef([]);

  // TODO: Implement video call functionality here

  return (
    <div>
      <h2>Welcome, {id}!</h2>
      <p>Video call functionality will be implemented here.</p>
      <video playsInline muted ref={userVideo} autoPlay />
      <video playsInline ref={partnerVideo} autoPlay />
    </div>
  );
};

export default VideoCall;