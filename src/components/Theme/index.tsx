import React, { ReactNode } from 'react';
import styles from './styles.module.css';

type ThemeType = {
  children: ReactNode;
};
const Theme = ({ children }: ThemeType) => (
  <main className={styles.main}>
    <div className={styles.container}>{children}</div>
  </main>
);
export default Theme;
