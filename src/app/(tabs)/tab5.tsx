import React, { useState } from 'react';
import { Platform } from 'react-native';

import { Container } from '@/components/common/container';
import {
	Accordion,
	AccordionItem,
	AccordionHeader,
	AccordionTrigger,
	AccordionTitleText,
	AccordionContent,
	AccordionContentText,
	AccordionIcon,
} from '@/components/ui/accordion';
import {
	Actionsheet,
	ActionsheetBackdrop,
	ActionsheetContent,
	ActionsheetDragIndicator,
	ActionsheetDragIndicatorWrapper,
	ActionsheetItem,
	ActionsheetItemText,
	ActionsheetIcon,
} from '@/components/ui/actionsheet';
import { Alert, AlertIcon, AlertText } from '@/components/ui/alert';
import {
	AlertDialog,
	AlertDialogBackdrop,
	AlertDialogContent,
	AlertDialogHeader,
	AlertDialogCloseButton,
	AlertDialogFooter,
	AlertDialogBody,
} from '@/components/ui/alert-dialog';
import { Avatar, AvatarFallbackText, AvatarImage, AvatarBadge } from '@/components/ui/avatar';
import { Badge, BadgeText, BadgeIcon } from '@/components/ui/badge';
import { Box } from '@/components/ui/box';
import { Button, ButtonText, ButtonIcon, ButtonSpinner, ButtonGroup } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Center } from '@/components/ui/center';
import { Checkbox, CheckboxIndicator, CheckboxLabel, CheckboxIcon, CheckboxGroup } from '@/components/ui/checkbox';
import { Divider } from '@/components/ui/divider';
import { Fab, FabIcon } from '@/components/ui/fab';
import { Heading } from '@/components/ui/heading';
import { HStack } from '@/components/ui/hstack';
import { Icon, SearchIcon, AddIcon, CheckIcon, ChevronDownIcon, CloseIcon, InfoIcon, SettingsIcon, PlayIcon, TrashIcon } from '@/components/ui/icon';
import { Image } from '@/components/ui/image';
import { Input, InputField, InputIcon, InputSlot } from '@/components/ui/input';
import { LinearGradient } from '@/components/ui/linear-gradient';
import { Link, LinkText } from '@/components/ui/link';
import { Menu, MenuItem, MenuItemLabel, MenuSeparator } from '@/components/ui/menu';
import { Modal, ModalBackdrop, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter } from '@/components/ui/modal';
import { Popover, PopoverBackdrop, PopoverContent, PopoverHeader, PopoverBody, PopoverFooter, PopoverCloseButton } from '@/components/ui/popover';
import { Pressable } from '@/components/ui/pressable';
import { Progress, ProgressFilledTrack } from '@/components/ui/progress';
import { Radio, RadioGroup, RadioIcon, RadioIndicator, RadioLabel } from '@/components/ui/radio';
import { ScrollView } from '@/components/ui/scroll-view';
import {
	Select,
	SelectTrigger,
	SelectInput,
	SelectIcon,
	SelectPortal,
	SelectBackdrop,
	SelectContent,
	SelectDragIndicatorWrapper,
	SelectDragIndicator,
	SelectItem,
} from '@/components/ui/select';
import { Skeleton, SkeletonText } from '@/components/ui/skeleton';
import { Slider, SliderTrack, SliderFilledTrack, SliderThumb } from '@/components/ui/slider';
import { Spinner } from '@/components/ui/spinner';
import { Switch } from '@/components/ui/switch';
import { Table, TableHeader, TableFooter, TableBody, TableRow, TableHead, TableData } from '@/components/ui/table';
import { Text } from '@/components/ui/text';
import { Textarea, TextareaInput } from '@/components/ui/textarea';
import { useToast, Toast, ToastTitle, ToastDescription } from '@/components/ui/toast';
import { Tooltip, TooltipContent, TooltipText } from '@/components/ui/tooltip';
import { VStack } from '@/components/ui/vstack';

