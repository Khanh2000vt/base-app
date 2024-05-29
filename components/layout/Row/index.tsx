import React, { forwardRef } from "react";
import { View } from "react-native";

import { BoxProps, ForwardRefComponent } from "@/types";
import { Box } from "../Box";

export const Row: ForwardRefComponent<View, BoxProps> = forwardRef(
  ({ children = null, ...props }, ref) => {
    return (
      <Box ref={ref} align="center" flexDirection="row" {...props}>
        {children}
      </Box>
    );
  }
);
