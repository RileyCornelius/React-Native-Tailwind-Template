import { Stack } from 'expo-router';

export { ErrorBoundary } from 'expo-router'; // Catch any errors thrown by the Layout component.

export const unstable_settings = {
	// Ensure that reloading keeps a back button present.
	initialRouteName: '(tabs)',
};

export default function AppLayout() {
	return (
		<Stack>
			<Stack.Screen name="(tabs)" options={{ headerShown: false }} />
		</Stack>
	);
}
