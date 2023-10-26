import React, { useEffect, useState } from "react";

import styles from "./GenerateSolidityFunctionsCalldata.module.scss";
import InputWithLabel from "@/components/InputWithLabel/InputWithLabel";
import Web3 from "web3";

const GenerateSolidityFunctionsCalldata = ({ name, description }) => {
  const [inputValue, setInputValue] = useState("");

  // Function to encode solidity functions and parameters
  const encodeFunction = (func) => {
    const hashedFunction = Web3.utils.keccak256(func);
    if (hashedFunction) {
      return hashedFunction.slice(0, 10);
    }
    return ""; // Return an empty string if there's no hashed function
  };

  return (
    <div className={styles.GenerateSolidityFunctionsCalldata}>
      <h1 className="module_header">Generate Solidity function signatures</h1>
      <div className="module_description">
        In Solidity, a function signature is derived by taking the{" "}
        <a href="/keccak-256"> Keccak-256</a> hash representation of the
        function name along with its parameter types. This hash is then
        truncated to its first 4 bytes, which serve to uniquely identify the
        function within the smart contract.
        <br />
        <br />
        Learn how the encoding process work following the{" "}
        {/** Link to recipe */}
        <a href="https://shorturl.at/isFW4" target="_blank">
          How to encode calldata parameters to programmatically interact with a
          smart contract ↗
        </a>{" "}
        recipe in the Chainstack developer portal.
      </div>
      <InputWithLabel
        inputLabel="Function name and parameters type"
        inputPlaceholder="Transfer(address,uint256)"
        inputOnChange={(e) => setInputValue(e.target.value)}
        //   inputValue
        inputAllowClear
        inputShowCount
        withCopyButton={false}
      />

      <InputWithLabel
        inputLabel="4-bytes Solidity function signature"
        inputPlaceholder="0xa9059cbb"
        inputOnChange={() => {}}
        inputValue={encodeFunction(inputValue)}
        inputAllowClear={false}
        inputShowCount
        inputIsBordered={false}
        inputReadOnly={true}
        withCopyButton={true}
      />
    </div>
  );
};

export default GenerateSolidityFunctionsCalldata;
