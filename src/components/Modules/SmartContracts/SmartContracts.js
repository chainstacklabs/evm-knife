import React, { useState } from 'react';
import styles from './SmartContracts.module.scss';
import InputWithLabel from '@/components/InputWithLabel/InputWithLabel';

import { Button } from 'antd';

import AceEditor from 'react-ace';

import 'ace-builds/src-noconflict/mode-javascript';
import 'ace-builds/src-noconflict/mode-json';
import 'ace-builds/src-noconflict/theme-github';
import 'ace-builds/src-noconflict/theme-xcode';
import 'ace-builds/src-noconflict/ext-language_tools';

const SmartContracts = ({ name, description }) => {
  const [inputValue, setInputValue] = useState(''); // create the state
  const [contractName, setContractName] = useState(''); // create the state for contract name
  const [abi, setAbi] = useState(''); // create the state for ABI
  const [sourceCode, setSourceCode] = useState(''); // create the state for ABI

  // Function to handle API call
  const handleApiCall = async () => {
    console.log('Calling source code API...');
    // Check if inputValue is a valid Ethereum address
    if (!/^0x[a-fA-F0-9]{40}$/.test(inputValue)) {
      return;
    }

    // Make the API call
    const response = await fetch(`api/contractData?address=${inputValue}`, {
      method: 'GET',
    });

    // Check if the response is ok before proceeding
    if (!response.ok) {
      console.error(`HTTP error! status: ${response.status}`);
      const message = `Something went wrong with code ${response.status}. Please try again later.`;
      setContractName(message);
      return;
    }

    const data = await response.json(); // Convert the response to JSON
    console.log(`Contract address ${inputValue}`);
    console.log(`Contract name ${data.ContractName}`);
    // Update the state variables with the received data
    setContractName(data.ContractName);
    setAbi(JSON.stringify(data.ABI, null, 2)); // Pretty-print the ABI
    setSourceCode(data.SourceCode);
  };

  return (
    <div className={styles.SmartContracts}>
      <h1 className="module_header">Smart contract source code and ABI</h1>
      <div className="module_description">
        {' '}
        Input a smart contract address to retrieve its source code and ABI. Note
        that the contract must be verified.
        <br />
        <br />
        Find an example of verified smart contract on{' '}
        <a
          href="https://etherscan.io/token/0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d"
          target="_blank"
        >
          Etherscan ↗
        </a>
        .
      </div>
      <InputWithLabel
        inputLabel="Smart contract address"
        inputPlaceholder="0xE592427A0AEce92De3Edee1F18E0157C05861564"
        inputOnChange={(e) => setInputValue(e.target.value)}
        inputAllowClear
        inputShowCount
        withCopyButton={false}
        withConvertButton={true}
        onConvertButtonClick={handleApiCall} // Call handleApiCall when the Send button is clicked
      />

      <InputWithLabel
        inputLabel="Smart contract name"
        inputPlaceholder="SwapRouter"
        inputValue={contractName}
        inputAllowClear={false}
        inputShowCount
        inputIsBordered={false}
        inputReadOnly={true}
        withCopyButton={true}
      />

      <>
        <div className={styles.wrapper}>
          <div className={styles.codeBoxLabel}>Smart Contract ABI</div>
          <Button type="primary" size="small">
            Copy code
          </Button>
        </div>
        <div className={styles.codeBox}>
          <AceEditor
            mode="json"
            theme="github"
            name="smart-contract-abi"
            value={abi != '' ? JSON.parse(abi) : abi}
            showGutter={true}
            width="750"
            highlightActiveLine={false}
            readOnly
            wrapEnabled
            placeholder="Provide Smart contract address to see ABI"
          />
        </div>
      </>

      <>
        <div className={styles.wrapper}>
          <div className={styles.codeBoxLabel}>Smart Contract source code</div>
          <Button type="primary" size="small">
            Copy code
          </Button>
        </div>
        <div className={styles.codeBox}>
          <AceEditor
            mode="javascript"
            theme="xcode"
            name="source-code"
            value={sourceCode}
            showGutter={true}
            width="750"
            highlightActiveLine={true}
            readOnly
            wrapEnabled
            placeholder="Provide Smart contract address to see source code"
          />
        </div>
      </>
    </div>
  );
};

export default SmartContracts;
