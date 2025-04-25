/*import { useState } from 'react';
import './App.css';

function App() {
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleAddItem = () => {
    if (inputValue.trim() === '') return;
    setItems([...items, inputValue]);
    setInputValue('');
  };

  const handleClear = () => {
    setItems([]);
  };

  const handleDeleteItem = (indexToDelete) => {
    const updatedItems = items.filter((_, index) => index !== indexToDelete);
    setItems(updatedItems);
  };

  return (
    <div className="app-container">
      <div className="header">
        <h1>🛒 Apni Grocery</h1>

        <div className="input-group">
          <input
            type="text"
            placeholder="Add items..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleAddItem()}
          />
          <button className="add-btn" onClick={handleAddItem}>+</button>
        </div>

        <button className="clear-btn" onClick={handleClear}>Clear All</button>

        <div className="items-list">
          {items.length === 0 ? (
            <p>No items yet 📝</p>
          ) : (
            <ul>
              {items.map((item, index) => (
                <li key={index} className="item">
                  <span>{item}</span>
                  <button className="delete-btn" onClick={() => handleDeleteItem(index)}>🗑️</button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

export default App; */
import React, { useState } from 'react';
import Title from './components/Title';
import InputWithButton from './components/InputWithButton';
import ClearAll from './components/clearAll';
import Listcomponent from './components/Listcomponent';

const App = () => {
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleAddItem = () => {
    if (inputValue.trim() === '') return;
    setItems([...items, inputValue]);
    setInputValue('');
  };

  const handleClear = () => {
    setItems([]);
  };
  const handleDelete = (indexToDelete) => {
    setItems(items.filter((_, index) => index !== indexToDelete));
  };


  return (
    <div className="h-screen bg-gray-100 flex flex-col justify-center items-center">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md h-full flex flex-col justify-between">
        <div className="mb-4">
          <Title title="Apni" title2="Grocery" />
        </div>

        <div className="mb-4 flex flex-col gap-4">
          <InputWithButton
            inputValue={inputValue}
            setInputValue={setInputValue}
            handleAddItem={handleAddItem}
          />
        </div>

        <div className="mb-4 flex flex-col gap-4">
          <ClearAll handleClear={handleClear} />
        </div>

        <div className="flex-grow mb-4 overflow-y-auto">
          <Listcomponent list={items} onDelete={handleDelete} />

        </div>
      </div>
    </div>
  );
};

export default App;
