import {createStyleSheet} from 'react-native-unistyles';
import {ColorValue} from 'react-native';
import {EVariant} from './forms.enum';
import {getVariantButtonBase} from './forms.func';

export const stylesheetForms = createStyleSheet(theme => ({
  buttonBase: {
    flex: 1,
  },
  buttonApp: (variant: EVariant, color: ColorValue) =>
    getVariantButtonBase(variant, color, theme.colors).button,
  textButtonApp: (variant: EVariant, color: ColorValue) =>
    getVariantButtonBase(variant, color, theme.colors).text,
}));
