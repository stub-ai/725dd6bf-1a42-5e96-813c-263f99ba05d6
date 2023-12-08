import React, { useState, FormEvent } from 'react';

interface LoginProps {
  onIdSubmit: (id: string) => void;
  onRoomSubmit: (room: string) => void;
  rooms: { [key: string]: number };
}

const Login: React.FC<LoginProps> = ({ onIdSubmit, onRoomSubmit, rooms }) => {
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
        Your ID:
      </label>
      <input
        id="id"
        type="text"
        value={id}
        onChange={(e) => setId(e.target.value)}
        className="mb-4 p-2 border-2 border-gray-300 rounded-md"
      />
      <label htmlFor="room" className="mb-2">
        Join a room:
      </label>
      <select
        id="room"
        value={room}
        onChange={(e) => setRoom(e.target.value)}
        className="mb-4 p-2 border-2 border-gray-300 rounded-md"
      >
        {Object.entries(rooms).map(([room, participants]) => (
          <option key={room} value={room}>
            {room} ({participants} participants)
          </option>
        ))}
      </select>
      <button type="submit" className="p-2 bg-blue-500 text-white rounded-md">
        Login
      </button>
    </form>
  );
};

export default Login;