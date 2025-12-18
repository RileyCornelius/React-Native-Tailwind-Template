import { useState } from 'react';
import { ScrollView } from 'react-native';

import { Box } from '@/components/ui/box';
import { Button, ButtonIcon, ButtonText } from '@/components/ui/button';
import { Checkbox, CheckboxIcon, CheckboxIndicator, CheckboxLabel } from '@/components/ui/checkbox';
import { Divider } from '@/components/ui/divider';
import { Heading } from '@/components/ui/heading';
import { HStack } from '@/components/ui/hstack';
import { AddIcon, CheckIcon, CircleIcon, RemoveIcon } from '@/components/ui/icon';
import { Pressable } from '@/components/ui/pressable';
import { Radio, RadioGroup, RadioIcon, RadioIndicator } from '@/components/ui/radio';
import { Slider, SliderFilledTrack, SliderThumb, SliderTrack } from '@/components/ui/slider';
import { Switch } from '@/components/ui/switch';
import { Text } from '@/components/ui/text';
import { VStack } from '@/components/ui/vstack';

type ClusterType = 'managed' | 'bare_metal';

export default function Tab4() {
	const [clusterType, setClusterType] = useState<ClusterType>('managed');
	const [gpuCount, setGpuCount] = useState<number>(4);
	const [useSpotInstances, setUseSpotInstances] = useState<boolean>(true);
	const [agreed, setAgreed] = useState<boolean>(false);
	const [budget, setBudget] = useState<number>(50);

	const TEXT = {
		heading: 'text-typography-900',
		label: 'text-typography-900 font-semibold',
		body: 'text-typography-600',
		muted: 'text-typography-500',
		faint: 'text-typography-400',
	} as const;

	const clampGpu = (value: number) => Math.max(1, Math.min(32, value));

	return (
		<Box className="flex-1 bg-background-0">
			<ScrollView className="flex-1" contentContainerStyle={{ padding: 20 }}>
				<VStack space="2xl" className="max-w-[700px] w-full self-center">
					{/* Header */}
					<VStack space="xs">
						<Heading size="2xl" className={TEXT.heading}>
							Deploy AI Cluster
						</Heading>
						<Text className={TEXT.muted}>Configure your GPU resources for training models.</Text>
					</VStack>

					{/* Cluster Type Selection */}
					<VStack space="md">
						<Text className={TEXT.label}>Infrastructure Type</Text>
						<RadioGroup value={clusterType} onChange={(v) => setClusterType(v as ClusterType)}>
							<VStack space="md">
								<Pressable onPress={() => setClusterType('managed')}>
									<Radio
										value="managed"
										className={`w-full p-4 rounded-xl border ${
											clusterType === 'managed' ? 'border-primary-500 bg-secondary-0' : 'border-outline-200 bg-background-0'
										}`}>
										<HStack className="items-start justify-between">
											<VStack space="xs" className="flex-1 pr-4">
												<Text className={TEXT.label}>Managed Kubernetes</Text>
												<Text className={`${TEXT.body} leading-relaxed`}>
													Auto-scaling cluster with pre-installed ML drivers. Best for distributed training.
												</Text>
											</VStack>
											<RadioIndicator className="mt-1">
												<RadioIcon as={CircleIcon} />
											</RadioIndicator>
										</HStack>
									</Radio>
								</Pressable>

								<Pressable onPress={() => setClusterType('bare_metal')}>
									<Radio
										value="bare_metal"
										className={`w-full p-4 rounded-xl border ${
											clusterType === 'bare_metal' ? 'border-primary-500 bg-secondary-0' : 'border-outline-200 bg-background-0'
										}`}>
										<HStack className="items-start justify-between">
											<VStack space="xs" className="flex-1 pr-4">
												<Text className={TEXT.label}>Bare Metal VM</Text>
												<Text className={`${TEXT.body} leading-relaxed`}>
													Direct hardware access with minimal overhead. Ideal for latency-sensitive inference.
												</Text>
											</VStack>
											<RadioIndicator className="mt-1">
												<RadioIcon as={CircleIcon} />
											</RadioIndicator>
										</HStack>
									</Radio>
								</Pressable>
							</VStack>
						</RadioGroup>
					</VStack>

					<Divider className="my-2" />

					{/* GPU Resources */}
					<HStack className="items-center justify-between">
						<VStack space="xs" className="flex-1 pr-4">
							<Text className={TEXT.label}>GPU Accelerators</Text>
							<Text className={TEXT.muted}>H100 Tensor Core units.</Text>
						</VStack>

						<Box className="flex-row items-center border border-outline-200 rounded-xl overflow-hidden bg-background-0">
							<Button
								variant="link"
								action="secondary"
								className="h-10 w-12 items-center justify-center rounded-none"
								onPress={() => setGpuCount((c) => clampGpu(c - 1))}>
								<ButtonIcon as={RemoveIcon} className="text-typography-600" />
							</Button>
							<Divider orientation="vertical" />
							<Box className="px-5 py-2 min-w-[64px] items-center justify-center">
								<Text className={TEXT.label}>{gpuCount}</Text>
							</Box>
							<Divider orientation="vertical" />
							<Button
								variant="link"
								action="secondary"
								className="h-10 w-12 items-center justify-center rounded-none"
								onPress={() => setGpuCount((c) => clampGpu(c + 1))}>
								<ButtonIcon as={AddIcon} className="text-typography-600" />
							</Button>
						</Box>
					</HStack>

					<Divider className="my-2" />

					{/* Spot Instances */}
					<HStack className="items-center justify-between">
						<VStack space="xs" className="flex-1 pr-4">
							<Text className={TEXT.label}>Use Spot Instances</Text>
							<Text className={TEXT.muted}>Save up to 90% cost with preemptible capacity.</Text>
						</VStack>
						<Switch value={useSpotInstances} onValueChange={setUseSpotInstances} size="md" />
					</HStack>

					<Divider className="my-2" />

					{/* Budget Slider */}
					<VStack space="sm">
						<HStack className="justify-between items-center">
							<VStack space="xs">
								<Text className={TEXT.label}>Hourly Budget</Text>
								<Text className={TEXT.muted}>Set cost limits $10-500/hr.</Text>
							</VStack>
							<Text className={`${TEXT.label} text-primary-600`}>${budget}/hr</Text>
						</HStack>

						<Slider minValue={10} maxValue={500} step={10} value={budget} onChange={(v) => setBudget(v)} size="md" className="mt-2">
							<SliderTrack>
								<SliderFilledTrack />
							</SliderTrack>
							<SliderThumb />
							<SliderThumb />
						</Slider>

						<HStack className="justify-between">
							<Text className={TEXT.faint}>$10</Text>
							<Text className={TEXT.faint}>$500</Text>
						</HStack>
					</VStack>

					<Divider className="my-2" />

					{/* Agreement */}
					<Checkbox
						value="agree"
						isChecked={agreed}
						onChange={(v) => setAgreed(Boolean(v))}
						size="md"
						className="items-center w-full border border-outline-200 rounded-xl p-4 bg-background-0">
						<CheckboxIndicator>
							<CheckboxIcon as={CheckIcon} />
						</CheckboxIndicator>
						<CheckboxLabel className={`${TEXT.label} ml-2`}>I accept the Acceptable Use Policy (AUP)</CheckboxLabel>
					</Checkbox>

					{/* Submit */}
					<Button action="primary" className="mt-4 h-12 rounded-xl" isDisabled={!agreed}>
						<ButtonText className="font-semibold text-lg">Deploy Cluster</ButtonText>
					</Button>
				</VStack>
			</ScrollView>
		</Box>
	);
}
