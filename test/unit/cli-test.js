import React from 'react';
import sinon from 'sinon';
import {assert} from 'chai';
import any from '@travi/any';
import * as ink from '../../thirdparty-wrappers/ink';
import HelloWorld from '../../src/hello-world';
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
    React.createElement.withArgs(HelloWorld).returns(renderedComponent);

    cli();

    assert.calledWith(ink.render, renderedComponent);
  });
});
