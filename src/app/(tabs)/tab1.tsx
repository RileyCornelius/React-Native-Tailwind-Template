import React from 'react';
import { Platform, ScrollView } from 'react-native';

import { Box } from '@/components/ui/box';
import { Button, ButtonText } from '@/components/ui/button';
import {
	FormControl,
	FormControlError,
	FormControlErrorIcon,
	FormControlErrorText,
	FormControlHelper,
	FormControlHelperText,
	FormControlLabel,
	FormControlLabelText,
} from '@/components/ui/form-control';
import { Heading } from '@/components/ui/heading';
import { HStack } from '@/components/ui/hstack';
import { AlertCircleIcon, ChevronDownIcon } from '@/components/ui/icon';
import { Input, InputField } from '@/components/ui/input';
import { KeyboardAvoidingView } from '@/components/ui/keyboard-avoiding-view';
import {
	Select,
	SelectBackdrop,
	SelectContent,
	SelectDragIndicator,
	SelectDragIndicatorWrapper,
	SelectIcon,
	SelectInput,
	SelectItem,
	SelectPortal,
	SelectTrigger,
} from '@/components/ui/select';
import { Text } from '@/components/ui/text';
import { Textarea, TextareaInput } from '@/components/ui/textarea';
import { VStack } from '@/components/ui/vstack';

export default function Tab1() {
	return (
		<Box className="flex-1 bg-background-0">
			<KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} className="flex-1">
				<ScrollView className="flex-1" contentContainerStyle={{ flexGrow: 1 }}>
					<VStack className="w-full max-w-[600px] flex-1 self-center p-5">
						{/* Top Section: Header + Form Fields */}
						<VStack space="xl">
							<VStack space="xs" className="mb-4">
								<Heading size="3xl">User Information</Heading>
								<Text size="md" className="text-typography-500">
									Please fill in your details below
								</Text>
							</VStack>

							<VStack space="xl">
								{/* Name Field */}
								<FormControl isRequired={true}>
									<FormControlLabel>
										<FormControlLabelText>Name</FormControlLabelText>
									</FormControlLabel>
									<Input className="my-1 rounded-lg">
										<InputField placeholder="Enter your name" type="text" />
									</Input>
									<FormControlHelper>
										<FormControlHelperText>We'll use this for your profile.</FormControlHelperText>
									</FormControlHelper>
									<FormControlError>
										<FormControlErrorIcon as={AlertCircleIcon} />
										<FormControlErrorText>Name is required.</FormControlErrorText>
									</FormControlError>
								</FormControl>

								{/* Role Field */}
								<FormControl isRequired={true}>
									<FormControlLabel>
										<FormControlLabelText>Role</FormControlLabelText>
									</FormControlLabel>
									<Select className="my-1">
										<SelectTrigger variant="outline" size="md" className="rounded-lg">
											<SelectInput placeholder="Select a role" />
											<SelectIcon className="mr-3" as={ChevronDownIcon} />
										</SelectTrigger>
										<SelectPortal>
											<SelectBackdrop />
											<SelectContent>
												<SelectDragIndicatorWrapper>
													<SelectDragIndicator />
												</SelectDragIndicatorWrapper>
												<SelectItem label="Frontend Developer" value="frontend" />
												<SelectItem label="Backend Developer" value="backend" />
												<SelectItem label="Full Stack Developer" value="fullstack" />
												<SelectItem label="Designer" value="designer" />
												<SelectItem label="Product Manager" value="pm" />
											</SelectContent>
										</SelectPortal>
									</Select>
								</FormControl>

								{/* Framework Field */}
								<FormControl>
									<FormControlLabel>
										<FormControlLabelText>Framework</FormControlLabelText>
									</FormControlLabel>
									<Select className="my-1">
										<SelectTrigger variant="outline" size="md" className="rounded-lg">
											<SelectInput placeholder="Select a framework" />
											<SelectIcon className="mr-3" as={ChevronDownIcon} />
										</SelectTrigger>
										<SelectPortal>
											<SelectBackdrop />
											<SelectContent>
												<SelectDragIndicatorWrapper>
													<SelectDragIndicator />
												</SelectDragIndicatorWrapper>
												<SelectItem label="React Native" value="react-native" />
												<SelectItem label="Expo" value="expo" />
												<SelectItem label="Next.js" value="nextjs" />
												<SelectItem label="Vue" value="vue" />
												<SelectItem label="Angular" value="angular" />
											</SelectContent>
										</SelectPortal>
									</Select>
								</FormControl>

								{/* Comments Field */}
								<FormControl>
									<FormControlLabel>
										<FormControlLabelText>Comments</FormControlLabelText>
									</FormControlLabel>
									<Textarea className="my-1 rounded-lg">
										<TextareaInput placeholder="Add any additional comments" />
									</Textarea>
								</FormControl>
							</VStack>
						</VStack>

						{/* Bottom Section: Buttons */}
						<HStack space="md" className="w-full py-12">
							<Button className="flex-1 rounded-xl" variant="solid" action="primary" size="lg">
								<ButtonText>Submit</ButtonText>
							</Button>
							<Button className="flex-1 rounded-xl" variant="outline" action="secondary" size="lg">
								<ButtonText>Cancel</ButtonText>
							</Button>
						</HStack>
					</VStack>
				</ScrollView>
			</KeyboardAvoidingView>
		</Box>
	);
}
