import React, { useState, useEffect } from 'react';
import styles from './LayoutWrapper.module.scss';
import { useRouter } from 'next/router';

import { Menu } from 'antd';
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
  ExpandOutlined,
  FileAddOutlined,
} from '@ant-design/icons';

const LayoutWrapper = ({ children }) => {
  const router = useRouter();
  const [activeNavItem, setActiveNavItem] = useState(
    router.pathname === '/' ? 'home' : router.pathname
  );

  useEffect(() => {
    router.push(activeNavItem === 'home' ? '/' : activeNavItem);
  }, [activeNavItem]);

  function getItem(label, key, icon, children, type) {
    return {
      key,
      icon,
      children,
      label,
      type,
    };
  }

  const items = [
    getItem('Home', 'home', <AppstoreOutlined />),

    { type: 'divider' },

    getItem('Smart contract event tools', '2', <FileAddOutlined />, [
      getItem('Generate event signature', 'generate-event-signature'),
      getItem('Encode event topics', 'encode-event-topics'),
    ]),

    { type: 'divider' },

    getItem('Solidity calldata tools', '3', <ExpandOutlined />, [
      getItem(
        'Generate Solidity functions signature',
        'generate-solidity-functions-signature'
      ),
      getItem('Encode CALLDATA parameters', 'encode-calldata-parameters'),
    ]),

    { type: 'divider' },

    getItem('Smart contract tools', '4', <SettingOutlined />, [
      getItem(
        'Smart contract source code and ABI',
        'smart-contract-source-code-and-abi'
      ),
    ]),

    { type: 'divider' },

    getItem('Converters', '5', <MailOutlined />, [
      getItem('Decimal → hexadecimal', 'decimal-hexadecimal'),
      getItem('Hexadecimal → decimal', 'hexadecimal-decimal'),
      getItem('Eth – Wei', 'eth-wei'),
      getItem('Keccak-256', 'keccak-256'),
      getItem('Checksum address', 'checksum-address'),
    ]),
  ];
  // const items = [
  //   getItem('Home', 'home', <AppstoreOutlined />),

  //   { type: 'divider' },

  //   getItem('Smart contract event tools', '2', <FileAddOutlined />, [
  //     getItem('Generate event signature', 'generate-event-signature'),
  //     getItem('Encode event topics', 'encode-event-topics'),
  //   ]),

  //   { type: 'divider' },

  //   getItem('Solidity calldata tools', '3', <ExpandOutlined />, [
  //     getItem(
  //       'Generate Solidity functions signature',
  //       'generate-solidity-functions-signature'
  //     ),
  //     getItem('Encode CALLDATA parameters', 'encode-calldata-parameters'),
  //   ]),

  //   { type: 'divider' },

  //   getItem('Smart contract tools', '4', <SettingOutlined />, [
  //     getItem(
  //       'Smart contract source code and ABI',
  //       'smart-contract-source-code-and-abi'
  //     ),
  //   ]),

  //   { type: 'divider' },

  //   getItem('Converters', '5', <MailOutlined />, [
  //     getItem('Decimal → hexadecimal', 'decimal-hexadecimal'),
  //     getItem('Hexadecimal → decimal', 'hexadecimal-decimal'),
  //     getItem('Eth – Wei', 'eth-wei'),
  //     getItem('Keccak-256', 'keccak-256'),
  //     getItem('Checksum address', 'checksum-address'),
  //   ]),
  // ];

  const onClick = (e) => {
    setActiveNavItem(e.key);
  };

  return (
    <div className="labs-theme-light">
      <div className={styles.app}>
        <Menu
          onClick={onClick}
          selectedKeys={[activeNavItem.replace('/', '')]}
          defaultOpenKeys={['2', '3', '4', '5']}
          mode="inline"
          items={items}
          className={styles.navbar}
        />
        <div className={styles.content}>
          <div className={styles.contentWrapper}>{children}</div>
        </div>
      </div>
    </div>
  );
};

export default LayoutWrapper;
