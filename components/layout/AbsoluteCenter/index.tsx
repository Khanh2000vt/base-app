import React, { forwardRef } from "react";
import { View } from "react-native";

import { BoxProps, ForwardRefComponent } from "@/types";
import { Box } from "../Box";

export const AbsoluteCenter: ForwardRefComponent<View, BoxProps> = forwardRef(
  ({ children = null, ...props }, ref) => {
    return (
      <Box
        ref={ref}
        position="absolute"
        justify="center"
        align="center"
        {...props}
      >
        {children}
      </Box>
    );
  }
);
