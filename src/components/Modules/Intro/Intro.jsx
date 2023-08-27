import React from 'react';
import styles from './Intro.module.scss';

const Intro = () => {
  return (
    <div className={styles.intro}>
      <div className={styles.name}>
        The EVM
        <br /> Swiss Army Knife
      </div>
      <div className={styles.description}>
        Web3 EVM (Ethereum Virtual Machine) development refers to creating
        decentralized applications (DApps) that interact with the Ethereum
        blockchain and its smart contracts. Here are some essential tools
        commonly used to speed up development.
      </div>

      <div className={styles.powered}>Powered by Chainstack</div>

      {/* <div className={styles.grid}>
        {[
          {
            name: 'Smart contracts event tools',
            text: 'Event logs are a type of log entry in the Ethereum blockchain that contains information about events that have been triggered by smart contracts. Event logs are created when a contract emits an event in Solidity.',
          },
          {
            name: 'Solidity CALLDATA tools',
            text: 'In Solidity, CALLDATA refers to the input data that is sent along with a function call to a contract on the Ethereum blockchain. When you invoke a function on a smart contract, you can provide arguments or parameters to that function. These arguments, along with information about the function being called, are encoded into a hexadecimal string known as the CALLDATA, and it is included in the transaction that invokes the function.',
          },
          {
            name: 'Smart contract tools',
            text: 'A smart contract is a self-executing digital contract with the terms of the agreement directly written into code. It runs on a blockchain platform, most commonly associated with the Ethereum blockchain, but also present in other blockchain networks like Binance Smart Chain, Cardano, and more. The term "smart contract" was first coined by computer scientist and legal scholar Nick Szabo in 1994.',
          },
          {
            name: 'Converter',
            text: 'Just converting data from one type to another.',
          },
        ].map((item, idx) => {
          return (
            <div key={idx} className={styles.card}>
              <div className={styles.cardName}>{item.name}</div>
              <div className={styles.cardText}>{item.text}</div>
            </div>
          );
        })}
      </div> */}

      <div className={styles.section}>Smart contracts event tools</div>
      <div className={styles.description}>
        Event logs are a type of log entry in the Ethereum blockchain that
        contains information about events that have been triggered by smart
        contracts. Event logs are created when a contract emits an event in
        Solidity.
        <br />
        <br />
        Learn more about event logs by following this guide on the Chainstack
        developer portal: <br />
        <a
          href="https://docs.chainstack.com/docs/tracking-some-bored-apes-the-ethereum-event-logs-tutorial"
          target="_blank"
        >
          Tracking some Bored Apes: The Ethereum event logs tutorial ↗
        </a>
        .
      </div>

      <div className={styles.section}>Solidity CALLDATA tools</div>
      <div className={styles.description}>
        In Solidity, CALLDATA refers to the input data that is sent along with a
        function call to a contract on the Ethereum blockchain. When you invoke
        a function on a smart contract, you can provide arguments or parameters
        to that function. These arguments, along with information about the
        function being called, are encoded into a hexadecimal string known as
        the CALLDATA, and it is included in the transaction that invokes the
        function.
      </div>

      <div className={styles.section}>Smart contract tools</div>
      <div className={styles.description}>
        A smart contract is a self-executing digital contract with the terms of
        the agreement directly written into code. It runs on a blockchain
        platform, most commonly associated with the Ethereum blockchain, but
        also present in other blockchain networks like Binance Smart Chain,
        Cardano, and more. The term "smart contract" was first coined by
        computer scientist and legal scholar Nick Szabo in 1994.
      </div>

      <div className={styles.section}>Converter</div>
      <div className={styles.description}>
        Just converting data from one type to another.
      </div>
    </div>
  );
};

export default Intro;
