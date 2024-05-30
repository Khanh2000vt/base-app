import {ButtonApp} from '@/modules/macro-ui/src/forms';
import {Text} from 'react-native';
import {useStyles} from 'react-native-unistyles';

export default function Index() {
  const {theme} = useStyles();

  return (
    <Box flex={1}>
      <Box justify="space-between" color={'red'} p={10}>
        <Text>123</Text>
        <Text>456</Text>
      </Box>
      <ButtonApp />
    </Box>
  );
}
