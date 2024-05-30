import {BoxAnimated} from '@/macro-ui/layout';
import React, {useRef} from 'react';
import {Pressable} from 'react-native';
import {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import {useStyles} from 'react-native-unistyles';

import {stylesheetForms} from '../forms.style';

type ButtonAppProps = {
  isActive?: boolean;
  isDisabled?: boolean;
  isLoading?: boolean;
  scaleTo?: number;
  onPress?: () => void;
  children?: React.ReactNode;
};

export const ButtonBase: React.FC<ButtonAppProps> = ({
  isActive = true,
  isDisabled = false,
  isLoading = false,
  scaleTo = 0.98,
  onPress,
  children,
}) => {
  const {styles} = useStyles(stylesheetForms);
  const pressed = useSharedValue(0);

  const throttleRef = useRef<boolean>(true);

  const onPressIn = () => {
    'worklet';
    pressed.value = withSpring(1);
  };

  const onPressOut = () => {
    'worklet';
    pressed.value = withSpring(0);
  };

  const styleScale = useAnimatedStyle(() => {
    'worklet';
    const scale = interpolate(pressed.value, [0, 1], [1, scaleTo]);
    return {
      transform: [{scale}],
    };
  });

  const handelPress = () => {
    if (!isActive || !throttleRef.current || !onPress) {
      return;
    }
    throttleRef.current = false;
    timeoutThrottle(300);
    onPress();
  };

  const timeoutThrottle = (time = 0) => {
    setTimeout(() => {
      throttleRef.current = true;
    }, time);
  };

  return (
    <Pressable
      onPressIn={onPressIn}
      onPressOut={onPressOut}
      onPress={handelPress}
      disabled={isDisabled || isLoading || !isActive}>
      <BoxAnimated
        style={[styleScale, styles.buttonBase]}
        children={children}
      />
    </Pressable>
  );
};
