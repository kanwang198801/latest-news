import * as React from 'react';
import styles from './styles.module.css';
import ListItem from "../../components/ListItem";
import { Link } from 'react-router-dom'
function List({ items, hasLink, link }) {
    let list = "";
    if (hasLink) {
        list = items.map((listItem) => (
            <Link to={`${link}/${listItem.id}`} key={`item - ${listItem.id}`}>
                <ListItem listItem />
            </Link >
        ))
    }
    else {
        list = items.map((listItem) => (
            <ListItem listItem />
        ))
    }
    return (
        <div className={styles.list}>
            {list}
        </div>
    );
}
export default List;
