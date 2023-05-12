import React, { useState } from 'react';

import { Button, Input, Select, Space, InputNumber } from 'antd';
import styles from './InputWithLabel.module.scss';

const InputWithLabel = ({
  inputLabel,
  inputPlaceholder,
  inputOnChange,
  inputValue,
  inputAllowClear,
  inputShowCount,
  inputIsBordered,
  inputReadOnly,
  withCopyButton,
  inputOnlyNumbers = false,
}) => {
  const [isCopied, setIsCopied] = useState(false);
  const configuredInput = () => {
    if (inputOnlyNumbers === false) {
      return (
        <Input
          placeholder={inputPlaceholder}
          onChange={inputOnChange}
          value={inputValue}
          allowClear={inputAllowClear || false}
          showCount={inputShowCount || false}
          bordered={inputIsBordered || true}
          size="large"
          readOnly={inputReadOnly || false}
          enterButton="Search"
        />
      );
    }

    if (inputOnlyNumbers === true) {
      return (
        <InputNumber
          placeholder={inputPlaceholder}
          onChange={inputOnChange}
          value={inputValue}
          allowClear={inputAllowClear || false}
          showCount={inputShowCount || false}
          bordered={inputIsBordered || true}
          size="large"
          readOnly={inputReadOnly || false}
          enterButton="Search"
          style={{ width: '100%' }}
        />
      );
    }
  };

  return (
    <div className={styles.InputWithLabel}>
      <div className={styles.inputLabel}>{inputLabel}</div>

      {withCopyButton ? (
        <Space.Compact size="large" style={{ width: '100%' }}>
          {configuredInput()}
          <Button
            type="primary"
            className={isCopied === true && styles.copyButtonSuccess}
            onClick={() => {
              setIsCopied(true);
              navigator.clipboard.writeText(inputValue);
              setTimeout(() => setIsCopied(false), 1000);
            }}
          >
            {isCopied === false ? 'Copy result' : 'Copied!'}
          </Button>
        </Space.Compact>
      ) : (
        <>{configuredInput()}</>
      )}
    </div>
  );
};

export default InputWithLabel;
