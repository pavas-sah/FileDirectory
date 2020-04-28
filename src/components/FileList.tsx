import React, { Component } from 'react';
import data from '../data/data.json';
import FileListItem from './FileListItem';
import './FileList.css';

export interface FileState {
  id?: number;
  fileIcon: string;
  fileIconAlt: string;
  fileName: string;
  message: string;
  duration: string;
}

export class FileList extends Component {
  fileList = data.map((item: FileState) => {
    return (
      <span className='collection-item' key={item.id}>
        <FileListItem
          fileIcon={require(`../icons/${item.fileIcon}.png`)}
          fileIconAlt={item.fileIconAlt}
          fileName={item.fileName}
          message={item.message}
          duration={item.duration}
        />
      </span>
    );
  });

  render() {
    return <>{this.fileList}</>;
  }
}

export default FileList;
