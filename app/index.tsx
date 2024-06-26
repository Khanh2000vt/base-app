import {Animations, Icons} from '@/assets';
import {
  ButtonApp,
  ButtonBase,
  Checkbox,
  ESpinnerPlacement,
  EVariant,
} from '@/macro-ui/forms';
import {Box} from '@/macro-ui/layout';
import {LottieAutoApp} from '@/macro-ui/media';
import {TextApp} from '@/macro-ui/typography';
import {useState} from 'react';
import {Text} from 'react-native';
import {useStyles} from 'react-native-unistyles';

export default function Index() {
  const {theme} = useStyles();
  const [check, setCheck] = useState<string | undefined>(undefined);

  return (
    <Box flex={1} gap={10}>
      <Box justify="space-between" color={'red'} p={10} gap={10}>
        <Text>123</Text>
        <TextApp size={23} weight={100}>
          Khanh
        </TextApp>
      </Box>
      <ButtonBase />
      <ButtonApp
        leftIcon={<Icons.Heart />}
        title="Continue"
        rightIcon={<Icons.Heart />}
        spinnerPlacement={ESpinnerPlacement.End}
        spinner={
          <LottieAutoApp source={Animations.Spinner} width={24} height={24} />
        }
        loadingText="Loading"

        // color={'red'}
      />
      <ButtonApp
        leftIcon={<Icons.Heart />}
        title="Continue"
        rightIcon={<Icons.Heart />}
        spinnerPlacement={ESpinnerPlacement.End}
        spinner={
          <LottieAutoApp source={Animations.Spinner} width={24} height={24} />
        }
        loadingText="Loading"
        isLoading
        isActive={false}
        variant={EVariant.Outline}
        // color={'red'}
      />

      <Checkbox
        onChange={setCheck}
        isChecked={!!check}
        value={'test'}
        name="Checked"
      />
    </Box>
  );
}
