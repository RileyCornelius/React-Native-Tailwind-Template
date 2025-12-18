import { useEffect, useState } from 'react';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useFonts } from 'expo-font';
import { Stack, usePathname } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import 'expo-dev-client';

import { ThemeToggle } from '@/components/common/theme-toggle';
import { Fab, FabIcon } from '@/components/ui/fab';
import { GluestackUIProvider } from '@/components/ui/gluestack-ui-provider';
import { MoonIcon, SunIcon } from '@/components/ui/icon';
import { useColorScheme } from '@/hooks/use-color-scheme';
import '../../global.css';

export { ErrorBoundary } from 'expo-router';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
	const [loaded, error] = useFonts({
		SpaceMono: require('@/assets/fonts/SpaceMono-Regular.ttf'),
		...FontAwesome.font,
	});

	// Expo Router uses Error Boundaries to catch errors in the navigation tree.
	useEffect(() => {
		if (error) throw error;
	}, [error]);

	// Hide the splash screen once fonts are loaded
	useEffect(() => {
		if (loaded) {
			SplashScreen.hideAsync();
		}
	}, [loaded]);

	return <RootLayoutNav />;
}

function RootLayoutNav() {
	const pathname = usePathname();
	const { colorScheme, isDarkColorScheme, toggleColorScheme } = useColorScheme();

	return (
		<GluestackUIProvider mode={colorScheme}>
			<ThemeProvider value={isDarkColorScheme ? DarkTheme : DefaultTheme}>
				<StatusBar style={isDarkColorScheme ? 'light' : 'dark'} />
				<Stack>
					<Stack.Screen name="index" options={{ headerShown: false }} />
					<Stack.Screen name="(tabs)" options={{ headerShown: false }} />
				</Stack>
				{pathname === '/' && (
					<Fab className="m-6" size="lg" onPress={() => toggleColorScheme()}>
						<ThemeToggle invertColor={true} />
					</Fab>
				)}
			</ThemeProvider>
		</GluestackUIProvider>
	);
}
