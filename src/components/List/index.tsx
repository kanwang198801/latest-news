import * as React from 'react';
import styles from './styles.module.css';
import { Link } from 'react-router-dom'
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
function List({ items, hasLink, link, type }) {
    let list = "";

    if (type === "story") {
        list = items.map((listItem: any) => (
            <div className={styles.listItem} key={`item - ${listItem.id}`}>
                <Link className="link" to={`${link}/${listItem.id}`}>
                    {listItem.title}
                </Link >
            </div>
        ))
    }
    else if (type === "comment") {
        list = items.map((listItem: any) => (
            <div className={styles.listItem} key={`item - ${listItem.id}`}>
                <div>{ReactHtmlParser(listItem.text)}</div>
                <h5><strong>By:</strong> {listItem.by}</h5>
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
