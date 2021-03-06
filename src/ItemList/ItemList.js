import React from 'react';
import Item from '../Item/Item';

const ItemList = ({ todoItems }) => (
  <ol>
    {todoItems.map(item => 
      <li key={item.id}>
        <Item value={item.value} isDone={item.isDone} />
      </li>)}
  </ol>
);

export default ItemList;