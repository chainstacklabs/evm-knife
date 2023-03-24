import React from 'react';

const Navigation = ({ elements, currentElement, switchElement }) => {
  const getButtonLabel = (index) => {
    switch (index) {
      case 0:
        return "Smart contract events";
      case 1:
        return "Solidity CALLDATA";
      default:
        return "Hex converter";
    }
  };

  return (
    <div className="flex flex-col w-full sm:w-64 bg-gray-900 h-screen px-5 py-4">
      <h1 className="text-white text-2xl font-bold mb-6">EVM tools</h1>
      {elements.map((_, index) => {
        const isActive = currentElement === index;
        const buttonClass = [
          "text-md font-medium py-2 px-4 rounded-lg mb-4 hover:bg-violet-800 focus:outline-none focus:bg-yellow-500 focus:text-sky-500 focus:font-bold",
          isActive ? "bg-gray-700 text-white" : "bg-gray-700 text-white",
        ].join(" ");

        return (
          <button
            key={`tab-${index}`}
            onClick={() => switchElement(index)}
            className={buttonClass}
          >
            {getButtonLabel(index)}
          </button>
        );
      })}
    </div>
  );
};

export default Navigation;
