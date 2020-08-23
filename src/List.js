import React from 'react';
import { sortBy } from "lodash";

const SORTS = {
  NONE: list => list,
  TITLE: list => sortBy(list, 'title'),
  AUTHOR: list => sortBy(list, 'author'),
  COMMENT: list => sortBy(list, 'num_comments').reverse(),
  POINT: list => sortBy(list, 'points').reverse(),
};

const List = ({ list, onRemoveItem }) => {
  const [sort, setSort] = React.useState('NONE');
  const [reverse, setReverse] = React.useState(false);

  const handleSort = sortKey => {
    handleRevese(sortKey);

    setSort(sortKey);
  }

  const handleRevese = (sortKey) =>{
    if (sortKey === sort) {
      setReverse(!reverse);
    } else {
      setReverse(false);
    }
  }

  const sortFunction = SORTS[sort];
  const sortedList = reverse ? sortFunction(list).reverse() : sortFunction(list);

  var unSortedList = sortedList.map(item => (
    <Item
      key={item.objectID}
      item={item}
      onRemoveItem={onRemoveItem}
    />
  ));

  return (
    <div>
      <div>
        <span onClick={()=> handleSort('TITLE')}>
          <button style={{ color: sort == 'TITLE' ? 'blue' : 'red'}}>Title</button>
        </span>
        <span onClick={()=> handleSort('AUTHOR')}>
          <button style={{ color: sort == 'AUTHOR' ? 'blue' : 'red'}}>Author</button>
        </span>
        <span onClick={()=> handleSort('COMMENT')}>
          <button style={{ color: sort == 'COMMENT' ? 'blue' : 'red'}}>Comment</button>
        </span>
        <span onClick={()=> handleSort('POINT')}>
          <button style={{ color: sort == 'POINT' ? 'blue' : 'red'}}>Point</button>
        </span>
      </div>
      {unSortedList}
    </div>
  );
};

const Item = ({ item, onRemoveItem }) => (
  <div>
    <span>
      <a href={item.url}>{item.title}, </a>
    </span>
    <span>{item.author}, </span>
    <span>{item.num_comments}, </span>
    <span>{item.points}</span>
    <span>
      <button type="button" onClick={() => onRemoveItem(item)}>
        Dismiss
      </button>
    </span>
  </div>
);

export default List;