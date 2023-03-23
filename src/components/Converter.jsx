import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy } from "@fortawesome/free-solid-svg-icons";
import { faArrowsRotate } from "@fortawesome/free-solid-svg-icons";
import Web3 from "web3";

const Converter = () => {
  const [currentElement, setCurrentElement] = useState(0);
  const [inputValues, setInputValues] = useState(["", "", ""]);
  const [outputValues, setOutputValues] = useState(["", "", ""]);
  const [showNotification, setShowNotification] = useState(false);
  let [conversionDirection, setConversionDirection] = useState("decimalToHex");

  const showCopyNotification = () => {
    setShowNotification(true);
    setTimeout(() => setShowNotification(false), 2000); // Hide the notification after 2 seconds
  };

  function encodeEvent(event) {
    const keccakHash = Web3.utils.keccak256(event);

    if (keccakHash) {
      return keccakHash;
    } else {
      return ""; // Return an empty string or a default value
    }
  }

  async function encodeFunction(func) {
    const hashedFunction = Web3.utils.keccak256(func);

    if (hashedFunction) {
      const functionSignature = hashedFunction.slice(0, 10);
      return functionSignature;
    } else {
      return ""; // Return an empty string or a default value
    }
  }

  function decimalToHex(decimalNum) {
    return Web3.utils.toHex(decimalNum);
  }

  function hexToDecimal(hexNumber) {
    if (!hexNumber || !/^(0x)?[0-9a-fA-F]+$/.test(hexNumber)) {
      return ""; // Return an empty string or a default value
    }

    // Add the "0x" prefix if it's not present
    if (!hexNumber.startsWith("0x")) {
      hexNumber = "0x" + hexNumber;
    }

    try {
      const decimalNumber = Web3.utils.hexToNumberString(hexNumber);
      return decimalNumber;
    } catch (error) {
      return ""; // Return an empty string or a default value
    }
  }

  const clearFields = () => {
    setInputValues(inputValues.map(() => ""));
    setOutputValues(outputValues.map(() => ""));
  };

  const handleInputChange = (event) => {
    const value = event.target.value;
    setInputValues(
      inputValues.map((v, i) => (i === currentElement ? value : v))
    );

    if (value === "") {
      setOutputValues(
        outputValues.map((v, i) => (i === currentElement ? [""] : v))
      );
      return;
    }

    switch (currentElement) {
      case 0: {
        const keccakHash = encodeEvent(value);
        setOutputValues(
          outputValues.map((v, i) => (i === currentElement ? keccakHash : v))
        );
        break;
      }
      case 1: {
        encodeFunction(value).then((functionSignature) => {
          setOutputValues(
            outputValues.map((v, i) =>
              i === currentElement ? functionSignature : v
            )
          );
        });
        break;
      }
      case 2: {
        if (conversionDirection === "decimalToHex") {
          const hexValue = decimalToHex(value);
          setOutputValues(
            outputValues.map((v, i) => (i === currentElement ? hexValue : v))
          );
        } else {
          const decimalValue = hexToDecimal(value);
          setOutputValues(
            outputValues.map((v, i) =>
              i === currentElement ? decimalValue : v
            )
          );
        }
        break;
      }
      default: {
        setOutputValues(
          outputValues.map((v, i) => (i === currentElement ? `${value}` : v))
        );
      }
    }
  };

  // 2. Add an input field to Element 1, 5. Render the output result in Element 1
  const elements = [
    <div
      key="element-1"
      className="text-white flex flex-col items-center space-y-4"
    >
      <h3>Smart contract event to encode</h3>
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
              clearFields();
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
              clearFields();
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

  // Implement a function to switch the displayed element when a tab is clicked
  const switchElement = (index) => {
    setCurrentElement(index);
  };

  // Render the component with tabs for each element and display the selected element
  return (
    <div className="bg-slate-800 p-8">
      {/* Add the notification element */}
      {showNotification && (
        <div className="fixed top-0 right-0 bg-green-500 text-white p-4 rounded-lg m-4">
          Copied to clipboard!
        </div>
      )}
      <div className="bg-slate-800 p-8">
        {/* 1. Update the tabs container to center it horizontally on the screen */}
        <div className="flex justify-center mb-4 space-x-4">
          {elements.map((_, index) => (
            <button
              key={`tab-${index}`}
              onClick={() => switchElement(index)}
              className={`py-2 px-4 rounded hover:bg-sky-900 hover:text-white ${
                currentElement === index
                  ? "bg-blue-700 text-white"
                  : "bg-cyan-600 text-gray-300"
              }`}
            >
              {/* Modify the label of each button */}
              {index === 0
                ? "Events signature"
                : index === 1
                ? "Solidity function signature"
                : `Hex converter`}
            </button>
          ))}
        </div>
        {/* 7. Display the selected element */}
        <div className="bg-gray-700 p-6 rounded-md shadow-md w-full sm:w-2/3 md:w-1/2 mx-auto">
          {elements[currentElement]}
        </div>
      </div>
    </div>
  );
};

export default Converter;
