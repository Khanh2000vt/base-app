import React, { forwardRef } from "react";
import { View } from "react-native";

import { BoxProps, ForwardRefComponent } from "@/types";
import { Box } from "../Box";

export const Center: ForwardRefComponent<View, BoxProps> = forwardRef(
  ({ children = null, ...props }, ref) => {
    return (
      <Box ref={ref} justify="center" align="center" {...props}>
        {children}
      </Box>
    );
  }
);
