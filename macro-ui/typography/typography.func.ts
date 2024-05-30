import {FontSize} from '@/themes';
import {ColorValue} from 'react-native/types';
import {FontWeightType, TypographyStyleType} from './typography.type';

export const getStyleTypography = (
  props: TypographyStyleType,
  colorDefault: ColorValue,
) => {
  const {
    m,
    mt,
    mr,
    mb,
    ml,
    mh,
    mv,
    p,
    pt,
    pr,
    pb,
    pl,
    ph,
    pv,
    me,
    ms,
    pe,
    ps,
    maxH,
    maxW,
    minH,
    minW,
    align,
    justify,
    color = colorDefault,
    size = FontSize.Font18,
    weight,
    ...propsStyle
  } = props;
  const margin = {
    marginLeft: ml || mh || m,
    marginTop: mt || mv || m,
    marginRight: mr || mh || m,
    marginBottom: mb || mv || m,
    marginStart: ms,
    marginEnd: me,
  };

  const padding = {
    paddingLeft: pl || ph || p,
    paddingTop: pt || pv || p,
    paddingRight: pr || ph || p,
    paddingBottom: pb || pv || p,
    paddingStart: ps,
    paddingEnd: pe,
  };

  return {
    ...propsStyle,
    ...margin,
    ...padding,
    ...getFontWeight(weight),
    maxHeight: maxH,
    maxWidth: maxW,
    minHeight: minH,
    minWidth: minW,
    alignItems: align,
    justifyContent: justify,
    color: color,
    fontSize: size,
  };
};

//Bổ xung fontFamily vào các case
const getFontWeight = (weight: FontWeightType) => {
  switch (weight) {
    case 100:
    case 200:
    case 300:
    case 400:
    case 500:
    case 600:
    case 700:
    case 800:
    case 900:
    default:
      return {
        fontFamily: 'SpaceMono',
        fontWeight: weight,
      };
  }
};
