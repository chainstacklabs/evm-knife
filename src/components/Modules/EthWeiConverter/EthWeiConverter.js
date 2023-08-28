import React, { useEffect, useState } from 'react';
import styles from './EthWeiConverter.module.scss';
import { InputNumber, Button } from 'antd';
import { CopyOutlined, CheckOutlined } from '@ant-design/icons';

const EthWeiConverter = ({ name, description }) => {
  const [targetValue, setTargetValue] = useState(null);
  const [focused, setFocused] = useState(null);
  const [isCopied, setIsCopied] = useState({
    status: false,
    index: null,
  });

  const eToNum = (num) => {
    let sign = '';
    (num += '').charAt(0) == '-' && ((num = num.substring(1)), (sign = '-'));
    let arr = num.split(/[e]/gi);
    if (arr.length < 2) return sign + num;
    let dot = (0.1).toLocaleString().substr(1, 1),
      n = arr[0],
      exp = +arr[1],
      w = (n = n.replace(/^0+/, '')).replace(dot, ''),
      pos = n.split(dot)[1] ? n.indexOf(dot) + exp : w.length + exp,
      L = pos - w.length,
      s = '' + BigInt(w);
    w =
      exp >= 0
        ? L >= 0
          ? s + '0'.repeat(L)
          : r()
        : pos <= 0
        ? '0' + dot + '0'.repeat(Math.abs(pos)) + s
        : r();
    L = w.split(dot);
    if ((L[0] == 0 && L[1] == 0) || (+w == 0 && +s == 0)) w = 0; //** added 9/10/2021
    return sign + w;
    function r() {
      return w.replace(new RegExp(`^(.{${pos}})(.)`), `$1${dot}$2`);
    }
  };

  return (
    <div className={styles.EthWeiConverter}>
      <h1 className="module_header">Eth – Wei</h1>
      <div className="module_description">
        Conversion between Ether and its sub-units.
      </div>
      {[
        { name: 'ether', precision: 18 },
        { name: 'milliether', precision: 15 },
        { name: 'microether', precision: 12 },
        { name: 'mwei', precision: 9 },
        { name: 'gwei', precision: 6 },
        { name: 'kwei', precision: 3 },
        { name: 'wei', precision: 0 },
      ].map((item, index) => {
        return (
          <div key={index} className={styles.numberInput}>
            <InputNumber
              size="large"
              controls={false}
              placeholder={`Enter ${item.name} value`}
              onFocus={() => setFocused(index)}
              onChange={(value) =>
                setTargetValue(value ? value * 10 ** item.precision : null)
              }
              value={targetValue ? targetValue / 10 ** item.precision : null}
              formatter={(value) => {
                // if (focused === index) {
                //   return value;
                // }
                // return Number(value).toExponential();

                // if (
                //   value &&
                //   Number.isInteger(value) === false
                //   // &&
                //   // value.toString().split('.')[1].length >= 5
                // ) {
                //   return Number(value).toExponential();
                // }
                return value;
              }}
              addonBefore={
                <div style={{ width: '75px', textAlign: 'right' }}>
                  {item.name}
                </div>
              }
            />

            <Button
              onClick={() => {
                setIsCopied({
                  status: true,
                  index: index,
                });
                navigator.clipboard.writeText(
                  targetValue
                    ? eToNum(targetValue / 10 ** item.precision)
                    : null
                );
                setTimeout(
                  () =>
                    setIsCopied({
                      status: false,
                      index: index,
                    }),
                  1000
                );
              }}
              type="text"
              icon={
                isCopied.status === true && isCopied.index === index ? (
                  <CheckOutlined />
                ) : (
                  <CopyOutlined />
                )
              }
              size="large"
            />
          </div>
        );
      })}
    </div>
  );
};

export default EthWeiConverter;
