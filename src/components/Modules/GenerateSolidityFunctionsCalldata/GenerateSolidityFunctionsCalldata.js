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
      <h1 className="module_header">Generate Solidity functions signature</h1>
      <div className="module_description">
        {" "}
        In Web3 and Solidity, calldata refers to the input data that is sent
        along a transaction when an account is interacting with a smart contract
        and calling its functions. The first 4 bytes of calldata represent the
        function&apos;s signature.
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
