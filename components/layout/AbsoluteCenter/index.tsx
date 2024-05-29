import React, { forwardRef } from "react";
import { View } from "react-native";

import { ForwardRefComponent } from "@/types";
import { Box } from "../Box";
import { BoxProps } from "../box.type";

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
  }
);
