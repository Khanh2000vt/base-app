import { Stack } from "expo-router";
import "@/themes/unistyles";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" />
    </Stack>
  );
}
