import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import FileName, { FileNameProps } from '../components/FileName';

const NameProps:FileNameProps = {
    fileName: "someFile"
}

describe('File Name Functional component',  () =>{

    it('should have some message as content.', () =>{
        const { getByTestId,  } = render(<FileName {...NameProps} />);
        // expect(getByTestId('fileList')).toHaveTextContent(0);
        expect(getByTestId("name")).toHaveTextContent("someFile")
    });

    it('matches snapshot', () =>{
        const tree = renderer.create(<FileName {...NameProps}/>).toJSON();
        expect(tree).toMatchSnapshot();
    });
})