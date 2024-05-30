import React, {useRef} from 'react';
import {ColorValue, Pressable} from 'react-native';
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';

import {Box} from '@/components/layout';

import {TIME_ANIMATION} from '../forms.constant';
import {ESpinnerPlacement, EVariant} from '../forms.enum';

type ButtonAppProps = {
  colorScheme?: ColorValue;
  isActive?: boolean;
  isDisabled?: boolean;
  isLoading?: boolean;
  leftIcon?: React.ReactElement;
  rightIcon?: React.ReactElement;
  loadingText?: string;
  spinner?: React.ReactElement;
  spinnerPlacement?: ESpinnerPlacement;
  variant?: EVariant;
  scaleTo?: number;
  onPress?: () => void;
  title?: string;
};

const BoxAnimated = Animated.createAnimatedComponent(Box);

export const ButtonApp: React.FC<ButtonAppProps> = ({
  colorScheme,
  isActive = true,
  isDisabled = false,
  isLoading = false,
  leftIcon,
  rightIcon,
  loadingText,
  spinner,
  spinnerPlacement = ESpinnerPlacement.Start,
  variant = EVariant.Solid,
  scaleTo = 0.9,
  onPress,
  title,
}) => {
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
      disabled={isDisabled}>
      <BoxAnimated style={[styleScale]}></BoxAnimated>
    </Pressable>
  );
};
