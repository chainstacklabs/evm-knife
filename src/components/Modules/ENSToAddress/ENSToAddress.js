import React, { useState } from "react";
import InputWithLabel from "@/components/InputWithLabel/InputWithLabel";
import Web3 from "web3";
import { Spin, Button, Tooltip } from "antd";
import styles from "./EnsToAddressConverter.module.scss";

const EnsToAddressConverter = () => {
  const [ensName, setEnsName] = useState("");
  const [ethAddress, setEthAddress] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const web3 = new Web3(
    new Web3.providers.HttpProvider(process.env.NEXT_PUBLIC_CHAINSTACK_RPC)
  );

  // Validates the ENS name and appends '.eth' if necessary
  const validateEnsName = (ensName) => {
    console.log(`ENS passed: ${ensName}`);
    setIsLoading(true);

    if (typeof ensName !== "string") {
      return null;
    }
    return ensName.endsWith(".eth") ? ensName : `${ensName}.eth`;
  };

  // Resolves the ENS name to an Ethereum address
  const resolveEnsToAddress = async (ensName) => {
    console.log("Resolving ENS...");
    try {
      return await web3.eth.ens.getAddress(ensName);
    } catch (error) {
      throw new Error("Invalid ENS address");
    }
  };

  // Main function to convert ENS to Ethereum address
  const convertEnsToAddress = async () => {
    const validEnsName = validateEnsName(ensName);

    if (!validEnsName) {
      setEthAddress("Invalid input");
      return;
    }

    setEnsName(validEnsName); // Update the state if needed

    try {
      const address = await resolveEnsToAddress(validEnsName);
      console.log(`${ensName} resolves to ${address}`);
      setEthAddress(address);
    } catch (error) {
      setEthAddress(error.message);
    }
    setIsLoading(false);
  };

  return (
    <div className={styles.EnsToAddressConverter}>
      <h1 className="module_header">ENS to address converter</h1>
      <div className="module_description">
        Convert an ENS name to an Ethereum address.
        <br />
        <br />
        Input the name with or without the <code>.eth</code> extension.
      </div>

      <InputWithLabel
        inputLabel="Enter ENS name"
        inputPlaceholder="jaredfromsubway"
        inputOnChange={(e) => setEnsName(e.target.value)}
        withConvertButton={true}
        onConvertButtonClick={convertEnsToAddress}
        isLoading={isLoading}
      />

      <InputWithLabel
        inputLabel="Ethereum address"
        inputPlaceholder="0xae2Fc483527B8EF99EB5D9B44875F005ba1FaE13"
        inputOnChange={() => {}}
        inputValue={ethAddress}
        inputAllowClear={false}
        inputShowCount
        inputIsBordered={false}
        inputReadOnly={true}
        withCopyButton={true}
      />
    </div>
  );
};

export default EnsToAddressConverter;
