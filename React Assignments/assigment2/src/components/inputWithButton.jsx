import React from 'react';
import { BiPlus } from 'react-icons/bi';

const InputWithButton = ({ inputValue, setInputValue, handleAddItem }) => {
    return (
        <div className="input-wrapper border border-gray-500 rounded-xl flex overflow-hidden">
            <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Add items..."
                className="flex-1 p-2"
            />
            <button
                onClick={handleAddItem}
                className="p-2 bg-green-500 cursor-pointer aspect-square w-8 flex-[0_0_48px] grid place-content-center "
            >
                <BiPlus className="text-white aspect-square text-2xl" />
            </button>
        </div>
    );
};

export default InputWithButton;

