import React from 'react';
import renderer from 'react-test-renderer';
import FileIcon, { FileIconProps } from '../components/FileIcon';

const IconProps: FileIconProps = {
  url: 'some url',
  alt: 'alternate message',
};

describe('File Icon Functional component', () => {
  it('should have props with defined values.', () => {
    const iconComponent = renderer.create(<FileIcon {...IconProps} />);
    expect(iconComponent.toJSON()?.props).toEqual({
      alt: 'alternate message',
      src: 'some url',
    });
  });

  it('matches snapshot', () => {
    const tree = renderer.create(<FileIcon {...IconProps} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
