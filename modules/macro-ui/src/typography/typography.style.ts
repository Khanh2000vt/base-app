import {createStyleSheet} from 'react-native-unistyles';
import {getStyleTypography} from './typography.func';
import {TypographyStyleType} from './typography.type';

export const stylesheetTypography = createStyleSheet(theme => ({
  typography: (props: TypographyStyleType) =>
    getStyleTypography(props, theme.colors.text),
}));
