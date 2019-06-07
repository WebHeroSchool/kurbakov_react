import React from 'react';
import InputItem from '../InputItem/InputItem';
import ItemList from '../ItemList/ItemList';
import Footer from '../Footer/Footer';

const todoItems = {
  morning: 'Сделать зарядку',
  day: 'Сходить за продуктами',
  evening: 'Потренироваться в спорт-зале'
};

const App = () => (
  <div>
    <h1>Todos</h1>
    <InputItem />
    <ItemList todoItems={todoItems} />
    <Footer count={Object.keys(todoItems).length} />
  </div>
);

export default App;