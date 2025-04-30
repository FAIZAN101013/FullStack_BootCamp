// src/components/ListComponent.jsx
import React from "react";
import List from "./list"; // Changed import name to List for clarity

const ListComponent = ({ list, onDelete }) => {
    return (
        <div className="items-list text-center mt-4  p-4 rounded">
            {list.length > 0 ? (
                <ul className="text-blue-500 font-semibold">
                    {list.map((item, index) => (
                        <List
                            ad key={index}
                            id={index}
                            name={item}
                            onDelete={onDelete}
                        />
                    ))}
                </ul>
            ) : (
                <p>No items yet 📝</p>
            )}
        </div>
    );
};

export default ListComponent;
