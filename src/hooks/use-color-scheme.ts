import { useColorScheme as useSystemColorScheme } from 'react-native';

import { useAtom } from 'jotai/react';
import { useColorScheme as useNativewindColorScheme } from 'nativewind';

import { atomWithMMKV } from '@/store/storage';
import { Colors } from '@/theme/colors';

export type Theme = 'light' | 'dark' | 'system';

const savedThemeAtom = atomWithMMKV<Theme>('savedTheme', 'system');

function useColorScheme() {
	const systemColorScheme = useSystemColorScheme();
	const { colorScheme } = useNativewindColorScheme();
	const [savedTheme, setSavedTheme] = useAtom(savedThemeAtom);

	// Resolve actual color scheme (for 'system' mode, use system preference)
	const resolvedColorScheme = savedTheme === 'system' ? (systemColorScheme ?? 'light') : (colorScheme ?? 'light');

	function toggleColorScheme() {
		const newTheme = resolvedColorScheme === 'light' ? 'dark' : 'light';
		setSavedTheme(newTheme);
	}

	function setTheme(theme: Theme) {
		setSavedTheme(theme);
	}

	return {
		colorScheme: resolvedColorScheme,
		isDarkColorScheme: resolvedColorScheme === 'dark',
		savedTheme,
		colors: Colors[resolvedColorScheme],
		setTheme,
		toggleColorScheme,
	};
}

export { useColorScheme };
