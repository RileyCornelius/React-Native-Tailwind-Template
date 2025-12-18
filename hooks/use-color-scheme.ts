import { useColorScheme as useNativewindColorScheme } from 'nativewind';

import { Colors } from '@/constants/colors1';

// export { useColorScheme } from 'react-native';

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
