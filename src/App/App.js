import React from 'react';
import InputItem from '../InputItem/InputItem';
import ItemList from '../ItemList/ItemList';
import Footer from '../Footer/Footer';
import './App.css';

const App = () => {
  const todoItems = [
    { id: 0, value: 'Сделать зарядку' },
    { id: 1, value: 'Сходить за продуктами' },
    { id: 2, value: 'Потренироваться в спорт-зале' }
  ];

  return (
    <div className="wrapper">
      <h1>Todos</h1>
      <InputItem />
      <ItemList todoItems={todoItems} />
      <Footer count={todoItems.length} />
    </div>
  );
};

export default App;