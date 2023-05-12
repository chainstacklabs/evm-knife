import React from 'react';
import { ConfigProvider, theme } from 'antd';
import useLocalStorage from '@/pages/helpers/useLocalStorage';
import Header from '../Header/Header';
import styles from './LayoutWrapper.module.scss';

const LayoutWrapper = ({ children }) => {
  const [uiTheme, setUiTheme] = useLocalStorage(
    'chainstack-faucet-app-theme',
    'light'
  );
  const themeClassName = (theme) => {
    return `labs-theme-${theme}`;
  };

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#007BFF',
        },
        algorithm:
          uiTheme === 'light' ? theme.defaultAlgorithm : theme.darkAlgorithm,
      }}
    >
      <div className={themeClassName(uiTheme)}>
        <div className={styles.app}>
          <Header
            theme={uiTheme}
            currentTheme={theme}
            handleThemeChange={setUiTheme}
          />
          <div className={styles.content}>{children}</div>
        </div>
      </div>
    </ConfigProvider>
  );
};

export default LayoutWrapper;
