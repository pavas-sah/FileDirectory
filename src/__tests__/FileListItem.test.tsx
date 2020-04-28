import React from 'react';
import renderer from 'react-test-renderer';
import { FileState } from '../components/FileList';
import FileListItem from '../components/FileListItem';

const mockDuration = '12-5-2010';
const mockIcon = 'iconLocation';
const mockAlt = 'iconAlt';
const mockFileName = 'file';
const mockMessage = 'message';
const mockId = 1;

const fileListItemProps: FileState = {
  duration: mockDuration,
  fileIcon: mockIcon,
  fileIconAlt: mockAlt,
  fileName: mockFileName,
  message: mockMessage,
  id: mockId,
};

describe('Test File List Item', () => {
  it('renders correctly', () => {
    const fileListComponent = renderer.create(
      <FileListItem {...fileListItemProps} />
    );

    expect(fileListComponent.toJSON()?.type).toBe('div');
  });

  it('matches snapshot', () => {
    const tree = renderer
      .create(<FileListItem {...fileListItemProps} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
