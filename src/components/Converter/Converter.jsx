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
      name: 'Generate event signature',
      description:
        'An event signature is a unique identifier for a specific event that can be emitted by a smart contract on the blockchain. Event signatures are generated using a specific formula that takes into account the event name and the types of data that the event emits.',
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
      description:
        'Event topics are used to subscribe to specific events emitted by smart contracts on the blockchain. To subscribe to an event, you need to first encode the event topics using the event signature, which is a unique identifier for the event.',
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
      name: 'Generate Solidity functions CALLDATA',
      description:
        'In web3 and Solidity, CALLDATA refers to the input data that is sent to a smart contract function when it is called from an external account or contract.',
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
      description:
        "In web3, encoding CALLDATA parameters involves converting the input parameters of a function into a format that can be included in a transaction's CALLDATA field.",
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
