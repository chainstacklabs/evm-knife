import React, { useState } from "react";
import InputWithLabel from "@/components/InputWithLabel/InputWithLabel";
import Web3 from "web3";
import { Button, Tooltip } from "antd";
import styles from "./EnsToAddressConverter.module.scss";

const EnsToAddressConverter = () => {
  const [ensName, setEnsName] = useState("");
  const [ethAddress, setEthAddress] = useState("");

  const web3 = new Web3(
    new Web3.providers.HttpProvider(process.env.NEXT_PUBLIC_CHAINSTACK_RPC)
  );

  const convertEnsToAddress = async () => {
    console.log("Resovling ENS...");
    try {
      const address = await web3.eth.ens.getAddress(ensName);
      console.log(`${ensName} resolves to ${address}`);
      setEthAddress(address);
    } catch (error) {
      setEthAddress("Invalid ENS address");
    }
  };

  return (
    <div className={styles.EnsToAddressConverter}>
      <h1 className="module_header">ENS to Address Converter</h1>
      <div className="module_description">
        Convert an ENS name to an Ethereum address.
      </div>

      <InputWithLabel
        inputLabel="Enter ENS Name"
        inputPlaceholder=""
        inputOnChange={(e) => setEnsName(e.target.value)}
        withConvertButton={true}
        onConvertButtonClick={convertEnsToAddress}
      />

      <InputWithLabel
        inputLabel="Ethereum Address"
        inputPlaceholder=""
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
