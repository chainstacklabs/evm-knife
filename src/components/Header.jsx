import React from 'react';

const Header = () => {
  return (
    <header className="bg-zinc-900 py-4 px-8">
      <div className="flex items-center justify-between p-10">
        <div className="w-12 h-12">
          <img
            src="/path/to/logo.png"
            alt="App Logo"
            className="w-full h-full"
          />
        </div>
        <div className="flex-grow text-center">
          <h1 className="text-3xl font-semibold text-white">The EVM Swiss Army Knife </h1>
          <h2 className="text-lg text-gray-300">The ultimate EVM tool, convert and encode EVM values, all in one place</h2>
        </div>
        <div className="w-12"></div>
      </div>
    </header>
  );
};

export default Header;

