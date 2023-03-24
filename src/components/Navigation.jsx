import React from 'react';

const Navigation = ({ elements, currentElement, switchElement }) => {
  const getButtonLabel = (index) => {
    switch (index) {
      case 0:
        return "Smart contract events";
      case 1:
        return "Solidity function signature";
      default:
        return "Hex converter";
    }
  };

  return (
    <div className="flex flex-col justify-center mb-4 space-y-4">
      {elements.map((_, index) => {
        const isActive = currentElement === index;
        const buttonClass = [
          "py-2 px-4 w-full text-left rounded hover:bg-sky-900 hover:text-white",
          isActive ? "bg-blue-700 text-white" : "bg-cyan-600 text-gray-300",
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
