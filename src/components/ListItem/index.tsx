import * as React from 'react';
import styles from './styles.module.css';

function ListItem({ listItem }) {
    return (
        <div className={styles.listItem}>
            {listItem.title}
        </div>
    );
}
export default ListItem;
