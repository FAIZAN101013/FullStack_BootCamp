import React from 'react';

const InputWithButton = ({ inputValue, setInputValue, handleAddItem }) => {
    return (
        <div className="flex items-center justify-center mb-4">
            <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Add items..."
                className="border border-gray-300 rounded px-4 py-2 focus:outline-none"
            />
            <button
                onClick={handleAddItem}
                className="bg-green-500 text-2xl text-white px-4 py-2 ml-2 rounded focus:outline-none"
            >
                +
            </button>
        </div>
    );
};

export default InputWithButton;

