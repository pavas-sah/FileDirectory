import React from 'react';

export interface FileNameProps {
  fileName: string;
}

export const FileName = (props: FileNameProps) => {
  return <>{props.fileName}</>;
};
export default FileName;
