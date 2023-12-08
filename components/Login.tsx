import React, { useState, FormEvent } from 'react';

interface LoginProps {
  onIdSubmit: (id: string) => void;
  onRoomSubmit: (room: string) => void;
}

const Login: React.FC<LoginProps> = ({ onIdSubmit, onRoomSubmit }) => {
  const [id, setId] = useState('');
  const [room, setRoom] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onIdSubmit(id);
    onRoomSubmit(room);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center justify-center h-screen">
      <label htmlFor="id" className="mb-2">
        Enter your ID:
      </label>
      <input
        type="text"
        id="id"
        onChange={(e) => setId(e.target.value)}
        className="mb-4 p-2 border-2 border-gray-300 rounded-md"
      />
      <label htmlFor="room" className="mb-2">
        Enter room:
      </label>
      <input
        type="text"
        id="room"
        onChange={(e) => setRoom(e.target.value)}
        className="mb-4 p-2 border-2 border-gray-300 rounded-md"
      />
      <button type="submit" className="p-2 bg-blue-500 text-white rounded-md">
        Login
      </button>
    </form>
  );
};

export default Login;