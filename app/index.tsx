import React from 'react';
import { ScrollView } from 'react-native';
import { useRouter } from 'expo-router';

import Gradient from '@/assets/icons/Gradient';
import Logo from '@/assets/icons/Logo';
import { Box } from '@/components/ui/box';
import { Button, ButtonText } from '@/components/ui/button';
import { Heading } from '@/components/ui/heading';
import { Text } from '@/components/ui/text';

export default function Home() {
	const router = useRouter();

	return (
		<Box className="h-screen flex-1 bg-background-300">
			<Box className="absolute size-[500px] lg:size-[700px]">
				<Gradient />
			</Box>
			<ScrollView style={{ height: '100%' }} contentContainerStyle={{ flexGrow: 1 }}>
				<Box className="py-safe mx-5 flex flex-1 items-center lg:mx-32 lg:my-24">
					<Box className="base:flex-col justify-between gap-10 sm:w-4/5 sm:flex-row md:flex-1">
						<Box className="bg-background-template flex-col items-center rounded-full px-6 py-2 md:flex-row md:self-start">
							<Heading size="lg" className="font-medium text-white">
								Get started by editing ./app/index.tsx
							</Heading>
							<Text className="ml-2 font-medium text-white">find this text and replace it</Text>
							<Text className="ml-2 font-medium text-white">then explore the tabs</Text>
						</Box>
						<Button
							size="lg"
							className="rounded-full bg-primary-500 px-6 py-2"
							onPress={() => {
								router.push('/(tabs)/tab1');
							}}>
							<ButtonText>Explore Tab Navigation</ButtonText>
						</Button>
					</Box>

					<Box className="h-[20px] w-[300px] flex-1 items-center justify-center lg:h-[160px] lg:w-[400px]">
						<Logo />
					</Box>
				</Box>
			</ScrollView>
		</Box>
	);
}
