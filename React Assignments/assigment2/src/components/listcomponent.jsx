const Listcomponent = ({ list, onDelete }) => {
    return (
        <div className="items-list text-center mt-4">
            {list.length > 0 ? (
                <ul className="list-disc list-inside text-blue-500 font-semibold">
                    {list.map((item, index) => (
                        <li key={index} className="mb-1 flex justify-between items-center">
                            <span>{item}</span>
                            <button
                                onClick={() => onDelete(index)}
                                className="ml-4 bg-red-500 text-white px-2 py-1 text-sm rounded"
                            >
                                Delete
                            </button>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No items yet 📝</p>
            )}
        </div>
    );
};

export default Listcomponent;
