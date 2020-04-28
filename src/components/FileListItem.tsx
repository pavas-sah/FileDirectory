import React from 'react';
import FileIcon from './FileIcon';
import FileName from './FileName';
import CommitMessage from './CommitMessage';
import TimeDuration from './TimeDuration';
import styled from 'styled-components';
import { FileState } from './FileList';

export const RowDiv = styled.div`
 display: flex;
 flex-flow: row wrap;
 justify-content: space-around;
 width:100%;
 }`;

const FileListItem = (props: FileState) => {
  return (
    <RowDiv>
      <FileIcon url={props.fileIcon} alt={props.fileIconAlt} />
      <FileName fileName={props.fileName} />
      <CommitMessage message={props.message} />
      <TimeDuration dateInString={props.duration} />
    </RowDiv>
  );
};

export default FileListItem;
