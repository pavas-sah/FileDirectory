import React from 'react';

export interface FileIconProps {
  url: string;
  alt?: string;
}

export const FileIcon: React.SFC<FileIconProps> = (props) => {
  return <img src={props.url} alt={props.alt} />;
};
export default FileIcon;
