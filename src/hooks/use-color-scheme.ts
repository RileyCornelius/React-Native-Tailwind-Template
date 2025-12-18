import { useColorScheme as useNativewindColorScheme } from 'nativewind';

import { Colors } from '@/theme/colors';

function useColorScheme() {
	const { colorScheme, setColorScheme } = useNativewindColorScheme();

	function toggleColorScheme() {
		return setColorScheme(colorScheme === 'light' ? 'dark' : 'light');
	}

	return {
		colorScheme: colorScheme ?? 'light',
		isDarkColorScheme: colorScheme === 'dark',
		setColorScheme,
		toggleColorScheme,
		colors: Colors[colorScheme ?? 'light'],
	};
}

export { useColorScheme };
