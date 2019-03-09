import React from 'react';
import { Button } from '../atoms';

const CommentActions = ({ actions }) =>
    <div className="actions">
        <Button onClick={actions.onReply}>Reply</Button>
        <Button onClick={actions.onFlag}>Flag</Button>
        <Button onClick={actions.onSave}>Save</Button>
    </div>

export default CommentActions;