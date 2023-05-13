import React, { useRef } from 'react';

import GenerateEventSignature from '../Modules/GenerateEventSignature/GenerateEventSignature';
import EncodeEventTopics from '../Modules/EncodeEventTopics/EncodeEventTopics';
import GenerateSolidityFunctionsCalldata from '../Modules/GenerateSolidityFunctionsCalldata/GenerateSolidityFunctionsCalldata';
import EncodeCalldataParameters from '../Modules/EncodeCalldataParameters/EncodeCalldataParameters';
import HexConverter from '../Modules/HexConverter/HexConverter';

import styles from './Converter.module.scss';

const Converter = () => {
  // this ref array is used for anchor scrolling
  const refs = useRef([]);

  const randomizer = () => Math.random().toString(36).slice(2);

  const converterContents = [
    {
      type: 'section',
      name: 'Smart contract events tools',
    },
    {
      type: 'module',
      name: 'Tools general information',
      description: () => (
        <div>
          Event logs are a type of log entry in the Ethereum blockchain that
          contains information about events that have been triggered by smart
          contracts. Event logs are created when a contract emits an event in
          Solidity.
          <br />
          <br />
          Learn more about event logs by following this guide on the Chainstack
          developer portal:{' '}
          <a
            href="https://docs.chainstack.com/docs/tracking-some-bored-apes-the-ethereum-event-logs-tutorial"
            target="_blank"
          >
            Tracking some Bored Apes: The Ethereum event logs tutorial
          </a>
        </div>
      ),
      isChild: true,
      component: (name, description, index) => (
        <div key={index + randomizer()}>
          <h1 className="module_header">{name}</h1>
          <div className="module_description" style={{ marginTop: '24px' }}>
            {description()}
          </div>
        </div>
      ),
    },
    {
      type: 'module',
      name: 'Generate event signature',
      description: () => (
        <div>
          An event signature is a unique identifier for a specific event that
          can be emitted by a smart contract on the blockchain. Event signatures
          are generated using a specific formula that takes into account the
          event name and the types of data that the event emits. The event
          signature is generated by hashing using Keccak-256 the name and
          parameter types of the event.
        </div>
      ),
      isChild: true,
      component: (name, description, index) => (
        <GenerateEventSignature
          key={index + randomizer()}
          name={name}
          description={description}
        />
      ),
    },
    {
      type: 'module',
      name: 'Encode event topics',
      description: () => (
        <>
          <div>
            An event topic is a 32 bytes representation of an event parameter.
            Encode a topic to use it to retrieve logs when querying your
            Chainstack node.
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
        </>
      ),
      isChild: true,
      component: (name, description, index) => (
        <EncodeEventTopics
          key={index + randomizer()}
          name={name}
          description={description}
        />
      ),
    },

    {
      type: 'section',
      name: 'Solidity CALLDATA tools',
    },
    {
      type: 'module',
      name: 'Generate Solidity functions signature',
      description: () => (
        <div>
          In web3 and Solidity, CALLDATA refers to the input data that is sent
          along a transaction when an account is interacting with a smart
          contract and calling its functions. The first 4 Bytes of CALLDATA
          represent the function&apos;s signature.
          <br />
          <br />
          Learn how the encoding process work following the{' '}
          <a
            href="https://docs.chainstack.com/recipes/how-to-encode-calldata-parameters-to-programmatically-interact-with-a-smart-contract"
            target="_blank"
          >
            How to encode callData parameters to programmatically interact with
            a smart contract ↗
          </a>{' '}
          recipe in the Chainstack developer portal.
        </div>
      ),
      isChild: true,
      component: (name, description, index) => (
        <GenerateSolidityFunctionsCalldata
          key={index + randomizer()}
          name={name}
          description={description}
        />
      ),
    },
    {
      type: 'module',
      name: 'Encode CALLDATA parameters',
      description: () => (
        <div>
          Parameters passed to the function in CALLDATA are a 32 bytes
          representation of the data being passed.
          <br />
          <br />
          Learn how the encoding process work following the{' '}
          <a
            href="https://docs.chainstack.com/recipes/how-to-encode-calldata-parameters-to-programmatically-interact-with-a-smart-contract"
            target="_blank"
          >
            How to encode callData parameters to programmatically interact with
            a smart contract ↗
          </a>{' '}
          recipe in the Chainstack developer portal.
        </div>
      ),
      isChild: true,
      component: (name, description, index) => (
        <EncodeCalldataParameters
          key={index + randomizer()}
          name={name}
          description={description}
        />
      ),
    },
    {
      type: 'section',
      name: 'Hex converter',
    },
    {
      type: 'module',
      name: 'Decimal → hexadecimal',
      description: 'Convert decimal to hexadecimal value.',
      isChild: true,
      component: (name, description, index) => (
        <HexConverter
          key={index + randomizer()}
          name={name}
          description={description}
          type={name.toLowerCase().replace(' → ', '-')}
        />
      ),
    },
    {
      type: 'module',
      name: 'Hexadecimal → decimal',
      description: 'Convert hexadecimal to decimal value.',
      isChild: true,
      component: (name, description, index) => (
        <HexConverter
          key={index + randomizer()}
          name={name}
          description={description}
          type={name.toLowerCase().replace(' → ', '-')}
        />
      ),
    },
  ];

  return (
    <div className={styles.converter}>
      <div className={styles.navigationBar}>
        {converterContents.map((item, index) => {
          if (item.type === 'section') {
            return (
              <div key={index + randomizer()} className={styles.sectionName}>
                {item.name}
              </div>
            );
          }
          if (item.type === 'module') {
            return (
              <>
                {/* {item.isChild === false && (
                  <div className={styles.divider}>------</div>
                )} */}
                <button
                  className={styles.moduleButton}
                  key={index + randomizer()}
                  onClick={() => {
                    return refs.current[index].scrollIntoView({
                      behavior: 'smooth',
                      block: 'start',
                      inline: 'start',
                    });
                  }}
                >
                  {item.name}
                </button>
              </>
            );
          }
        })}
      </div>

      <div className={styles.modulesList}>
        {converterContents.map((item, index) => {
          if (item.type === 'module') {
            return (
              <div
                className="module"
                key={item.name + index}
                ref={(element) => {
                  refs.current[index] = element;
                }}
              >
                {item.component(item.name, item.description, index)}
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default Converter;
