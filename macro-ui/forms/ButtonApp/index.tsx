import {Box, BoxProps, Row} from '@/macro-ui/layout';
import {TextApp} from '@/macro-ui/typography';
import {horizontalScale, verticalScale} from '@/themes/scale';
import React, {useMemo} from 'react';
import {useStyles} from 'react-native-unistyles';
import {ButtonBase} from '../ButtonBase';
import {ESpinnerPlacement, EVariant} from '../forms.enum';
import {stylesheetForms} from '../forms.style';

type ButtonAppProps = {
  isActive?: boolean;
  isDisabled?: boolean;
  isLoading?: boolean;
  leftIcon?: React.ReactElement;
  rightIcon?: React.ReactElement;
  loadingText?: string;
  spinner?: React.ReactElement;
  spinnerPlacement?: ESpinnerPlacement;
  variant?: EVariant;
  scaleTo?: number;
  onPress?: () => void;
  title?: string;
} & BoxProps;

export const ButtonApp: React.FC<ButtonAppProps> = ({
  leftIcon,
  rightIcon,
  title,
  isLoading,
  spinner = <></>,
  spinnerPlacement = ESpinnerPlacement.Start,
  loadingText,
  color,
  variant = EVariant.Solid,
  style,
  isActive = true,
  isDisabled,
  onPress,
  ...props
}) => {
  const {styles, theme} = useStyles(stylesheetForms);
  const LeftIcon = useMemo(() => {
    const Icon = !!leftIcon ? leftIcon : <></>;
    if (!isLoading) {
      return Icon;
    }
    return spinnerPlacement === ESpinnerPlacement.Start ? spinner : Icon;
  }, [isLoading, leftIcon, spinnerPlacement]);

  const RightIcon = useMemo(() => {
    const Icon = !!rightIcon ? rightIcon : <></>;
    if (!isLoading) {
      return Icon;
    }
    return spinnerPlacement === ESpinnerPlacement.End ? spinner : Icon;
  }, [isLoading, rightIcon, spinnerPlacement]);

  const TitleButton = useMemo(() => {
    return !(isLoading && loadingText) ? title : loadingText;
  }, [isLoading, title, loadingText]);

  return (
    <Box height={verticalScale(40)} alignSelf="center">
      <ButtonBase
        isActive={isActive}
        isLoading={isLoading}
        isDisabled={isDisabled}
        onPress={onPress}>
        <Row
          columnGap={12}
          flex={1}
          borderRadius={12}
          ph={horizontalScale(12)}
          justify="center"
          align="center"
          borderWidth={1}
          style={[
            styles.buttonApp(variant, color || theme.colors.tint),
            styles.activeButton(!!isActive),
          ]}
          {...props}>
          <Box>{LeftIcon}</Box>
          <Box>
            <TextApp
              weight={600}
              size={20}
              style={styles.textButtonApp(variant, color || theme.colors.tint)}>
              {TitleButton}
            </TextApp>
          </Box>
          <Box>{RightIcon}</Box>
        </Row>
      </ButtonBase>
    </Box>
  );
};
