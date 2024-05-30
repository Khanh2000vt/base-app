import {Icons} from '@/assets';
import {Box, BoxAnimated, Row} from '@/macro-ui/layout';
import {TextApp} from '@/macro-ui/typography';
import {verticalScale} from '@/themes/scale';
import React from 'react';
import {ColorValue} from 'react-native';
import {FadeIn, FadeOut} from 'react-native-reanimated';
import {useStyles} from 'react-native-unistyles';
import {ButtonBase} from '../ButtonBase';

type CheckboxProps = {
  isDisabled?: boolean;
  name?: string;
  onChange: (value: any | undefined) => void;
  value: any;
  sizeIcon?: number;
  colorIcon?: ColorValue;
  isChecked?: boolean;
};

export const Checkbox: React.FC<CheckboxProps> = ({
  name,
  sizeIcon = 24,
  colorIcon,
  value,
  onChange,
  isChecked = false,
}) => {
  const {theme} = useStyles();
  const handlePress = () => {
    onChange(isChecked ? undefined : value);
  };
  return (
    <Box height={verticalScale(40)} alignSelf="flex-start">
      <ButtonBase onPress={handlePress}>
        <Row columnGap={12}>
          {isChecked ? (
            <BoxAnimated
              entering={FadeIn}
              exiting={FadeOut}
              width={sizeIcon}
              height={sizeIcon}
              borderWidth={1}
              borderRadius={4}
              justify="center"
              align={'center'}
              borderColor="#fafafa"
              color={colorIcon || theme.colors.white}>
              <Icons.Check />
            </BoxAnimated>
          ) : (
            <BoxAnimated
              entering={FadeIn}
              exiting={FadeOut}
              width={sizeIcon}
              height={sizeIcon}
              borderWidth={1}
              borderRadius={4}
              color={colorIcon || theme.colors.white}
              borderColor="#fafafa"
            />
          )}
          <Box>
            <TextApp size={20}>{name}</TextApp>
          </Box>
        </Row>
      </ButtonBase>
    </Box>
  );
};
