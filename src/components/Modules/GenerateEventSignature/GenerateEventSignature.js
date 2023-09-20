import React, { useEffect, useState } from "react";

import styles from "./GenerateEventSignature.module.scss";
import InputWithLabel from "@/components/InputWithLabel/InputWithLabel";
import Web3 from "web3";

const GenerateEventSignature = () => {
  const [inputValue, setInputValue] = useState("");

  // useEffect(() => {
  //   console.log(inputValue);
  // }, [inputValue]);

  // encode event
  const handleInputChange = (string) => {
    const keccakHash = Web3.utils.keccak256(string);
    return keccakHash || ""; // Return the keccakHash or an empty string
  };

  return (
    <div className={styles.GenerateEventSignature}>
      <h1 className="module_header">Generate event signature</h1>
      <div className="module_description">
        An event signature is a unique identifier for a specific event emitted
        by a smart contract on the blockchain. These signatures are generated
        using a formula that takes into account the event name and its emitted
        data types. Specifically, the event signature is produced by hashing the
        event&apos;s name and parameter types with Keccak-256.
      </div>
      <InputWithLabel
        inputLabel="Event name and parameters type"
        inputPlaceholder="Transfer(address,address,uint256)"
        inputOnChange={(e) => setInputValue(e.target.value)}
        //   inputValue
        inputAllowClear
        inputShowCount
        withCopyButton={false}
      />

      <InputWithLabel
        inputLabel="Event signature"
        inputPlaceholder="0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef"
        inputOnChange={() => {}}
        inputValue={handleInputChange(inputValue)}
        inputAllowClear={false}
        inputShowCount
        inputIsBordered={false}
        inputReadOnly={true}
        withCopyButton={true}
      />
    </div>
  );
};

export default GenerateEventSignature;
