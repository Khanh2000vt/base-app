import React, {forwardRef} from 'react';
import {View} from 'react-native';

import {Box} from '../Box';
import {BoxProps, ForwardRefComponent} from '../layout.type';

export const AbsoluteCenter: ForwardRefComponent<View, BoxProps> = forwardRef(
  (props, ref) => {
    return (
      <Box
        ref={ref}
        position="absolute"
        justify="center"
        align="center"
        {...props}
      />
    );
  },
);
