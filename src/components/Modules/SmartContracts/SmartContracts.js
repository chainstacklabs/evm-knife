import React, { useState } from 'react';
import styles from './SmartContracts.module.scss';
import InputWithLabel from '@/components/InputWithLabel/InputWithLabel';

const SmartContracts = ({ name, description }) => {
  const [inputValue, setInputValue] = useState(''); // create the state
  const [contractName, setContractName] = useState(''); // create the state for contract name
  const [abi, setAbi] = useState(''); // create the state for ABI
  const [sourceCode, setSourceCode] = useState(''); // create the state for ABI

// Function to handle API call
const handleApiCall = async () => {
  // Check if inputValue is a valid Ethereum address
  if (!/^0x[a-fA-F0-9]{40}$/.test(inputValue)) {
    console.log(`Invalid Ethereum address: ${inputValue}`);
    return;
  }

  console.log(`Input: ${inputValue}`);
  const response = await fetch('https://smart-contracts-api-xkooz.ondigitalocean.app/contractData', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ address: inputValue }), // Use inputValue as the address in the request body
  });

  // Check if the response is ok before proceeding
  if (!response.ok) {
    console.error(`HTTP error! status: ${response.status}`);
    const message = `Something went wrong with code ${response.status}. Please try again later.`
    setContractName(message)
    return;
  }

  const data = await response.json(); // Convert the response to JSON
  console.log(data); // Log the response data

  setContractName(data.contractName)
  setAbi(data.contractAbi)
  setSourceCode(data.contractCode)
};


  return (
    <div className={styles.SmartContracts}>
      <h1 className="module_header">{name}</h1>
      <div className="module_description">{description()}</div>
      <InputWithLabel
        inputLabel="Smart contract address"
        inputPlaceholder="0xE592427A0AEce92De3Edee1F18E0157C05861564"
        inputOnChange={(e) => setInputValue(e.target.value)}
        inputAllowClear
        inputShowCount
        withCopyButton={false}
        withSendButton={true}
        onSendButtonClick={handleApiCall} // Call handleApiCall when the Send button is clicked
      />

      <InputWithLabel
        inputLabel="Smart contract name"
        inputPlaceholder="SwapRouter"
        inputValue={contractName}
        inputAllowClear={false}
        inputShowCount
        inputIsBordered={false}
        inputReadOnly={true}
        withCopyButton={true}
      />

      <InputWithLabel
        inputLabel="Smart Contract ABI"
        inputPlaceholder='[{"inputs":[{"internalType":"address","name":"_factory","type":"address"},{"internalType":"address","name":"_WETH9","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"WETH9","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"components":[{"internalType":"bytes","name":"path","type":"bytes"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"uint256","name":"amountIn","type":"uint256"},{"internalType":"uint256","name":"amountOutMinimum","type":"uint256"}],"internalType":"struct ISwapRouter.ExactInputParams","name":"params","type":"tuple"}],"name":"exactInput","outputs":[{"internalType":"uint256","name":"amountOut","type":"uint256"}],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"address","name":"tokenIn","type":"address"},{"internalType":"address","name":"tokenOut","type":"address"},{"internalType":"uint24","name":"fee","type":"uint24"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"uint256","name":"amountIn","type":"uint256"},{"internalType":"uint256","name":"amountOutMinimum","type":"uint256"},{"internalType":"uint160","name":"sqrtPriceLimitX96","type":"uint160"}],"internalType":"struct ISwapRouter.ExactInputSingleParams","name":"params","type":"tuple"}],"name":"exactInputSingle","outputs":[{"internalType":"uint256","name":"amountOut","type":"uint256"}],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"bytes","name":"path","type":"bytes"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"uint256","name":"amountOut","type":"uint256"},{"internalType":"uint256","name":"amountInMaximum","type":"uint256"}],"internalType":"struct ISwapRouter.ExactOutputParams","name":"params","type":"tuple"}],"name":"exactOutput","outputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"}],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"address","name":"tokenIn","type":"address"},{"internalType":"address","name":"tokenOut","type":"address"},{"internalType":"uint24","name":"fee","type":"uint24"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"uint256","name":"amountOut","type":"uint256"},{"internalType":"uint256","name":"amountInMaximum","type":"uint256"},{"internalType":"uint160","name":"sqrtPriceLimitX96","type":"uint160"}],"internalType":"struct ISwapRouter.ExactOutputSingleParams","name":"params","type":"tuple"}],"name":"exactOutputSingle","outputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"factory","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes[]","name":"data","type":"bytes[]"}],"name":"multicall","outputs":[{"internalType":"bytes[]","name":"results","type":"bytes[]"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"refundETH","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"selfPermit","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"nonce","type":"uint256"},{"internalType":"uint256","name":"expiry","type":"uint256"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"selfPermitAllowed","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"nonce","type":"uint256"},{"internalType":"uint256","name":"expiry","type":"uint256"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"selfPermitAllowedIfNecessary","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"selfPermitIfNecessary","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"amountMinimum","type":"uint256"},{"internalType":"address","name":"recipient","type":"address"}],"name":"sweepToken","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"amountMinimum","type":"uint256"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"feeBips","type":"uint256"},{"internalType":"address","name":"feeRecipient","type":"address"}],"name":"sweepTokenWithFee","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"int256","name":"amount0Delta","type":"int256"},{"internalType":"int256","name":"amount1Delta","type":"int256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"uniswapV3SwapCallback","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountMinimum","type":"uint256"},{"internalType":"address","name":"recipient","type":"address"}],"name":"unwrapWETH9","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountMinimum","type":"uint256"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"feeBips","type":"uint256"},{"internalType":"address","name":"feeRecipient","type":"address"}],"name":"unwrapWETH9WithFee","outputs":[],"stateMutability":"payable","type":"function"},{"stateMutability":"payable","type":"receive"}]'
        inputValue={abi}
        inputAllowClear={false}
        inputShowCount
        inputIsBordered={false}
        inputReadOnly={true}
        withCopyButton={true}
      />  

      <InputWithLabel
        inputLabel="Smart Contract source code"
        inputPlaceholder="'// SPDX-License-Identifier: GPL-2.0-or-laterpragma solidity =0.7.6;pragma abicoder v2;import '@uniswap/v3-core/contracts/libraries/SafeCast.sol';import '@uniswap/v3-core/contracts/libraries/TickMath.sol';import '@uniswap/v3-core/contracts/interfaces/IUniswapV3Pool.sol';import './interfaces/ISwapRouter.sol';"
        inputValue={sourceCode}
        inputAllowClear={false}
        inputShowCount
        inputIsBordered={false}
        inputReadOnly={true}
        withCopyButton={true}
      />  
    </div>
  );
};

export default SmartContracts;
