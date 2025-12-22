import { Pressable, View } from 'react-native';
import Animated, { LayoutAnimationConfig, ZoomInRotate } from 'react-native-reanimated';

import { cn } from '@gluestack-ui/utils/nativewind-utils';

import { HStack } from '@/components/ui/hstack';
import { CircleIcon, Icon, MoonIcon, SunIcon } from '@/components/ui/icon';
import { RadioGroup, Radio, RadioIndicator, RadioIcon } from '@/components/ui/radio';
import { Select, SelectTrigger, SelectInput, SelectIcon, SelectContent, SelectItem } from '@/components/ui/select';
import { Text } from '@/components/ui/text';
import { VStack } from '@/components/ui/vstack';
import { useColorScheme, Theme } from '@/hooks/use-color-scheme';
import { Colors } from '@/theme/colors';

import { Card } from '../ui';

function ThemeRadioOption({ value }: { value: Theme }) {
	const { savedTheme, setTheme } = useColorScheme();

	return (
		<Radio
			onPress={() => setTheme(value)}
			value={value}
			className={`w-full rounded-xl border p-4 ${savedTheme === value ? 'border-primary-500 bg-secondary-0' : 'border-outline-200 bg-background-0'}`}>
			<HStack className="items-start justify-between">
				<VStack space="xs" className="flex-1 pr-4">
					<Text className={''}>{value}</Text>
				</VStack>
				<RadioIndicator className="mt-1">
					<RadioIcon as={CircleIcon} />
				</RadioIndicator>
			</HStack>
		</Radio>
	);
}

export function ThemeSelector() {
	const { colorScheme, savedTheme, setTheme } = useColorScheme();

	return (
		<Card variant="outline" className="justify-center">
			<Text className="text-md mb-4 pl-1 font-medium">Select Theme</Text>
			<RadioGroup value={savedTheme} onChange={(v) => setTheme(v as 'light' | 'dark' | 'system')}>
				<VStack space="md">
					<ThemeRadioOption value="system" />
					<ThemeRadioOption value="light" />
					<ThemeRadioOption value="dark" />
				</VStack>
			</RadioGroup>
		</Card>
	);
}
