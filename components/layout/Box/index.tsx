import React, { forwardRef } from "react";
import { View } from "react-native";
import { useStyles } from "react-native-unistyles";

import { stylesheetBox } from "@/themes";
import { BoxProps, ForwardRefComponent } from "@/types";

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
