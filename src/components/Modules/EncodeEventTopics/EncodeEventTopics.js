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
      <h1 className="module_header">Encode event topics</h1>
      <div className="module_description">
        An event topic is a 32 bytes representation of an event parameter.
        Encode a topic to use it to retrieve logs when querying your Chainstack
        node.
        <br />
        <br />
        Learn how to retrieve event logs using the{' '}
        <a
          href="https://docs.chainstack.com/reference/ethereum-getlogs"
          target="_blank"
        >
          eth_getLogs ↗
        </a>{' '}
        method on the Chainstack developer portal.
      </div>
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
        inputLabel="Bytes32 encoded topic"
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
