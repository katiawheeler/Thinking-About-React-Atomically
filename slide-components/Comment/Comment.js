import React from 'react';
import { Button } from '../atoms';
import { formatDate } from '../utils';

const Comment = props =>
    <div className="Comment">
        <div className="UserInfo">
            <img className="Avatar"
                src={props.author.avatarUrl}
                alt={props.author.name}
            />
            <div className="UserInfo-name">
                {props.author.name}
            </div>
        </div>
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