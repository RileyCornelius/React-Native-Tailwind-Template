import { Platform } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import { Box } from '@/components/ui/box';
import { Text } from '@/components/ui/text';

export default function ModalScreen() {
  return (
    <Box className=" flex flex-1 items-center justify-center">
      <Text className="text-xl font-bold">Modal</Text>
      <Box className="my-[30px] h-1 w-4/5" />

      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </Box>
  );
}
