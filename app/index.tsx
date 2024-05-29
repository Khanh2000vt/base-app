import { Box, Center } from "@/components/layout";
import { Text } from "react-native";

export default function Index() {
  return (
    <Box flex={1}>
      <Text>123</Text>
      <Center flex={1} justify="flex-start">
        <Text>456</Text>
      </Center>
    </Box>
  );
}
