import React, { useContext } from 'react';
import { UserContext } from './UserContext';

const UserProfile = () => {
    const user = useContext(UserContext); // Get user data from context

    return (
        <div className="user-profile" style={{ border: '1px solid gray', padding: '10px', margin: '10px' }}> 
            <h2 style={{ color: 'blue' }}>Name: {user.name}</h2>
            <p>Age: <span style={{ fontWeight: 'bold' }}>{user.age || 'N/A'}</span></p>
            <p>Bio: {user.bio || 'No bio available'}</p>
        </div>
    );
};

export default UserProfile;
