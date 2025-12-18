import { Box } from '@/components/ui/box';
import { Button, ButtonText } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Heading } from '@/components/ui/heading';
import { HStack } from '@/components/ui/hstack';
import { AddIcon, BellIcon, Icon, PlayIcon, SettingsIcon, SunIcon } from '@/components/ui/icon';
import { Switch } from '@/components/ui/switch';
import { Text } from '@/components/ui/text';
import { VStack } from '@/components/ui/vstack';
import React from 'react';
import { ScrollView } from 'react-native';

export default function Tab3() {
	return (
		<ScrollView className="flex-1">
			<VStack className="p-6" space="xl">
				{/* Top Header Section */}
				<HStack className="justify-between items-center">
					<VStack>
						<Heading size="3xl" className="text-typography-900">
							Smart Home
						</Heading>
						<Text size="md" className="text-typography-500">
							Good Morning
						</Text>
					</VStack>
					<HStack space="md">
						<Button variant="outline" action="secondary" className="rounded-full p-2 h-10 w-10">
							<Icon as={AddIcon} className="text-typography-500" />
						</Button>
						<Button variant="outline" action="secondary" className="rounded-full p-2 h-10 w-10">
							<Icon as={BellIcon} className="text-typography-500" />
						</Button>
						<Button variant="outline" action="secondary" className="rounded-full p-2 h-10 w-10">
							<Icon as={SettingsIcon} className="text-typography-500" />
						</Button>
					</HStack>
				</HStack>

				{/* Stats Grid */}
				<HStack space="md">
					<Card className="flex-1 p-4 bg-secondary-100 border-outline-100 rounded-2xl" variant="outline">
						<VStack space="sm">
							<Icon as={SunIcon} size="lg" className="text-secondary-900" />
							<VStack>
								<Text size="xs" className="text-typography-500 font-bold uppercase tracking-wider">
									Temp
								</Text>
								<Heading size="xl">24°C</Heading>
							</VStack>
						</VStack>
					</Card>
					<Card className="flex-1 p-4 bg-secondary-100 border-outline-100 rounded-2xl" variant="outline">
						<VStack space="sm">
							<Icon as={PlayIcon} size="lg" className="text-secondary-800" />
							<VStack>
								<Text size="xs" className="text-typography-500 font-bold uppercase tracking-wider">
									Status
								</Text>
								<Heading size="xl">Active</Heading>
							</VStack>
						</VStack>
					</Card>
				</HStack>

				{/* Device List Section */}
				<VStack space="md">
					<HStack className="justify-between items-center">
						<Heading size="lg">Smart Devices</Heading>
						<Button variant="link" action="primary">
							<ButtonText>See All</ButtonText>
						</Button>
					</HStack>

					<VStack space="md">
						<Card variant="outline" className="p-5 rounded-2xl border-outline-100 bg-background-50">
							<HStack className="justify-between items-center">
								<VStack space="xs">
									<Heading size="md" className="text-typography-800">
										Living Room Light
									</Heading>
									<Text size="sm" className="text-typography-400">
										Dimmed to 65%
									</Text>
								</VStack>
								<Switch size="lg" onValueChange={() => {}} />
							</HStack>
						</Card>

						<Card variant="outline" className="p-5 rounded-2xl border-outline-100 bg-background-50">
							<HStack className="justify-between items-center">
								<VStack space="xs">
									<Heading size="md" className="text-typography-800">
										Smart AC
									</Heading>
									<Text size="sm" className="text-typography-400">
										Eco Mode • 22°C
									</Text>
								</VStack>
								<Switch size="lg" onValueChange={() => {}} />
							</HStack>
						</Card>
					</VStack>
				</VStack>

				{/* Energy Saving Tip */}
				<Card className="bg-primary-600 p-6 rounded-[32px] overflow-hidden relative">
					<VStack space="md" className="z-10">
						<Heading size="lg" className="text-secondary-400">
							Energy Saving Tip
						</Heading>
						<Text className="text-secondary-600 leading-relaxed">
							Lowering your AC by just 1 degree can save up to 10% on your energy bill this month.
						</Text>
						<Box className="flex-row">
							<Button className="bg-secondary-200 rounded-full px-6">
								<ButtonText className="text-primary-600">Learn More</ButtonText>
							</Button>
						</Box>
					</VStack>
					{/* Background decorative element */}
					<Box className="absolute -bottom-10 -right-10 w-40 h-40 bg-primary-500 rounded-full opacity-50" />
				</Card>
			</VStack>
		</ScrollView>
	);
}
