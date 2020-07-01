import * as React from 'react';
import styles from './styles.module.css';
import ReactHtmlParser from 'react-html-parser';
import { CommentType } from '../../containers/Story/types';

type ListType = {
  items: CommentType[];
};
const List = ({ items }: ListType) => {
  const list = items.map((listItem: CommentType) => {
    if (listItem) {
      const dateTime = new Date(listItem.time * 1000);
      const date =
        dateTime.getDate() +
        '/' +
        (dateTime.getMonth() + 1) +
        '/' +
        dateTime.getFullYear();
      return (
        <div className={styles.listItem} key={`item - ${listItem.id}`}>
          <div>{ReactHtmlParser(listItem.text)}</div>
          <h5>
            <strong>By:</strong> {listItem.by} - {date}
          </h5>
        </div>
      );
    }
    return null;
  });

  return <div className={styles.list}>{list}</div>;
};
export default List;
