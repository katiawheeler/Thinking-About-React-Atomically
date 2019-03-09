import React from 'react';
import UserInfo from './UserInfo';
import { Button } from '../atoms';
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
        <div className="actions">
            <Button onClick={props.actions.onReply}>Reply</Button>
            <Button onClick={props.actions.onFlag}>Flag</Button>
            <Button onClick={props.actions.onSave}>Save</Button>
        </div>
    </div>

export default Comment;