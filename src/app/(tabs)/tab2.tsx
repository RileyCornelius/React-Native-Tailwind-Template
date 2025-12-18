import React from 'react';
import { FlatList } from 'react-native';

import { GradientBlur } from '@/components/common/gradient-blur';
import { Avatar, AvatarFallbackText, AvatarImage } from '@/components/ui/avatar';
import { Badge, BadgeText } from '@/components/ui/badge';
import { Box } from '@/components/ui/box';
import { Button, ButtonText } from '@/components/ui/button';
import { Heading } from '@/components/ui/heading';
import { HStack } from '@/components/ui/hstack';
import { SearchIcon } from '@/components/ui/icon';
import { Input, InputField, InputIcon, InputSlot } from '@/components/ui/input';
import { Text } from '@/components/ui/text';
import { VStack } from '@/components/ui/vstack';

export default function Tab2() {
	return (
		<VStack className="flex-1 bg-background-0" space="md">
			{/* Header Section */}
			<Box className="px-4 pt-2">
				<Heading size="2xl" className="mb-4 font-bold">
					Inbox
				</Heading>

				{/* Search Input */}
				<Input variant="outline" size="md" className="mb-4 rounded-lg border-outline-200 bg-background-50">
					<InputSlot className="pl-3">
						<InputIcon as={SearchIcon} className="text-typography-400" />
					</InputSlot>
					<InputField placeholder="Search" />
				</Input>

				{/* Filter Tabs */}
				<HStack space="sm" className="mb-2 pt-1">
					<Button size="xs" variant="solid" action="secondary" className="rounded-full bg-background-100 px-4">
						<ButtonText className="font-medium text-typography-900">All mail</ButtonText>
					</Button>
					<Button size="xs" variant="outline" action="secondary" className="rounded-full border-0 bg-transparent px-4">
						<ButtonText className="font-medium text-typography-500">Unread</ButtonText>
					</Button>
				</HStack>
			</Box>

			{/* Email List */}
			<FlatList
				data={EMAIL_DATA}
				renderItem={({ item }) => <EmailItem item={item} />}
				keyExtractor={(item) => item.id}
				showsVerticalScrollIndicator={false}
				contentContainerStyle={{ paddingBottom: 20 }}
			/>
			<GradientBlur height={40} intensity={80} />
		</VStack>
	);
}

const EmailItem = ({ item }: { item: (typeof EMAIL_DATA)[0] }) => {
	return (
		<Box className="border-b border-outline-100 bg-background-0 p-4">
			<HStack space="md" className="items-start">
				<Avatar size="md" className="bg-primary-500">
					<AvatarFallbackText>{item.name}</AvatarFallbackText>
					<AvatarImage
						source={{
							uri: item.avatarUrl,
						}}
					/>
				</Avatar>
				<VStack className="flex-1" space="xs">
					<HStack className="items-center justify-between">
						<Heading size="sm" className="font-semibold text-typography-900">
							{item.name}
						</Heading>
						<Text size="xs" className="text-typography-500">
							{item.time}
						</Text>
					</HStack>
					<Text className="text-sm font-bold text-typography-900" numberOfLines={1}>
						{item.subject}
					</Text>
					<Text className="text-sm text-typography-500" numberOfLines={2}>
						{item.snippet}
					</Text>
					{item.tags.length > 0 && (
						<HStack space="xs" className="mt-2 flex-wrap">
							{item.tags.map((tag, index) => (
								<Badge key={index} size="sm" variant="solid" action={tag === 'work' ? 'success' : 'muted'} className="rounded-md">
									<BadgeText className="capitalize">{tag}</BadgeText>
								</Badge>
							))}
						</HStack>
					)}
				</VStack>
				{item.unread && <Box className="mt-1.5 size-2.5 rounded-full bg-blue-500" />}
			</HStack>
		</Box>
	);
};

