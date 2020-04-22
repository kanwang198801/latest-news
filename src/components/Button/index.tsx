import * as React from 'react';
import styles from './styles.module.css';

function Button({ children }) {
    return (
        <button className={styles.button}>{children}</button>
    );
}
export default Button;
