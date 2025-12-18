import { useEffect, useState } from 'react';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useFonts } from 'expo-font';
import { Stack, usePathname } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';

import { Fab, FabIcon } from '@/components/ui/fab';
import { GluestackUIProvider } from '@/components/ui/gluestack-ui-provider';
import { MoonIcon, SunIcon } from '@/components/ui/icon';
import { useColorScheme } from '@/hooks/use-color-scheme';
import '@/global.css';

export { ErrorBoundary } from 'expo-router';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
	const [loaded, error] = useFonts({
		SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
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
	const systemScheme = useColorScheme();
	const [colorMode, setColorMode] = useState<'light' | 'dark'>((systemScheme as 'light' | 'dark') ?? 'light');

	return (
		<GluestackUIProvider mode={colorMode}>
			<ThemeProvider value={colorMode === 'dark' ? DarkTheme : DefaultTheme}>
				<StatusBar style={colorMode === 'dark' ? 'light' : 'dark'} />
				<Stack>
					<Stack.Screen name="index" options={{ headerShown: false }} />
					<Stack.Screen name="(tabs)" options={{ headerShown: false }} />
				</Stack>
				{pathname === '/' && (
					<Fab className="m-6" size="lg" onPress={() => setColorMode(colorMode === 'dark' ? 'light' : 'dark')}>
						<FabIcon as={colorMode === 'dark' ? MoonIcon : SunIcon} />
					</Fab>
				)}
			</ThemeProvider>
		</GluestackUIProvider>
	);
}
