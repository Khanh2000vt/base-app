import React, { forwardRef } from "react";
import { View } from "react-native";

import { ForwardRefComponent } from "@/types";
import { Box } from "../Box";
import { BoxProps } from "../box.type";

export const Center: ForwardRefComponent<View, BoxProps> = forwardRef(
  ({ children = null, ...props }, ref) => {
    return (
      <Box ref={ref} justify="center" align="center" {...props}>
        {children}
      </Box>
    );
  }
);
