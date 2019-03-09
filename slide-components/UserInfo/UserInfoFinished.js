import React from 'react';
import { Avatar } from '../atoms'

const UserInfo = ({ author }) =>
    <div className="UserInfo">
        <Avatar user={author} />
        <div className="UserInfo-name">
            {author.name}
        </div>
    </div>

export default UserInfo;