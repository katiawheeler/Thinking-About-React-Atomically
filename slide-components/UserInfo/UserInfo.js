import React from 'react';

const UserInfo = ({ user }) =>
    <div className="UserInfo">
        <img className="Avatar"
            src={user.avatarUrl}
            alt={user.name}
        />
        <div className="UserInfo-name">
            {user.name}
        </div>
    </div>

export default UserInfo;