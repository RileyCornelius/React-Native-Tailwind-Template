/**
 * These colors are mapped from colorsConfig.ts to ensure a single source of truth.
 * Use tailwind colors (e.g., className="text-primary-500") for the rest of the app.
 * [Nativewind](https://www.nativewind.dev/)
 * [Gluestack UI](https://gluestack.io/)
 */

import { darkColors, lightColors } from './colorsConfig';

const getVar = (colors: Record<string, string>, name: string) => {
	const val = colors[`--color-${name}` as keyof typeof colors];
	return val ? `rgb(${val.split(' ').join(', ')})` : '';
};

export const Colors = {
	light: {
		text: getVar(lightColors, 'typography-900'),
		background: getVar(lightColors, 'background-0'),
		tint: getVar(lightColors, 'info-500'),
		icon: getVar(lightColors, 'typography-500'),
		tabIconDefault: getVar(lightColors, 'typography-500'),
		tabIconSelected: getVar(lightColors, 'info-500'),
	},
	dark: {
		text: getVar(darkColors, 'typography-900'),
		background: getVar(darkColors, 'background-0'),
		tint: getVar(darkColors, 'info-500'),
		icon: getVar(darkColors, 'typography-500'),
		tabIconDefault: getVar(darkColors, 'typography-500'),
		tabIconSelected: getVar(darkColors, 'info-500'),
	},
};
