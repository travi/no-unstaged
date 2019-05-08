import React from 'react';
import {render} from 'ink-testing-library';
import {assert} from 'chai';
import UnStaged from '../../src/un-staged';

suite('hello-world component', () => {
  test('that hello-world is displayed', () => {
    const {lastFrame, unmount} = render(<UnStaged />);

    assert.include(lastFrame(), 'Confirming that all changes have been staged');

    unmount();
  });
});
