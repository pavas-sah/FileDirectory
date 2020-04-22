import React from 'react';

export interface CommitMessageProps{
    message: string
}

export const CommitMessage: React.SFC<CommitMessageProps> = (props) => {

return (
    <span data-testid="msg">{props.message}</span>
    );

}
export default CommitMessage;