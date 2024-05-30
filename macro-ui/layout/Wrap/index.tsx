import React, {forwardRef} from 'react';
import {View} from 'react-native';

import {ForwardRefComponent} from '@/types';
import {Box} from '../Box';
import {BoxProps} from '../layout.type';

export const Wrap: ForwardRefComponent<View, BoxProps> = forwardRef(
  (props, ref) => {
    return <Box ref={ref} flexWrap="wrap" {...props} />;
  },
);