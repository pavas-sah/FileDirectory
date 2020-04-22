import React from 'react';
import TimeDuration, {TimeDurationProps} from '../components/TimeDuration';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';

const DurationProps: TimeDurationProps = {
    dateInString: "10-3-2013"
    
}

describe('Time Duration Functional component',  () =>{

    it('should have some time as content.', () =>{
        const { getByTestId,  } = render(<TimeDuration {...DurationProps} />);
        // expect(getByTestId('fileList')).toHaveTextContent(0);
        expect(getByTestId("time")).toHaveTextContent(" ago");
    });

    it('matches snapshot', () =>{
        const tree = renderer.create(<TimeDuration {...DurationProps}/>).toJSON();
        expect(tree).toMatchSnapshot();
    });
});