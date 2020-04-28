import React from 'react';
import renderer from 'react-test-renderer';
import FileName, { FileNameProps } from '../components/FileName';

const NameProps: FileNameProps = {
  fileName: 'someFile',
};

describe('File Name Functional component', () => {
  it('should have some message as content.', () => {
    const fileNameComponent = renderer.create(<FileName {...NameProps} />);
    expect(fileNameComponent.root.children.toString()).toBe('someFile');
  });

  it('matches snapshot', () => {
    const tree = renderer.create(<FileName {...NameProps} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
