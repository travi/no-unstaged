import React from 'react';
import {Color, Text} from 'ink';
import Spinner from 'ink-spinner';

export default function UnStaged() {
  return (
    <Color cyan>
      <Spinner type="dots" />
      <Text> Confirming that all changes have been staged</Text>
    </Color>
  );
}
