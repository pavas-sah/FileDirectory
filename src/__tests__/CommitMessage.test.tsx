import React from 'react';
import CommitMessage from '../components/CommitMessage';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';

const MessageProps = {
    message: "some message"
}

// export const CommitMessage: React.SFC<CommitMessageProps> = (props) => {

// return (
//     <span>{props.message}</span>
//     );

// }
// export default CommitMessage;

describe('Commit Message Functional component',  () =>{

    it('should have some message as content.', () =>{
        const { getByTestId,  } = render(<CommitMessage {...MessageProps} />);
        // expect(getByTestId('fileList')).toHaveTextContent(0);
        expect(getByTestId("msg")).toHaveTextContent("some message");
    });

    it('matches snapshot', () =>{
        const tree = renderer.create(<CommitMessage {...MessageProps}/>).toJSON();
        expect(tree).toMatchSnapshot();
    });
});