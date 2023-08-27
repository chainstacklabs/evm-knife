import React, { useEffect, useState } from 'react';
import styles from './Checksum.module.scss';
import InputWithLabel from '@/components/InputWithLabel/InputWithLabel';
import Web3 from 'web3';

const ChecksumAddress = ({ name, description }) => {
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    console.log(inputValue);
  }, [inputValue]);

  // checksum
  const handleInputChange = (string) => {
    if (string.trim() === '') {
      // Check if the string is empty or contains only whitespace
      return ''; // Return an empty string
    }

    // Check if the string only contains hexadecimal characters
    if (!/^0x[0-9a-fA-F]*$/.test(string)) {
      return 'This is not a valid address.'; // Return an empty string if invalid characters are present
    }

    try {
      const checksum = Web3.utils.toChecksumAddress(string);
      return checksum; // Return the checksum
    } catch (error) {
      return string; // Return the string as it is, if it's not a valid address yet
    }
  };

  return (
    <div className={styles.KeccakConverter}>
      <h1 className="module_header">Checksum address</h1>
      <div className="module_description">
        A checksummed address is a standard Ethereum address with certain
        characters capitalized to include a checksum validation. Checksumming is
        a way of having error-detection codes in an Ethereum address.
        Checksumming aims to prevent errors when an address is typed manually.
        <br />
        <br />
        Find more about checksum in Ethereum in the{' '}
        <a
          href="https://docs.chainstack.com/docs/smart-contracts-glossary?kjh#address-checksumming"
          target="_blank"
        >
          Chainstack developer portal
        </a>
        .
      </div>
      <InputWithLabel
        inputLabel="Address to checksum"
        inputPlaceholder="0xae2fc483527b8ef99eb5d9b44875f005ba1fae13"
        inputOnChange={(e) => setInputValue(e.target.value)}
        //   inputValue
        inputAllowClear
        inputShowCount
        withCopyButton={false}
      />

      <InputWithLabel
        inputLabel="Checksummed address"
        inputPlaceholder="0xae2Fc483527B8EF99EB5D9B44875F005ba1FaE13"
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

export default ChecksumAddress;
