import {ColorValue, TextStyle, ViewStyle} from 'react-native';
import {EVariant} from './forms.enum';

export const getVariantButtonBase = (
  variant: EVariant,
  color: ColorValue,
  colors: any,
): {button: any; text: any} => {
  switch (variant) {
    case EVariant.Outline:
      return {
        button: {
          backgroundColor: colors.white,
          borderColor: color,
        },
        text: {
          color: color,
        },
      };
    case EVariant.Unstyled:
      return {
        button: {},
        text: {},
      };
    case EVariant.Solid:
    default:
      return {
        button: {
          backgroundColor: color,
          borderColor: color,
        },
        text: {
          color: colors.white,
        },
      };
  }
};
