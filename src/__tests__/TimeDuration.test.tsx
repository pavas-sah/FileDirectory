import React from 'react';
import TimeDuration, { TimeDurationProps } from '../components/TimeDuration';
import renderer from 'react-test-renderer';

const DurationProps: TimeDurationProps = {
  dateInString: '10-3-2013',
};

describe('Time Duration Functional component', () => {
  it('should have some time as content.', () => {
    const timeComponent = renderer.create(<TimeDuration {...DurationProps} />);
    expect(timeComponent.root.children.toString()).toBe('7 years ago');
  });

  it('matches snapshot', () => {
    const tree = renderer.create(<TimeDuration {...DurationProps} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
