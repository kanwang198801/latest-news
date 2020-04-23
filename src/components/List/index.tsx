import * as React from 'react';
import styles from './styles.module.css';
import { Link } from 'react-router-dom'
import ReactHtmlParser from 'react-html-parser';
import { StoryType, CommentType } from "../../containers/Story/types"
function List({ items, link, type }) {
    let list = "";

    if (type === "story") {
        list = items.map((listItem: StoryType) => {
            if (listItem) {
                return (<div className={styles.listItem} key={`item - ${listItem.id}`}>
                    <Link className="link" to={`${link}/${listItem.id}`}>
                        {listItem.title}
                    </Link >
                </div>
                );
            }
        })
    }
    else if (type === "comment") {

        list = items.map((listItem: CommentType) => {
            if (listItem) {
                const dateTime = new Date(listItem.time * 1000);
                const date = dateTime.getDate() + '/' + (dateTime.getMonth() + 1) + '/' + dateTime.getFullYear();
                return (
                    <div className={styles.listItem} key={`item - ${listItem.id}`}>
                        <div>{ReactHtmlParser(listItem.text)}</div>
                        <h5><strong>By:</strong> {listItem.by} - {date}</h5>
                    </div>
                );
            }
        })
    }
    return (
        <div className={styles.list}>
            {list}
        </div>
    );
}
export default List;
