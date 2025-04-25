import React from 'react'

const Listcomponent = () => {
    const list = []; // Sample list

    return (
        <div className="items-list text-center mt-4">
            {list.length > 0 ? (
                <ul className="list-disc list-inside">

                </ul>
            ) : (
                <p>No items yet 📝</p>
            )}
        </div>
    );
}

export default Listcomponent
