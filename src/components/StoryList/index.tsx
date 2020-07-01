import * as React from 'react';
import styles from './styles.module.css';
import { Link } from 'react-router-dom';
import { StoryType } from '../../containers/Story/types';

type ListType = {
  items: StoryType[];
  link?: string;
};
const List = ({ items, link }: ListType) => {
  return (
    <div className={styles.list}>
      {items.map(
        (listItem: StoryType) =>
          listItem && (
            <div className={styles.listItem} key={`item - ${listItem.id}`}>
              <Link className="link" to={`${link}/${listItem.id}`}>
                {listItem.title}
              </Link>
            </div>
          )
      )}
    </div>
  );
};
export default List;
