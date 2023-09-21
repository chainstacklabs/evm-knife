import React, { useEffect, useState } from "react";
import styles from "./EncodeCalldataParameters.module.scss";
import InputWithLabel from "@/components/InputWithLabel/InputWithLabel";
import Web3 from "web3";

const EncodeCalldataParameters = ({ name, description }) => {
  const [inputValue, setInputValue] = useState("");

  const encodeParameter = (topic) => {
    const paddedParameter = Web3.utils.padLeft(topic, 64); // 64 characters = 32 bytes encoding
    const encodedParam = paddedParameter.slice(2);
    return encodedParam;
  };

  return (
    <div className={styles.EncodeCalldataParameters}>
      <h1 className="module_header">Encode calldata parameters</h1>
      <div className="module_description">
        Parameters passed to the function in calldata are represented as 32
        bytes of data.
        <br />
        <br />
        Learn how the encoding process work following the{" "}
        {/** Link to recipe */}
        <a href="https://shorturl.at/ehIP9" target="_blank">
          How to encode calldata parameters to programmatically interact with a
          smart contract ↗
        </a>{" "}
        recipe in the Chainstack developer portal.
      </div>
      <InputWithLabel
        inputLabel="Parameter to encode"
        inputPlaceholder="0xdfd5293d8e347dfe59e90efd55b2956a1343963d"
        inputOnChange={(e) => setInputValue(e.target.value)}
        //   inputValue
        inputAllowClear
        inputShowCount
        withCopyButton={false}
      />

      <InputWithLabel
        inputLabel="Bytes32 encoded parameter"
        inputPlaceholder="000000000000000000000000dfd5293d8e347dfe59e90efd55b2956a1343963d"
        inputOnChange={() => {}}
        inputValue={inputValue && encodeParameter(inputValue)}
        inputAllowClear={false}
        inputShowCount
        inputIsBordered={false}
        inputReadOnly={true}
        withCopyButton={true}
      />
    </div>
  );
};

export default EncodeCalldataParameters;
