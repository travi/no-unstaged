import React from 'react';
import {render} from 'ink-testing-library';
import {assert} from 'chai';
import HelloWorld from '../../src/hello-world';

suite('hello-world component', () => {
  test('that hello-world is displayed', () => {
    const {lastFrame} = render(<HelloWorld />);

    assert.include(lastFrame(), 'Hello World');
  });
});
