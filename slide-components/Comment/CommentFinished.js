import React from 'react';
import UserInfo from './UserInfo';
import CommentActions from './CommentActions';
import { formatDate } from '../utils';

const Comment = props =>
    <div className="Comment">
        <UserInfo author={props.author} />
        <div className="Comment-text">
            {props.text}
        </div>
        <div className="Comment-date">
            {formatDate(props.date)}
        </div>
        <CommentActions actions={props.actions} />
    </div>

export default Comment;