import React, { useEffect, useState } from 'react';
import styles from './Keccak-256.module.scss';
import InputWithLabel from '@/components/InputWithLabel/InputWithLabel';
import Web3 from 'web3';

const KeccakConverter = ({ name, description }) => {
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
    <div className={styles.KeccakConverter}>
      <h1 className="module_header">{name}</h1>
      <div className="module_description">{description()}</div>
      <InputWithLabel
        inputLabel="Value to hash to Keccak-256"
        inputPlaceholder="keccak256"
        inputOnChange={(e) => setInputValue(e.target.value)}
        //   inputValue
        inputAllowClear
        inputShowCount
        withCopyButton={false}
      />

      <InputWithLabel
        inputLabel="Hashed value"
        inputPlaceholder="0xb7845733ba102a68c6eb21c3cd2feafafd1130de581d7e73be60b76d775b6704"
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

export default KeccakConverter;
