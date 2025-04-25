
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