const EMAIL_DATA = [
	{
		id: '1',
		name: 'William Smith',
		subject: 'Meeting Tomorrow',
		snippet:
			"Hi, let's have a meeting tomorrow to discuss the project. I've been reviewing the project details and have some ideas I'd like to share. It's...",
		time: 'about 1 day ago',
		tags: ['meeting', 'work', 'important'],
		avatarUrl: 'https://randomuser.me/api/portraits/men/1.jpg',
		unread: true,
	},
	{
		id: '2',
		name: 'Alice Smith',
		subject: 'Re: Project Update',
		snippet:
			"Thank you for the project update. It looks great! I've gone through the report, and the progress is impressive. The team has done a fantastic jo...",
		time: 'about 4 days ago',
		tags: ['work', 'important'],
		avatarUrl: 'https://randomuser.me/api/portraits/women/1.jpg',
		unread: false,
	},
	{
		id: '3',
		name: 'Bob Johnson',
		subject: 'Weekend Plans',
		snippet:
			"Any plans for the weekend? I was thinking of going hiking in the nearby mountains. It's been a while since we had some outdoor fun. If you're...",
		time: 'over 1 years ago',
		tags: ['personal'],
		avatarUrl: 'https://randomuser.me/api/portraits/men/2.jpg',
		unread: false,
	},
	{
		id: '4',
		name: 'Emily Davis',
		subject: 'Re: Question about Budget',
		snippet:
			"I have a question about the budget for the upcoming project. It seems like there's a discrepancy in the allocation of resources. I've reviewed the...",
		time: 'over 2 years ago',
		tags: ['work', 'budget'],
		avatarUrl: 'https://randomuser.me/api/portraits/women/2.jpg',
		unread: false,
	},
	{
		id: '5',
		name: 'Michael Wilson',
		subject: 'Important Announcement',
		snippet:
			'I have an important announcement to make during our team meeting. It pertains to a strategic shift in our approach to the upcoming product...',
		time: 'almost 3 years ago',
		tags: [],
		avatarUrl: 'https://randomuser.me/api/portraits/men/3.jpg',
		unread: false,
	},
	{
		id: '6',
		name: 'Sarah Jones',
		subject: 'Design Mockups Feedback',
		snippet: 'I just reviewed the latest design mockups. They look fantastic! I have a few minor suggestions regarding the color palette...',
		time: '3 years ago',
		tags: ['design', 'feedback'],
		avatarUrl: 'https://randomuser.me/api/portraits/women/3.jpg',
		unread: true,
	},
	{
		id: '7',
		name: 'David Brown',
		subject: 'Quarterly Report Review',
		snippet:
			'Can we schedule a time to go over the quarterly report? I have some questions about the marketing metrics and user acquisition numbers...',
		time: '3 years ago',
		tags: ['work', 'report'],
		avatarUrl: 'https://randomuser.me/api/portraits/men/4.jpg',
		unread: false,
	},
	{
		id: '8',
		name: 'Jessica Taylor',
		subject: 'Team Lunch',
		snippet: 'Hey everyone, are we still on for the team lunch this Friday? I was thinking we could try that new Italian place downtown...',
		time: '3 years ago',
		tags: ['social'],
		avatarUrl: 'https://randomuser.me/api/portraits/women/4.jpg',
		unread: false,
	},
	{
		id: '9',
		name: 'Mark Anderson',
		subject: 'New Client Onboarding',
		snippet:
			"We have a new client starting next week. I'll need help setting up their account and preparing the welcome package. Let me know if you...",
		time: '3 years ago',
		tags: ['work', 'client'],
		avatarUrl: 'https://randomuser.me/api/portraits/men/5.jpg',
		unread: true,
	},
	{
		id: '10',
		name: 'Laura Martinez',
		subject: 'Conference Registration',
		snippet: 'Just a reminder to register for the upcoming tech conference. The early bird deadline is approaching fast. Let me know if you need...',
		time: '3 years ago',
		tags: ['conference', 'event'],
		avatarUrl: 'https://randomuser.me/api/portraits/women/5.jpg',
		unread: false,
	},
];
