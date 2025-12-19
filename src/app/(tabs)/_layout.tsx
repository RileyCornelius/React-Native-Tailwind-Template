import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs, useRouter } from 'expo-router';

import { Pressable } from '@/components/ui/pressable';
import { useColorScheme } from '@/hooks/use-color-scheme';

function TabBarIcon(props: { name: React.ComponentProps<typeof FontAwesome>['name']; color: string }) {
	return <FontAwesome size={28} style={{ marginBottom: -1 }} {...props} />;
}

export default function TabLayout() {
	const { colorScheme, colors } = useColorScheme();
	const router = useRouter();

	return (
		<Tabs
			screenOptions={{
				headerTintColor: colors.text, // Controls back button and title color
				tabBarStyle: {
					backgroundColor: colors.background,
				},
				tabBarActiveTintColor: colors.tint,
				tabBarInactiveTintColor: colors.icon,
				tabBarLabelStyle: {
					fontSize: 12,
				},
				headerLeft: () => (
					<Pressable className="ml-4 mr-2" onPress={() => router.dismiss()}>
						{/* <FontAwesome name="arrow-left" size={18} color={colors.text} /> */}
						<Ionicons name="arrow-back" size={18} color={colors.text} />
					</Pressable>
				),
			}}>
			<Tabs.Screen
				name="tab1"
				options={{
					title: 'Profile',
					tabBarIcon: ({ color }) => <TabBarIcon name="user" color={color} />,
				}}
			/>
			<Tabs.Screen
				name="tab2"
				options={{
					title: 'Inbox',
					tabBarIcon: ({ color }) => <TabBarIcon name="envelope" color={color} />,
				}}
			/>
			<Tabs.Screen
				name="tab3"
				options={{
					title: 'Smart Home',
					tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
				}}
			/>
			<Tabs.Screen
				name="tab4"
				options={{
					title: 'Deploy',
					tabBarIcon: ({ color }) => <TabBarIcon name="cloud" color={color} />,
				}}
			/>
			<Tabs.Screen
				name="tab5"
				options={{
					title: 'Showcase',
					tabBarIcon: ({ color }) => <TabBarIcon name="star" color={color} />,
				}}
			/>
		</Tabs>
	);
}
