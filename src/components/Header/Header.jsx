import React from 'react';
import Image from 'next/image';
import { Button, Tag } from 'antd';
import styles from './Header.module.scss';
import logoSquareRounded from '../../../public/images/logoSquareRounded.svg';
import Icon from '@ant-design/icons';
import IconMoon from '../Icons/IconMoon';
import IconSun from '../Icons/IconSun';

export default function Header(props) {
  return (
    <div className={styles.header}>
      <div className={styles.header_left}>
        <Image
          src={logoSquareRounded}
          className={styles.header_main_app__logo}
          alt="Chainstack labs"
          height={48}
          width={48}
        />
        <div className={styles.header_left__labels}>
          <div className={styles.name}>The EVM Swiss Army Knife</div>
          <div className={styles.description}>
            The ultimate EVM tool, convert and encode EVM values, all in one
            place
          </div>
        </div>
      </div>
      <div className={styles.header_right}>
        {/* <Tag color="blue">Only for internal use</Tag> */}
        {[
          {
            label: 'Repo',
            href: 'https://github.com/soos3d/web3-converter-next',
          },
        ].map((item, idx) => {
          return (
            <Button type="link" href={item.href} key={idx} target="_blank">
              {item.label} ↗
            </Button>
          );
        })}
        {/* <ButtonBrand /> */}
        <Button
          onClick={() =>
            props.handleThemeChange(props.theme === 'light' ? 'dark' : 'light')
          }
          type="ghost"
          icon={
            <Icon component={props.theme === 'light' ? IconSun : IconMoon} />
          }
        />
      </div>
    </div>
  );
}
