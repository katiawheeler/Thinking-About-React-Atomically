import React from 'react';

const Avatar = ({ user }) =>
    <img className="Avatar"
        src={user.avatarUrl}
        alt={user.name}
    />

export default Avatar;