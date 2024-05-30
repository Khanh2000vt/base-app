import React, {forwardRef} from 'react';
import {View} from 'react-native';
import {useStyles} from 'react-native-unistyles';
import Animated from 'react-native-reanimated';

import {BoxProps, ForwardRefComponent} from '../layout.type';
import {stylesheetLayout} from '../layout.style';

export const Box: ForwardRefComponent<View, BoxProps> = forwardRef(
  ({children = null, style, onLayout, ...props}, ref) => {
    const {styles} = useStyles(stylesheetLayout);
    return (
      <View
        style={[styles.layout(props), style]}
        onLayout={onLayout}
        ref={ref}
        children={children}
      />
    );
  },
);

export const BoxAnimated = Animated.createAnimatedComponent(Box);
