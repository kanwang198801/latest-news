import * as React from 'react';
import styles from './styles.module.css';

function ListItem({ children }) {
    return (
        <main className={styles.main}>
            <div className={styles.container}>
                {children}
            </div>
        </main>
    );
}
export default ListItem;
