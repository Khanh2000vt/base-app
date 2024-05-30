import {ButtonApp} from '@/components/forms';
import {Center, Row} from '@/components/layout';
import {Text} from 'react-native';
import {useStyles} from 'react-native-unistyles';

export default function Index() {
  const {theme} = useStyles();

  return (
    <Center flex={1}>
      <Row justify="space-between" color={'red'} p={10}>
        <Text>123</Text>
        <Text>456</Text>
      </Row>
      <ButtonApp />
    </Center>
  );
}
