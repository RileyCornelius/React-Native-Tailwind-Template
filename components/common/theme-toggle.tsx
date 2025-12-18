import { Pressable, View } from 'react-native';
import Animated, { LayoutAnimationConfig, ZoomInRotate } from 'react-native-reanimated';

import { cn } from '@gluestack-ui/utils/nativewind-utils';

import { Icon, MoonIcon, SunIcon } from '@/components/ui/icon';
import { Colors } from '@/constants/colors';
import { useColorScheme } from '@/hooks/use-color-scheme';

export function ThemeToggle({ invertColor = false }: { invertColor?: boolean }) {
	const { colorScheme, toggleColorScheme } = useColorScheme();

	return (
		<LayoutAnimationConfig skipEntering>
			<Animated.View className="items-center justify-center" key={`toggle-${colorScheme}`} entering={ZoomInRotate}>
				<Pressable onPress={toggleColorScheme} className="opacity-80">
					{colorScheme === 'dark'
						? ({ pressed }) => (
								<View className={cn('px-0.5', pressed && 'opacity-50')}>
									<Icon as={MoonIcon} color={invertColor ? Colors.light.text : Colors.dark.text} />
								</View>
							)
						: ({ pressed }) => (
								<View className={cn('px-0.5', pressed && 'opacity-50')}>
									<Icon as={SunIcon} color={invertColor ? Colors.dark.text : Colors.light.text} />
								</View>
							)}
				</Pressable>
			</Animated.View>
		</LayoutAnimationConfig>
	);
}
