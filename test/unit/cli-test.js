import React from 'react';
import sinon from 'sinon';
import {assert} from 'chai';
import any from '@travi/any';
import * as ink from '../../thirdparty-wrappers/ink';
import UnStaged from '../../src/un-staged';
import cli from '../../src/cli';

suite('cli', () => {
  let sandbox;

  setup(() => {
    sandbox = sinon.createSandbox();

    sandbox.stub(ink, 'render');
    sandbox.stub(React, 'createElement');
  });

  teardown(() => sandbox.restore());

  test('that the ink component gets rendered', () => {
    const renderedComponent = any.simpleObject();
    React.createElement.withArgs(UnStaged).returns(renderedComponent);

    cli();

    assert.calledWith(ink.render, renderedComponent);
  });
});
