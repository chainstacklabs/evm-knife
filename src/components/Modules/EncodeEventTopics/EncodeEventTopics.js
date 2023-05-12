import React, { useEffect, useState } from 'react';
import styles from './EncodeEventTopics.module.scss';
import InputWithLabel from '@/components/InputWithLabel/InputWithLabel';
import Web3 from 'web3';

const EncodeEventTopics = ({ name, description }) => {
  const [inputValue, setInputValue] = useState('');

  const encodeTopic = (topic) => {
    // Check if the input doesn't start with '0x', then add it
    if (!topic.startsWith('0x')) {
      topic = '0x' + topic;
    }
    const encodedParameter = Web3.utils.padLeft(topic, 64); // 64 characters = 32 bytes encoding
    return encodedParameter;
  };

  return (
    <div className={styles.EncodeEventTopics}>
      <h1 className="module_header">{name}</h1>
      <p className="module_description">{description}</p>
      <InputWithLabel
        inputLabel="Topic to encode"
        inputPlaceholder="0x85BC2E8Aaad5dBc347db49Ea45D95486279eD918"
        inputOnChange={(e) => setInputValue(e.target.value)}
        //   inputValue
        inputAllowClear
        inputShowCount
        withCopyButton={false}
      />

      <InputWithLabel
        inputLabel="Bytes-32 encoded topic"
        inputPlaceholder="0x00000000000000000000000085BC2E8Aaad5dBc347db49Ea45D95486279eD918"
        inputOnChange={() => {}}
        inputValue={inputValue && encodeTopic(inputValue)}
        inputAllowClear={false}
        inputShowCount
        inputIsBordered={false}
        inputReadOnly={true}
        withCopyButton={true}
      />
    </div>
  );
};

export default EncodeEventTopics;
