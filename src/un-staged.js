import React, {Fragment} from 'react';
import {Color} from 'ink';
import Spinner from 'ink-spinner';

export default function UnStaged() {
  return (
    <Fragment>
      <Spinner type="dots" />
      <Color green>Confirming that all changes have been staged</Color>
    </Fragment>
  );
}
