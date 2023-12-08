import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import Login from '../components/Login';
import Header from '../components/Header';

// Dynamically import the video call component to avoid server-side rendering
const VideoCall = dynamic(() => import('../components/VideoCall'), {
  ssr: false,
});

const Home = () => {
  const [id, setId] = useState('');
  const [room, setRoom] = useState('');

  // Generate a unique ID for the user if they don't have one
  useEffect(() => {
    const id = localStorage.getItem('id');
    const room = localStorage.getItem('room');
    if (!id) {
      const newId = Math.random().toString(36).substring(2, 15);
      setId(newId);
      localStorage.setItem('id', newId);
    } else {
      setId(id);
    }
    if (room) {
      setRoom(room);
    }
  }, []);

  return (
    <div>
      <Header id={id} />
      {id && room ? <VideoCall id={id} room={room} /> : <Login onIdSubmit={setId} onRoomSubmit={setRoom} />}
    </div>
  );
};

export default Home;