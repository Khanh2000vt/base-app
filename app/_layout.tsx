import '@/themes/unistyles/unistyles';
import {useFonts} from 'expo-font';
import {SplashScreen, Stack} from 'expo-router';
import {useEffect} from 'react';
import {UnistylesRuntime} from 'react-native-unistyles';

export default function RootLayout() {
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      UnistylesRuntime.setTheme(
        UnistylesRuntime.colorScheme === 'unspecified'
          ? 'light'
          : UnistylesRuntime.colorScheme,
      );
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }
  return (
    <Stack>
      <Stack.Screen name="index" />
    </Stack>
  );
}
