import React from 'react';

const ClearAll = ({ handleClear }) => {
    return (
        <div className='text-right px-4 mr-2 w-full'>
            <button onClick={handleClear} className='text-red-500 text-xl'>
                Clear All
            </button>
        </div>
    );
};

export default ClearAll;
