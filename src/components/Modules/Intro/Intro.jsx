import React from 'react';
import styles from './Intro.module.scss';
import logoSquareRounded from '../../../../public/images/logoSquareRounded.svg';
import converter from '../../../../public/images/converter.svg';
import scEvents from '../../../../public/images/sc-events.svg';
import sc from '../../../../public/images/sc.svg';
import solidity from '../../../../public/images/solidity.svg';
import Image from 'next/image';

const Intro = () => {
  return (
    <div className={styles.intro}>
      <div className={styles.powered}>
        <Image
          src={logoSquareRounded}
          alt="Chainstack labs"
          height={24}
          width={24}
        />
        <span>Powered by Chainstack</span>
      </div>
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

      <div className={styles.grid}>
        {[
          {
            name: 'Smart contracts event tools',
            text: 'Easily work with event logs. Generate event signatures and encode event topics for efficient log filtering. Ideal for real-time monitoring, debugging, and analytics.',
            icon: () => <Image src={scEvents} height={60} width={60} />,
          },
          {
            name: 'Solidity CALLDATA tools',
            text: 'Enhance your smart contract development with our Solidity calldata utilities. Generate function signatures for contract interaction and encode calldata parameters. A must-have for seamless contract execution and data management.',
            icon: () => <Image src={solidity} height={60} width={60} />,
          },
          {
            name: 'Smart contract tools',
            text: 'Simplify your blockchain development workflow with our ABI and Code Retrieval Tool. Input a contract address to instantly fetch its ABI and source code. Essential for contract interaction, auditing, and reverse engineering.',
            icon: () => <Image src={sc} height={60} width={60} />,
          },
          {
            name: 'Converters',
            text: 'Streamline your development process with our all-in-one Blockchain Value Converter. Effortlessly convert between Wei, Gwei, and Ether, or transform hex to decimal and vice versa. Also includes Keccak-256 hashing and checksum address generation. A comprehensive tool for all your blockchain conversion needs.',
            icon: () => <Image src={converter} height={60} width={60} />,
          },
        ].map((item, idx) => {
          return (
            <div key={idx} className={styles.card}>
              {item.icon()}
              <div className={styles.cardName}>{item.name}</div>
              <div className={styles.cardText}>{item.text}</div>
            </div>
          );
        })}
      </div>

      {/* <div className={styles.section}>Smart contracts event tools</div>
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
      </div> */}
    </div>
  );
};

export default Intro;
