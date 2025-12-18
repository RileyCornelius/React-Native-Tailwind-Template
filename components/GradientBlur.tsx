import MaskedView from '@react-native-masked-view/masked-view';
import { BlurView, BlurViewProps } from 'expo-blur';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { StyleSheet, useColorScheme } from 'react-native';

interface GradientBlurProps extends BlurViewProps {
	height?: number;
	colors?: [string, string, ...string[]];
	locations?: [number, number, ...number[]] | null;
}

export const GradientBlur = ({
	height = 80,
	style,
	intensity = 100,
	tint,
	colors = ['transparent', 'black'],
	locations = [0, 1],
	...props
}: GradientBlurProps) => {
	const colorScheme = useColorScheme();
	return (
		<MaskedView
			style={[styles.container, { height }, style]}
			maskElement={<LinearGradient colors={colors} locations={locations} style={StyleSheet.absoluteFill} />}>
			<BlurView
				intensity={intensity}
				tint={tint || (colorScheme === 'dark' ? 'dark' : 'light')}
				experimentalBlurMethod="dimezisBlurView"
				style={StyleSheet.absoluteFill}
				{...props}
			/>
		</MaskedView>
	);
};

const styles = StyleSheet.create({
	container: {
		position: 'absolute',
		bottom: 0,
		left: 0,
		right: 0,
	},
});
