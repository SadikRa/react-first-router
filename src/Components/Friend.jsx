import React from 'react';
import './friend.css'
const Friend = ({friends}) => {
    const {name, email, phone, id} = friends;
    return (
        <div className='friends'>
            <h1>{name}</h1>
            <p>{email}</p>
            <p>{phone}</p>
        </div>
    );
};

export default Friend;