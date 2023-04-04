import React from 'react';
import Friend from '../Friend';
import { useLoaderData } from 'react-router-dom';
const Friends = () => {
    const friends = useLoaderData()
    return (
        <div>
            <h1>hello my world</h1>
            {
                friends.map(friends => <Friend
                key={friends.id}
                friends={friends}
                
                ></Friend>)
            }
        </div>

    );
};

export default Friends;