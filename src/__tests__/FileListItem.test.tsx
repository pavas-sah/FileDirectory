import React from 'react';
import renderer from 'react-test-renderer';
import { FileState } from '../components/FileList';
import { render } from '@testing-library/react';
import FileListItem from '../components/FileListItem';



const mockDuration = "12-5-2010";
const mockIcon = "iconLocation";
const mockAlt = "iconAlt";
const mockFileName = "file";
const mockMessage = "message";
const mockId = 1;

const fileListItemProps: FileState = {
    duration: mockDuration,
    fileIcon: mockIcon,
    fileIconAlt: mockAlt,
    fileName: mockFileName,
    message: mockMessage,
    id: mockId

  };

describe('', ()=>{

    it('', ()=>{

        
    })

    it('renders correctly', ()=>{

        // console.log(render(<FileListItem {...fileListItemProps} />))

        const { getByTestId } = render(<FileListItem {...fileListItemProps} />);
        expect(getByTestId('FileListItem')).toBeTruthy();
    })

    it('matches snapshot', () =>{
        const tree = renderer.create(<FileListItem {...fileListItemProps}/>).toJSON();
        expect(tree).toMatchSnapshot();
    })

})