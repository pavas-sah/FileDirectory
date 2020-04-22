import React from 'react';
import FileList, { FileState } from '../components/FileList';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';

const mockDuration = "12-5-2010";
const mockIcon = "iconLocation";
const mockAlt = "iconAlt";
const mockFileName = "file";
const mockMessage = "message";
const mockId = 1;

const fileProps: FileState = {
    duration: mockDuration,
    fileIcon: mockIcon,
    fileIconAlt: mockAlt,
    fileName: mockFileName,
    message: mockMessage,
    id: mockId
  };

describe('File List Page', ()=>{

   it('renders correctly', ()=>{
        const { queryByTestId } = render(<FileList {...fileProps} />);
        expect(queryByTestId("fileList")).toHaveClass("row");
    });

    it('matches snapshot', () =>{
        const tree = renderer.create(<FileList {...fileProps}/>).toJSON();
        expect(tree).toMatchSnapshot();
    });

});