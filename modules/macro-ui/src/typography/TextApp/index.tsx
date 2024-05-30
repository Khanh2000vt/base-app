import React from 'react';
import {Text} from 'react-native';
import {TextAppProps} from '../typography.type';

export const TextApp: React.FC<TextAppProps> = ({
  allowFontScaling,
  children,
  ellipsizeMode,
  lineBreakMode,
  numberOfLines,
  onLayout,
  onTextLayout,
  onPress,
  onPressIn,
  onPressOut,
  onLongPress,
  style,
  maxFontSizeMultiplier,
  minimumFontScale,
}) => {
  return (
    <Text
      allowFontScaling={allowFontScaling}
      children={children}
      ellipsizeMode={ellipsizeMode}
      lineBreakMode={lineBreakMode}
      numberOfLines={numberOfLines}
      onLayout={onLayout}
      onTextLayout={onTextLayout}
      onPress={onPress}
      onPressIn={onPressIn}
      onPressOut={onPressOut}
      onLongPress={onLongPress}
      maxFontSizeMultiplier={maxFontSizeMultiplier}
      minimumFontScale={minimumFontScale}
      style={[style]}
    />
  );
};
