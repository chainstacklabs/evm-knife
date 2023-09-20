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
      <h1 className="module_header">Keccak-256</h1>
      <div className="module_description">
        Keccak-256 is a cryptographic hash function that generates a unique,
        fixed-size string of bytes for each unique input it receives. This
        feature makes it useful for ensuring data integrity, as any change in
        the input data leads to a different hash output. It&apos;s virtually
        impossible to derive the original input from the hash output, making it
        a one-way function.
        <br />
        <br />
        Find a list of examples where Keccak-256 is used in the{' '}
        <a
          href="https://docs.chainstack.com/docs/smart-contracts-glossary#keccak256"
          target="_blank"
        >
          Chainstack developer portal ↗
        </a>
        .
      </div>
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
