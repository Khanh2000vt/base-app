import {Animations} from '@/assets';
import {Center} from '@/components/layout';
import {LottieAutoApp} from '@/components/media';

export default function Index() {
  return (
    <Center flex={1}>
      <LottieAutoApp
        source={Animations.Spinner}
        width={100}
        height={100}
        color="red"
      />
    </Center>
  );
}
