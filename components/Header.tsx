import React from 'react';

interface HeaderProps {
  id: string;
}

const Header: React.FC<HeaderProps> = ({ id }) => {
  return (
    <header className="p-4 bg-blue-500 text-white flex justify-between items-center">
      <h1 className="text-lg">Video Call App</h1>
      <p className="text-sm">Your ID: {id}</p>
    </header>
  );
};

export default Header;