import React, { ReactNode } from 'react';
import styles from './styles.module.css';

type ButtonType = {
  children: ReactNode;
};
const Button = ({ children }: ButtonType) => (
  <button className={styles.button}>{children}</button>
);
export default Button;
