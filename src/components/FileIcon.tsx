import React from 'react';

export interface FileIconProps{
    url: string,
    alt?:string
}


export const FileIcon :React.SFC<FileIconProps> = (props) => {

return (
    <span data-testid="icon"> <img src={props.url} alt={props.alt} /></span>
    );

}
export default FileIcon;