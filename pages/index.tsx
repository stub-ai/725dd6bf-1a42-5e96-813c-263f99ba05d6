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
  const [rooms, setRooms] = useState<{ [key: string]: number }>({});

  // Generate a unique ID for the user if they don't have one
  useEffect(() => {
    // ...existing code...

    // TODO: Fetch the current rooms and their participant counts from your server
    // setRooms(fetchedRooms);
  }, []);

  return (
    <div>
      <Header id={id} />
      {id && room ? (
        <VideoCall id={id} room={room} participants={rooms[room] || 0} />
      ) : (
        <Login onIdSubmit={setId} onRoomSubmit={setRoom} rooms={rooms} />
      )}
    </div>
  );
};

export default Home;