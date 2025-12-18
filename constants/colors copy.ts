/**
 * These colors are only used for header and tab bar.
 * Use tailwind colors for the rest of the app which are defined in /constants/colorsConfig.ts file.
 * [Nativewind](https://www.nativewind.dev/)
 * [Gluestack UI](https://gluestack.io/)
 */

const tintColorLight = '#0a7ea4';
const tintColorDark = '#fff';

export const Colors = {
	light: {
		text: '#11181C',
		background: '#fff',
		tint: tintColorLight,
		icon: '#687076',
		tabIconDefault: '#687076',
		tabIconSelected: tintColorLight,
	},
	dark: {
		text: '#ECEDEE',
		background: '#151718',
		tint: tintColorDark,
		icon: '#9BA1A6',
		tabIconDefault: '#9BA1A6',
		tabIconSelected: tintColorDark,
	},
};
