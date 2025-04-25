import React from 'react'
import { useState } from 'react'

const InputWithButton = () => {
    const [inputValue, setInputValue] = useState('')
    const handleInputChange = (e) => {
        setInputValue(e.target.value)
    }

    return (
        <div className="flex items-center justify-center mb-4">
            <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                placeholder="Add items..."
                className="border border-gray-300 rounded px-4 py-2 focus:outline-none"
            />
            <button className="bg-green-500 text-2xl text-white px-4 py-2  overflow-hidden rounded focus:outline-none">
                +
            </button>
        </div>
    )
}

export default InputWithButton
