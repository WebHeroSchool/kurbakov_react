import React from 'react';
import Item from '../Item/Item';

const ItemList = ({ todoItems }) => (
  <ol>
    <li><Item todo={todoItems.morning} /></li>
    <li><Item todo={todoItems.day} /></li>
    <li><Item todo={todoItems.evening} /></li>
  </ol>
);

export default ItemList;