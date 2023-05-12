import React, { useEffect, useState } from 'react';

import styles from './GenerateEventSignature.module.scss';
import InputWithLabel from '@/components/InputWithLabel/InputWithLabel';
import Web3 from 'web3';

const GenerateEventSignature = ({ name, description }) => {
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    console.log(inputValue);
  }, [inputValue]);

  // encode event
  const handleInputChange = (string) => {
    const keccakHash = Web3.utils.keccak256(string);
    return keccakHash || ''; // Return the keccakHash or an empty string
  };

  return (
    <div className={styles.GenerateEventSignature}>
      <h1 className="module_header">{name}</h1>
      <p className="module_description">{description}</p>
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
