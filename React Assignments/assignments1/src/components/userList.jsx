import React from 'react';
import { USERS } from '../data/data';

const UserList = () => {
    return (
        <div style={{ backgroundColor: '#f0f0f0', padding: '20px', fontFamily: 'Arial' }}>
            <h1 style={{ textAlign: 'center' }}>User List</h1>
            <ul style={{ listStyleType: 'none', paddingLeft: '0' }}>
                {USERS.users.map((user) => (
                    <li
                        key={user.id}
                        style={{
                            fontSize: '18px',
                            // Adjusted to add margin
                            padding: '5px',  // Adjusted to add padding
                            color: '#333',
                            textAlign: 'center'
                        }}
                    >
                        {user.name}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UserList;

