import React from "react";
import { Button } from "antd";
import Image from "next/image";

import logoSquareRounded from "../../../../public/images/logoSquareRounded.svg";
import converter from "../../../../public/images/converter.svg";
import scEvents from "../../../../public/images/sc-events.svg";

import IconBulb from "@/components/Icons/IconBulb";

import sc from "../../../../public/images/sc.svg";
import solidity from "../../../../public/images/solidity.svg";
import styles from "./Intro.module.scss";

const Intro = () => {
  const iconSize = 32;

  return (
    <div className={styles.intro}>
      <a
        className={styles.powered}
        href="https://chainstack.com/?utm_source=web3knife&utm_medium=referral"
        target="_blank"
      >
        <Image
          src={logoSquareRounded}
          alt="Chainstack labs"
          height={24}
          width={24}
          className={styles.imgRotation}
        />
        <span>Powered by Chainstack ↗</span>
      </a>
      <div className={styles.name}>
        The EVM
        <br /> Swiss Army Knife
      </div>
      <div className={styles.description}>
        Web3 Ethereum Virtual Machine (EVM) development refers to creating
        decentralized applications (DApps) that interact with the Ethereum
        blockchain and its smart contracts. Here are some essential tools
        commonly used to speed up development.
      </div>

      <div className={styles.grid}>
        {[
          {
            name: "Smart contracts event tools",
            text: "Easily work with event logs. Generate event signatures and encode event topics for efficient log filtering. Ideal for real-time monitoring, debugging, and analytics.",
            icon: () => (
              <Image src={scEvents} height={iconSize} width={iconSize} />
            ),
          },
          {
            name: "Solidity calldata tools",
            text: "Enhance your smart contract development with our Solidity calldata utilities. Generate function signatures for contract interaction and encode calldata parameters. Useful for seamless contract execution and data management.",
            icon: () => (
              <Image src={solidity} height={iconSize} width={iconSize} />
            ),
          },
          {
            name: "Smart contract tools",
            text: "Simplify your blockchain development workflow with our ABI and Code Retrieval Tool. Input a contract address to instantly fetch its ABI and source code. Ideal for contract interaction, auditing, and reverse engineering.",
            icon: () => <Image src={sc} height={iconSize} width={iconSize} />,
          },
          {
            name: "Converters",
            text: "Streamline your development process with our all-in-one Blockchain Value Converter. Effortlessly convert between Wei, Gwei, and Ether, or transform hex to decimal and vice versa. Also includes Keccak-256 hashing and checksum address generation.",
            icon: () => (
              <Image src={converter} height={iconSize} width={iconSize} />
            ),
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

      <div className={styles.informer}>
        <div className={styles.left}>
          <IconBulb />
          <div className={styles.lines}>
            <div>Missing tool?</div>
            <div>Leave a request for a new one</div>
          </div>
        </div>
        <Button
          size="large"
          type="link"
          href="https://ideas.chainstack.com/feature-requests"
          target="_blank"
        >
          Leave a request ↗
        </Button>
      </div>
    </div>
  );
};

export default Intro;
