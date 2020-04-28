import React from 'react';

export interface CommitMessageProps {
  message: string;
}

export const CommitMessage: React.SFC<CommitMessageProps> = (props) => {
  return <>{props.message}</>;
};
export default CommitMessage;
