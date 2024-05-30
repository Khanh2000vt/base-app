import {createStyleSheet} from 'react-native-unistyles';
import {getStyleLayout} from './layout.func';
import {LayoutStyleType} from './layout.type';

export const stylesheetLayout = createStyleSheet({
  layout: (props: LayoutStyleType) => getStyleLayout(props),
});
