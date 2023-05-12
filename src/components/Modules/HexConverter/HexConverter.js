import React, { useEffect, useState } from 'react';
import styles from './HexConverter.module.scss';
import InputWithLabel from '@/components/InputWithLabel/InputWithLabel';
import Web3 from 'web3';

const HexConverter = ({ name, description, type }) => {
  const [hexadecimal, setHexadecimal] = useState(null);
  const [decimal, setDecimal] = useState(null);

  const decimalToHex = (decimalNum) => {
    return Web3.utils.toHex(decimalNum);
  };

  const hexToDecimal = (hexNumber) => {
    if (!hexNumber || !/^(0x)?[0-9a-fA-F]+$/.test(hexNumber)) {
      return ''; // Return an empty string if the input is invalid
    }

    // Add the "0x" prefix if it's not present
    if (!hexNumber.startsWith('0x')) {
      hexNumber = '0x' + hexNumber;
    }
    return Web3.utils.hexToNumberString(hexNumber);
  };

  return (
    <div className={styles.HexConverter}>
      <h1 className="module_header">{name}</h1>
      <p className="module_description">{description}</p>
      {type === 'decimal-hexadecimal' && (
        <>
          <InputWithLabel
            inputLabel="Decimal"
            inputPlaceholder="16892022"
            inputOnChange={(e) => setDecimal(e.target.value)}
            // inputValue={decimal}
            inputAllowClear
            inputShowCount
            withCopyButton={false}
            // inputOnlyNumbers={true}
          />
          <InputWithLabel
            inputLabel="Hexadecimal"
            inputPlaceholder="0x101C076"
            // inputOnChange={(e) => setHexadecimal(e.target.value)}
            inputValue={decimalToHex(decimal)}
            inputAllowClear={false}
            inputShowCount
            inputIsBordered={false}
            inputReadOnly={true}
            withCopyButton={true}
          />
        </>
      )}
      {type === 'hexadecimal-decimal' && (
        <>
          <InputWithLabel
            inputLabel="Hexadecimal"
            inputPlaceholder="0x101C076"
            inputOnChange={(e) => setHexadecimal(e.target.value)}
            // inputValue={decimal}
            inputAllowClear
            inputShowCount
            withCopyButton={false}
          />
          <InputWithLabel
            inputLabel="Decimal"
            inputPlaceholder="16892022"
            // inputOnChange={(e) => setHexadecimal(e.target.value)}
            inputValue={hexToDecimal(hexadecimal)}
            inputAllowClear={false}
            inputShowCount
            inputIsBordered={false}
            inputReadOnly={true}
            withCopyButton={true}
            inputOnlyNumbers={true}
          />
        </>
      )}
    </div>
  );
};

export default HexConverter;
