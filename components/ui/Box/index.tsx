import React, { forwardRef } from "react";
import { StyleProp, View, ViewStyle } from "react-native";
import { useStyles } from "react-native-unistyles";

import { stylesheetBox } from "@/themes";
import { BoxStyleType, ForwardRefComponent } from "@/types";

type BoxProps = {
  children?: React.ReactNode;
  style?: StyleProp<ViewStyle>;
} & BoxStyleType;

export const Box: ForwardRefComponent<View, BoxProps> = forwardRef(
  ({ children = null, style, ...props }, ref) => {
    const { styles } = useStyles(stylesheetBox);
    return (
      <View style={[styles.box(props), style]} ref={ref}>
        {children}
      </View>
    );
  }
);
