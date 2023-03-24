import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy } from "@fortawesome/free-solid-svg-icons";
import { faArrowsRotate } from "@fortawesome/free-solid-svg-icons";
import Navigation from './Navigation';

import Web3 from "web3";

const Converter = () => {
  const [currentElement, setCurrentElement] = useState(0);
  const [inputValues, setInputValues] = useState(["", "", ""]);
  const [outputValues, setOutputValues] = useState(["", "", ""]);
  const [showNotification, setShowNotification] = useState(false);
  let [conversionDirection, setConversionDirection] = useState("decimalToHex");

  // Copy notification function
const showCopyNotification = () => {
  setShowNotification(true);
  setTimeout(() => setShowNotification(false), 2000); // Hide the notification after 2 seconds
};

// Function to swap the value fields when the switch button is clicked
const swapValues = () => {
  setInputValues(
    inputValues.map((v, i) => (i === currentElement ? outputValues[i] : v))
  );
  setOutputValues(
    outputValues.map((v, i) => (i === currentElement ? inputValues[i] : v))
  );
};

// Function to switch the fields when a switch button is clicked 
const switchElement = (index) => {
  setCurrentElement(index);
};

// Events encoding functions
const encodeEvent = (event) => {
  const keccakHash = Web3.utils.keccak256(event);
  return keccakHash || ""; // Return the keccakHash or an empty string
};

const encodeFunction = async (func) => {
  const hashedFunction = Web3.utils.keccak256(func);
  if (hashedFunction) {
    return hashedFunction.slice(0, 10);
  }
  return ""; // Return an empty string if there's no hashed function
};

// Conversion functions
const decimalToHex = (decimalNum) => {
  return Web3.utils.toHex(decimalNum);
};

const hexToDecimal = (hexNumber) => {
  if (!hexNumber || !/^(0x)?[0-9a-fA-F]+$/.test(hexNumber)) {
    return ""; // Return an empty string if the input is invalid
  }

  // Add the "0x" prefix if it's not present
  if (!hexNumber.startsWith("0x")) {
    hexNumber = "0x" + hexNumber;
  }

  try {
    return Web3.utils.hexToNumberString(hexNumber);
  } catch (error) {
    return ""; // Return an empty string if an error occurs
  }
};

  const updateOutputValue = (inputValue) => {
    let outputValue;
    switch (currentElement) {
      case 0:
        outputValue = encodeEvent(inputValue);
        break;
      case 1:
        outputValue = encodeFunction(inputValue);
        break;
      case 2:
        outputValue =
          conversionDirection === "decimalToHex"
            ? decimalToHex(inputValue)
            : hexToDecimal(inputValue);
        break;
      default:
        outputValue = inputValue;
    }
    return outputValue;
  };

  const handleInputChange = async (event) => {
    const inputValue = event.target.value;
    setInputValues(
      inputValues.map((v, i) => (i === currentElement ? inputValue : v))
    );

    if (inputValue === "") {
      setOutputValues(
        outputValues.map((v, i) => (i === currentElement ? [""] : v))
      );
      return;
    }

    const outputValue = await updateOutputValue(inputValue);
    setOutputValues(
      outputValues.map((v, i) => (i === currentElement ? outputValue : v))
    );
  };

  const elements = [
    <div
      key="element-1"
      className="text-white flex flex-col items-center space-y-4"
    >
      <div className="border border-white w-full p-5 rounded-lg flex flex-col items-center ">
      <h3 className="mb-4 text-2xl font-bold">Generate event signature</h3>
      <h3 className="mb-4">Event name and parameters type</h3>
      <input
        type="text"
        value={inputValues[currentElement]}
        onChange={handleInputChange}
        placeholder={"Transfer(address,address,uint256)"}
        className="bg-white text-black p-2 rounded border border-white w-full sm:w-1/2 md:w-full"
      />
      <div className="flex flex-col items-center w-full sm:w-1/2 md:w-full">
        <h3 className="p-4">Event signature</h3>
        <input
          className="bg-white text-black p-2 rounded border border-white w-full"
          type="text"
          value={outputValues[currentElement]}
          placeholder={
            "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef"
          }
          readOnly
        />
        <button
          onClick={() => {
            navigator.clipboard.writeText(outputValues[currentElement]);
            showCopyNotification();
          }}
          className="bg-gray-600 text-white px-3 py-1 rounded mt-4 hover:bg-teal-900"
        >
          <FontAwesomeIcon icon={faCopy} />
        </button>
      </div>
      </div>

      <div className="border border-white w-full p-5 rounded-lg flex flex-col items-center "> 
      <h3 className="mb-4 text-2xl font-bold">Encode event topics</h3>   
      <h3 className="mb-4">Topic to encode</h3>
      <input
        type="text"
        value={inputValues[currentElement]}
        onChange={handleInputChange}
        placeholder={"Transfer(address,address,uint256)"}
        className="bg-white text-black p-2 rounded border border-white w-full sm:w-1/2 md:w-full"
      />
      <div className="flex flex-col items-center w-full sm:w-1/2 md:w-full">
        <h3 className="p-4">Bytes-32 encoded topic</h3>
        <input
          className="bg-white text-black p-2 rounded border border-white w-full"
          type="text"
          value={outputValues[currentElement]}
          placeholder={
            "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef"
          }
          readOnly
        />
        <button
          onClick={() => {
            navigator.clipboard.writeText(outputValues[currentElement]);
            showCopyNotification();
          }}
          className="bg-gray-600 text-white px-3 py-1 rounded mt-4 hover:bg-teal-900"
        >
          <FontAwesomeIcon icon={faCopy} />
        </button>
      </div>
      </div>
    </div>,
    
    
    <div
      key="element-2"
      className="text-white flex flex-col items-center space-y-4"
    >
      <h3>Generate a 4-bytes function signature</h3>
      <input
        type="text"
        value={inputValues[currentElement]}
        onChange={handleInputChange}
        placeholder={"transfer(address,uint256)"}
        className="bg-white text-black p-2 rounded border border-white w-full sm:w-1/2 md:w-full"
      />
      <div className="flex flex-col items-center w-full sm:w-1/2 md:w-full">
        <h3 className="p-4">Solidity function signature</h3>
        <input
          className="bg-white text-black p-2 rounded border border-white w-full"
          type="text"
          value={outputValues[currentElement]}
          placeholder={"0xa9059cbb"}
          readOnly
        />
        <button
          onClick={() => {
            navigator.clipboard.writeText(outputValues[currentElement]);
            showCopyNotification();
          }}
          className="bg-gray-600 text-white px-3 py-1 rounded mt-4 hover:bg-teal-900"
        >
          <FontAwesomeIcon icon={faCopy} />
        </button>
      </div>
    </div>,
    <div key="element-3" className="text-white flex flex-col items-center">
      <h3>Convert decimal and hexadecimal values</h3>
      {conversionDirection === "decimalToHex" ? (
        <>
          <h3 className="mt-2">Decimal</h3>
          <input
            type="number"
            pattern="\d*"
            value={inputValues[currentElement]}
            onChange={handleInputChange}
            placeholder={"16892022"}
            className="bg-white text-black p-2 rounded border border-white w-full sm:w-1/2 md:w-full no-spinner"
          />
         <button
  onClick={() => {
    setConversionDirection(
      conversionDirection === "decimalToHex"
        ? "hexToDecimal"
        : "decimalToHex"
    );
    swapValues(); // Call the swapValues function here
  }}
  className="bg-gray-600 text-white px-3 py-1 my-4 rounded hover:bg-teal-900"
>
  <FontAwesomeIcon icon={faArrowsRotate} />
</button>
          <h3 className="mt-2">Hexadecimal</h3>
        </>
      ) : (
        <>
          <h3 className="mt-2">Hexadecimal</h3>
          <input
            type="text"
            value={inputValues[currentElement]}
            onChange={handleInputChange}
            placeholder={"0x101C076"}
            className="bg-white text-black p-2 rounded border border-white w-full sm:w-1/2 md:w-full"
          />
          <button
  onClick={() => {
    setConversionDirection(
      conversionDirection === "decimalToHex"
        ? "hexToDecimal"
        : "decimalToHex"
    );
    swapValues(); // Call the swapValues function here
  }}
  className="bg-gray-600 text-white px-3 py-1 my-4 rounded hover:bg-teal-900"
>
  <FontAwesomeIcon icon={faArrowsRotate} />
</button>

          <h3 className="mt-2">Decimal</h3>
        </>
      )}
      <div className="flex flex-col items-center w-full sm:w-1/2 md:w-full">
        <input
          className="bg-white text-black p-2 rounded border border-white w-full"
          type="text"
          value={outputValues[currentElement]}
          placeholder={
            conversionDirection === "decimalToHex" ? "0x101C076" : "16892022"
          }
        />
        <button
          onClick={() => {
            navigator.clipboard.writeText(outputValues[currentElement]);
            showCopyNotification();
          }}
          className="bg-gray-600 text-white px-3 py-1 rounded mt-4 hover:bg-teal-900"
        >
          <FontAwesomeIcon icon={faCopy} />
        </button>
      </div>
    </div>,
  ];

  return (
    <div className="bg-slate-800 p-8">
      {showNotification && (
        <div className="fixed top-0 right-0 bg-green-500 text-white p-4 rounded-lg m-4">
          Copied to clipboard!
        </div>
      )}
      <div className="bg-slate-800 p-8">
      <div className="flex">
        <Navigation elements={elements} currentElement={currentElement} switchElement={switchElement} />
        <div className="bg-gray-700 p-6 rounded-md shadow-md w-full sm:w-2/3 md:w-1/2 mx-auto">
          {elements[currentElement]}
        </div>
      </div>
      </div>
    </div>
  );
};

export default Converter;
