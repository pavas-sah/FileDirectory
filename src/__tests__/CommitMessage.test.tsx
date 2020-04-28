import React from 'react';
import CommitMessage from '../components/CommitMessage';
import renderer from 'react-test-renderer';

const MessageProps = {
  message: 'some message',
};

describe('Commit Message Functional component', () => {
  it('should have some message as content.', () => {
    const messageComponent = renderer.create(
      <CommitMessage {...MessageProps} />
    );
    expect(messageComponent.root.children.toString()).toBe('some message');
  });

  it('matches snapshot', () => {
    const tree = renderer.create(<CommitMessage {...MessageProps} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
