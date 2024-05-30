import {Animations, Icons} from '@/assets';
import {
  ButtonApp,
  ButtonBase,
  ESpinnerPlacement,
  EVariant,
} from '@/macro-ui/forms';
import {Box} from '@/macro-ui/layout';
import {LottieAutoApp} from '@/macro-ui/media';
import {TextApp} from '@/macro-ui/typography';
import {Text} from 'react-native';
import {useStyles} from 'react-native-unistyles';

export default function Index() {
  const {theme} = useStyles();

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
        isLoading
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
        variant={EVariant.Outline}
        // color={'red'}
      />
    </Box>
  );
}