export default function Tab5() {
	const [showModal, setShowModal] = useState(false);
	const [showAlertDialog, setShowAlertDialog] = useState(false);
	const [showActionsheet, setShowActionsheet] = useState(false);
	const [sliderValue, setSliderValue] = useState(40);
	const [switchValue, setSwitchValue] = useState(false);
	const toast = useToast();

	const handleToast = () => {
		toast.show({
			placement: 'top',
			render: ({ id }) => {
				return (
					<Toast nativeID={id} action="success" variant="solid">
						<ToastTitle>Hello World!</ToastTitle>
						<ToastDescription>This is a toast notification.</ToastDescription>
					</Toast>
				);
			},
		});
	};

	return (
		// <Container>
		<ScrollView className=" bg-background-0">
			<VStack className="w-full max-w-[600px] flex-1 self-center p-4 pb-32" space="xl">
				<Box className="mt-4">
					<Heading size="3xl">Component Showcase</Heading>
					<Text className="mt-1 text-typography-500">Explore the comprehensive suite of Gluestack UI components available in this template.</Text>
				</Box>

				{/* Typography Section */}
				<Card variant="outline" className="gap-4 rounded-xl p-5">
					<Heading size="md" className="mb-2">
						Typography
					</Heading>
					<VStack space="sm">
						<HStack className="flex-wrap items-end gap-2">
							<Heading size="xl">XL</Heading>
							<Heading size="lg">LG</Heading>
							<Heading size="md">MD</Heading>
							<Heading size="sm">SM</Heading>
							<Heading size="xs">XS</Heading>
						</HStack>
						<Divider className="my-2" />
						<VStack space="xs">
							<Text size="md">Body Text (Medium)</Text>
							<Text size="sm" className="text-typography-500">
								Secondary Text (Small)
							</Text>
							<Text size="xs" className="text-typography-400">
								Caption Text (Extra Small)
							</Text>
						</VStack>
					</VStack>
				</Card>

				{/* Layout Section */}
				<Card variant="outline" className="gap-4 rounded-xl p-5">
					<Heading size="md" className="mb-2">
						Layout
					</Heading>
					<HStack space="md" className="items-center">
						<Center className="size-16 rounded bg-primary-500">
							<Text className="font-bold text-white">Box</Text>
						</Center>
						<Center className="size-16 rounded bg-secondary-500 shadow-lg">
							<Text className="font-bold text-white">Shadow</Text>
						</Center>
						<VStack space="xs" className="flex-1">
							<Box className="h-4 w-full rounded bg-tertiary-200" />
							<Box className="h-4 w-3/4 rounded bg-tertiary-300" />
							<Box className="h-4 w-1/2 rounded bg-tertiary-400" />
						</VStack>
					</HStack>
				</Card>

				{/* Actions & Forms Section */}
				<Card variant="outline" className="gap-4 rounded-xl p-5">
					<Heading size="md" className="mb-2">
						Actions & Forms
					</Heading>

					{/* Buttons */}
					<VStack space="sm">
						<Text size="sm" className="font-bold text-typography-500">
							Buttons
						</Text>
						<HStack space="sm" className="flex-wrap">
							<Button size="sm" variant="solid" action="primary">
								<ButtonText>Solid</ButtonText>
							</Button>
							<Button size="sm" variant="outline" action="secondary">
								<ButtonText>Outline</ButtonText>
							</Button>
							<Button size="sm" variant="solid" action="positive">
								<ButtonIcon as={AddIcon} className="mr-2" />
								<ButtonText>Icon</ButtonText>
							</Button>
							<LinearGradient className="w-full items-center rounded-full py-2" colors={['#8637CF', '#0F55A1']} start={[0, 1]} end={[1, 0]}>
								<Text className="font-semibold text-typography-0">Subscribe</Text>
							</LinearGradient>
						</HStack>
					</VStack>

					<Divider />

					{/* Inputs */}
					<VStack space="sm">
						<Text size="sm" className="font-bold text-typography-500">
							Inputs
						</Text>
						<Input size="md" variant="outline">
							<InputSlot className="pl-3">
								<InputIcon as={SearchIcon} />
							</InputSlot>
							<InputField placeholder="Search..." />
						</Input>
						<Textarea size="md" className="w-full">
							<TextareaInput placeholder="Text area..." />
						</Textarea>
					</VStack>

					<Divider />

					{/* Selection Controls */}
					<VStack space="md">
						<HStack className="items-center justify-between">
							<Text size="sm" className="font-bold text-typography-500">
								Switch
							</Text>
							<Switch value={switchValue} onValueChange={setSwitchValue} size="md" />
						</HStack>

						<VStack space="xs">
							<Text size="sm" className="mb-1 font-bold text-typography-500">
								Checkbox & Radio
							</Text>
							<HStack space="xl">
								<Checkbox value="checked" size="md" isChecked={true}>
									<CheckboxIndicator>
										<CheckboxIcon as={CheckIcon} />
									</CheckboxIndicator>
									<CheckboxLabel>Check</CheckboxLabel>
								</Checkbox>
								<RadioGroup value="1">
									<Radio value="1" size="md">
										<RadioIndicator>
											<RadioIcon as={CheckIcon} />
										</RadioIndicator>
										<RadioLabel>Radio</RadioLabel>
									</Radio>
								</RadioGroup>
							</HStack>
						</VStack>

						<VStack space="xs">
							<Text size="sm" className="font-bold text-typography-500">
								Slider: {sliderValue}
							</Text>
							<Slider value={sliderValue} size="md" onChange={(v) => setSliderValue(Math.floor(v))}>
								<SliderTrack>
									<SliderFilledTrack />
								</SliderTrack>
								<SliderThumb />
							</Slider>
						</VStack>

						<VStack space="xs">
							<Text size="sm" className="font-bold text-typography-500">
								Select
							</Text>
							<Select>
								<SelectTrigger variant="outline" size="md">
									<SelectInput placeholder="Select option" />
									<SelectIcon className="mr-3" as={ChevronDownIcon} />
								</SelectTrigger>
								<SelectPortal>
									<SelectBackdrop />
									<SelectContent>
										<SelectDragIndicatorWrapper>
											<SelectDragIndicator />
										</SelectDragIndicatorWrapper>
										<SelectItem label="Option 1" value="1" />
										<SelectItem label="Option 2" value="2" />
										<SelectItem label="Option 3" value="3" />
									</SelectContent>
								</SelectPortal>
							</Select>
						</VStack>
					</VStack>
				</Card>

				{/* Data Display Section */}
				<Card variant="outline" className="gap-4 rounded-xl p-5">
					<Heading size="md" className="mb-2">
						Data Display
					</Heading>
					<HStack space="md" className="flex-wrap items-center">
						<Avatar size="md">
							<AvatarFallbackText>JD</AvatarFallbackText>
							<AvatarImage
								source={{
									uri: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
								}}
							/>
							<AvatarBadge className="bg-success-500" />
						</Avatar>
						<Badge size="md" variant="solid" action="info" className="rounded-full">
							<BadgeText>New</BadgeText>
							<BadgeIcon as={InfoIcon} className="ml-1" />
						</Badge>
						<Badge size="md" variant="outline" action="success" className="rounded-full">
							<BadgeText>Verified</BadgeText>
						</Badge>
					</HStack>

					<Divider />

					<Heading size="sm" className="text-typography-500">
						Table
					</Heading>
					<Box className="overflow-hidden rounded-lg border border-outline-200">
						<Table className="w-full">
							<TableHeader>
								<TableRow className="bg-background-50">
									<TableHead>Name</TableHead>
									<TableHead>Role</TableHead>
								</TableRow>
							</TableHeader>
							<TableBody>
								<TableRow>
									<TableData>
										<Text size="sm">Jane Doe</Text>
									</TableData>
									<TableData>
										<Text size="sm">Dev</Text>
									</TableData>
								</TableRow>
								<TableRow className="border-b-0">
									<TableData>
										<Text size="sm">John Smith</Text>
									</TableData>
									<TableData>
										<Text size="sm">Design</Text>
									</TableData>
								</TableRow>
							</TableBody>
						</Table>
					</Box>
				</Card>

				{/* Feedback Section */}
				<Card variant="outline" className="gap-4 rounded-xl p-5">
					<Heading size="md" className="mb-2">
						Feedback
					</Heading>
					<Alert action="info" variant="solid" className="rounded-lg">
						<AlertIcon as={InfoIcon} className="mr-2" />
						<AlertText>This is an informational alert.</AlertText>
					</Alert>

					<HStack space="md" className="items-center justify-between">
						<VStack space="xs" className="flex-1">
							<Text size="xs" className="text-typography-500">
								Progress
							</Text>
							<Progress value={65} size="md">
								<ProgressFilledTrack />
							</Progress>
						</VStack>
						<Spinner size="small" />
					</HStack>

					<VStack space="sm" className="">
						<Text size="xs" className="text-typography-500">
							Skeleton Loading
						</Text>
						<Box className="h-[300px] w-[290px] gap-3 rounded-md bg-background-100 p-4">
							<Skeleton variant="rounded" className="h-44 w-64 rounded-sm" startColor="bg-background-500" speed={3} isLoaded={false}>
								<Image
									className="h-44 w-64 rounded-sm"
									source={{
										uri: 'https://images.unsplash.com/photo-1715006020121-dd50879f9821?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
									}}
								/>
							</Skeleton>
							<VStack className="gap-2">
								<Text className="text-sm text-primary-700">May 15, 2023</Text>
								<Text className="font-bold text-primary-900">The Power of Positive Thinking</Text>
								<Text className="text-sm text-primary-700">
									Discover how the power of positive thinking can transform your life, boost your confidence, and help you overcome challenges.
								</Text>
							</VStack>
						</Box>
					</VStack>

					<Button onPress={handleToast} variant="outline" size="sm">
						<ButtonText>Show Toast</ButtonText>
					</Button>
				</Card>

				{/* Overlays & Interactive Section */}
				<Card variant="outline" className="gap-4 rounded-xl p-5">
					<Heading size="md" className="mb-2">
						Overlays & Interactive
					</Heading>
					<HStack space="sm" className="flex-wrap">
						<Button onPress={() => setShowModal(true)} size="sm">
							<ButtonText>Modal</ButtonText>
						</Button>
						<Button onPress={() => setShowAlertDialog(true)} action="negative" size="sm">
							<ButtonText>Alert</ButtonText>
						</Button>
						<Button onPress={() => setShowActionsheet(true)} variant="outline" size="sm">
							<ButtonText>Sheet</ButtonText>
						</Button>
					</HStack>

					<Divider />

					<HStack space="lg" className="items-center">
						<Tooltip
							trigger={(triggerProps) => (
								<Button {...triggerProps} size="sm" variant="ghost">
									<ButtonText className="text-typography-0 underline">Tooltip</ButtonText>
								</Button>
							)}>
							<TooltipContent>
								<TooltipText>This is a tooltip!</TooltipText>
							</TooltipContent>
						</Tooltip>

						<Popover
							trigger={(triggerProps) => (
								<Button {...triggerProps} size="sm" variant="ghost">
									<ButtonText className="text-typography-0 underline">Popover</ButtonText>
								</Button>
							)}>
							<PopoverBackdrop />
							<PopoverContent>
								<PopoverHeader>
									<Heading size="sm">Popover</Heading>
									<PopoverCloseButton>
										<Icon as={CloseIcon} />
									</PopoverCloseButton>
								</PopoverHeader>
								<PopoverBody>
									<Text size="sm">Content inside popover.</Text>
								</PopoverBody>
							</PopoverContent>
						</Popover>

						<Menu
							trigger={(triggerProps) => (
								<Button {...triggerProps} size="sm">
									<ButtonText className="text-typography-0 underline">Menu</ButtonText>
								</Button>
							)}>
							<MenuItem key="Settings" textValue="Settings">
								<Icon as={SettingsIcon} className="mr-2 size-4" />
								<MenuItemLabel>Settings</MenuItemLabel>
							</MenuItem>
							<MenuSeparator />
							<MenuItem key="Logout" textValue="Logout">
								<Icon as={TrashIcon} className="mr-2 size-4" />
								<MenuItemLabel>Logout</MenuItemLabel>
							</MenuItem>
						</Menu>
					</HStack>

					<Divider />

					<Accordion variant="filled" size="md" className="overflow-hidden rounded-lg border border-outline-100">
						<AccordionItem value="a">
							<AccordionHeader>
								<AccordionTrigger>
									<AccordionTitleText>Accordion Item</AccordionTitleText>
									<AccordionIcon as={ChevronDownIcon} />
								</AccordionTrigger>
							</AccordionHeader>
							<AccordionContent>
								<AccordionContentText>Collapsible content area for organizing information efficiently.</AccordionContentText>
							</AccordionContent>
						</AccordionItem>
					</Accordion>
				</Card>

				<Link href="https://gluestack.io" className="mt-4 self-center">
					<LinkText className="font-bold text-primary-500">Visit Gluestack Documentation</LinkText>
				</Link>
			</VStack>

			{/* Floating Action Button */}
			<Fab size="md" placement="bottom right" className="mb-4 mr-4">
				<FabIcon as={AddIcon} />
			</Fab>

			{/* Modal Component */}
			<Modal isOpen={showModal} onClose={() => setShowModal(false)}>
				<ModalBackdrop />
				<ModalContent>
					<ModalHeader>
						<Heading size="lg">Modal Header</Heading>
						<ModalCloseButton>
							<Icon as={CloseIcon} />
						</ModalCloseButton>
					</ModalHeader>
					<ModalBody>
						<Text>This is the content inside the modal. It overlays the screen content.</Text>
					</ModalBody>
					<ModalFooter>
						<Button variant="outline" action="secondary" onPress={() => setShowModal(false)} className="mr-2">
							<ButtonText>Cancel</ButtonText>
						</Button>
						<Button onPress={() => setShowModal(false)}>
							<ButtonText>Confirm</ButtonText>
						</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>

			{/* AlertDialog Component */}
			<AlertDialog isOpen={showAlertDialog} onClose={() => setShowAlertDialog(false)}>
				<AlertDialogBackdrop />
				<AlertDialogContent>
					<AlertDialogHeader>
						<Heading size="lg">Delete Item?</Heading>
						<AlertDialogCloseButton>
							<Icon as={CloseIcon} />
						</AlertDialogCloseButton>
					</AlertDialogHeader>
					<AlertDialogBody>
						<Text size="sm">Are you sure? This action cannot be undone and will permanently remove the item.</Text>
					</AlertDialogBody>
					<AlertDialogFooter>
						<ButtonGroup space="lg" flexDirection="row">
							<Button variant="outline" action="secondary" onPress={() => setShowAlertDialog(false)}>
								<ButtonText>Cancel</ButtonText>
							</Button>
							<Button action="negative" onPress={() => setShowAlertDialog(false)}>
								<ButtonText>Delete</ButtonText>
							</Button>
						</ButtonGroup>
					</AlertDialogFooter>
				</AlertDialogContent>
			</AlertDialog>

			{/* Actionsheet Component */}
			<Actionsheet isOpen={showActionsheet} onClose={() => setShowActionsheet(false)}>
				<ActionsheetBackdrop />
				<ActionsheetContent>
					<ActionsheetDragIndicatorWrapper>
						<ActionsheetDragIndicator />
					</ActionsheetDragIndicatorWrapper>
					<ActionsheetItem onPress={() => setShowActionsheet(false)}>
						<ActionsheetIcon as={PlayIcon} />
						<ActionsheetItemText>Play</ActionsheetItemText>
					</ActionsheetItem>
					<ActionsheetItem onPress={() => setShowActionsheet(false)}>
						<ActionsheetIcon as={TrashIcon} />
						<ActionsheetItemText>Delete</ActionsheetItemText>
					</ActionsheetItem>
					<ActionsheetItem onPress={() => setShowActionsheet(false)}>
						<ActionsheetIcon as={CloseIcon} />
						<ActionsheetItemText>Cancel</ActionsheetItemText>
					</ActionsheetItem>
				</ActionsheetContent>
			</Actionsheet>
			{/* </Container>*/}
		</ScrollView>
	);
}
