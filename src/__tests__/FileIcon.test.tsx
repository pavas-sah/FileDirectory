import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import FileIcon, {FileIconProps} from '../components/FileIcon';

const IconProps: FileIconProps = {
 url:"some url",
 alt:"alternate message"
}

describe('File Icon Functional component',  () =>{

    it('should have url & alternate message as content.', () =>{
        const { getByTestId,  } = render(<FileIcon {...IconProps} />);
        // expect(getByTestId('fileList')).toHaveTextContent(0);
        expect(getByTestId("icon"))
        // .toContainHTML("<span data-testid='icon'> <img src='some url' alt='alternate message' /></span>")
        .toContainElement(<span data-testid="icon"> <img src="some url" alt="alternate message" /></span>)
    });

    it('matches snapshot', () =>{
        const tree = renderer.create(<FileIcon {...IconProps}/>).toJSON();
        expect(tree).toMatchSnapshot();
    });
});