import LottieView, { LottieViewProps } from "lottie-react-native";
import React, { forwardRef } from "react";

import { stylesheetBox, ViewStyleType } from "@/components/layout";
import { ForwardRefComponent } from "@/types";
import { useStyles } from "react-native-unistyles";

type LottieViewAutoAppProps = ViewStyleType &
  Pick<
    LottieViewProps,
    | "source"
    | "progress"
    | "speed"
    | "duration"
    | "resizeMode"
    | "renderMode"
    | "onAnimationFinish"
    | "onAnimationLoaded"
    | "onAnimationFailure"
    | "colorFilters"
  >;

export const LottieAutoApp: ForwardRefComponent<
  LottieView,
  LottieViewAutoAppProps
> = forwardRef(
  (
    {
      source,
      progress,
      speed,
      duration,
      resizeMode,
      renderMode,
      onAnimationFinish,
      onAnimationLoaded,
      onAnimationFailure,
      colorFilters,
      ...props
    },
    ref
  ) => {
    const { styles } = useStyles(stylesheetBox);
    return (
      <LottieView
        source={source}
        progress={progress}
        speed={speed}
        duration={duration}
        resizeMode={resizeMode}
        renderMode={renderMode}
        onAnimationFinish={onAnimationFinish}
        onAnimationLoaded={onAnimationLoaded}
        onAnimationFailure={onAnimationFailure}
        colorFilters={colorFilters}
        autoPlay
        loop
        ref={ref}
        style={styles.box(props)}
      />
    );
  }
);
