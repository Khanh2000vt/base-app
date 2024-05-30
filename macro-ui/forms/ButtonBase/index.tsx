import React, {useRef} from 'react';
import {ColorValue, Pressable} from 'react-native';
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import {useStyles} from 'react-native-unistyles';
import {Box, BoxProps} from '../../layout';

import {ESpinnerPlacement, EVariant} from '../forms.enum';
import {stylesheetForms} from '../forms.style';

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
} & BoxProps;

const BoxAnimated = Animated.createAnimatedComponent(Box);

export const ButtonBase: React.FC<ButtonAppProps> = ({
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
  scaleTo = 0.98,
  onPress,
  title,
  style,
  ...props
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
      disabled={isDisabled}>
      <BoxAnimated style={[styleScale, styles.buttonBase, style]} {...props} />
    </Pressable>
  );
};
