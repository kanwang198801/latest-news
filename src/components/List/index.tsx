import * as React from 'react';
import styles from './styles.module.css';
import { Link } from 'react-router-dom'
function List({ items, hasLink, link }) {
    let list = "";

    if (hasLink) {
        list = items.map((listItem: any) => (
            <div className={styles.listItem}>
                <Link className="link" to={`${link}/${listItem.id}`} key={`item - ${listItem.id}`}>
                    {listItem.title}
                </Link >
            </div>
        ))
    }
    else {
        list = items.map((listItem: any) => (
            <div className={styles.listItem}>
                {listItem.title}
            </div>
        ))
    }
    return (
        <div className={styles.list}>
            {list}
        </div>
    );
}
export default List;
