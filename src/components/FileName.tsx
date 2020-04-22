import React from 'react';

export interface FileNameProps{
    fileName: string
}

export const FileName = (props: FileNameProps) => {

return (
    <span data-testid="name" className="column">{props.fileName}</span>
    );

}
export default FileName;