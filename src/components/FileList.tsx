import React, { Component } from 'react';
import data from '../data/data.json';
import FileListItem from './FileListItem';
// import "./FileList.css"
// import androidImg from "../icons/android.png"
// import announcementImg from "../icons/announcement.png"
// import doneImg from "../icons/done.png"
// import cameraImg from "../icons/camera.png"
// import donutImg from "../icons/donut.png"

export interface FileState {
    id?: number,
    fileIcon: string,
    fileIconAlt: string,
    fileName: string,
    message: string,
    duration: string
}

// interface ImageObj{
//     android: string,
//     announcement: string,
//     done: string,
//     camera: string,
//     donut: string
//   }

  

export class FileList extends Component {

    // iconObj:ImageObj = {
    //     android : androidImg,
    //     announcement : announcementImg,
    //     done : doneImg,
    //     camera : cameraImg,
    //     donut : donutImg
    //   }

    fileList = data.map(
        (item: FileState) => {
            return (
                <span className="collection-item" key={item.id}>
                    <FileListItem fileIcon={ require(`../icons/${item.fileIcon}.png`) } fileIconAlt={item.fileIconAlt} fileName={item.fileName} message={item.message} duration={item.duration} />
                    {/* <FileListItem fileIcon={ item.fileIcon } fileIconAlt={item.fileIconAlt} fileName={item.fileName} message={item.message} duration={item.duration} /> */}
                    {/* <FileListItem fileIcon={ androidImg } fileIconAlt={item.fileIconAlt} fileName={item.fileName} message={item.message} duration={item.duration} /> */}
                </span>
                );
        }
    )

    render() {
        return (
        <div className="row" data-testid="fileList">
            {this.fileList}
        </div>
        );
    }

}

export default FileList;