'use client';
import React from 'react';
import { LinearGradient as ExpoLinearGradient } from 'expo-linear-gradient';

import { tva } from '@gluestack-ui/utils/nativewind-utils';
import { cssInterop } from 'nativewind';

cssInterop(ExpoLinearGradient, {
	className: 'style',
});

const linearGradientStyle = tva({
	base: '',
});

const LinearGradient = React.forwardRef<React.ComponentRef<typeof ExpoLinearGradient>, React.ComponentProps<typeof ExpoLinearGradient>>(
	({ className, ...props }, ref) => {
		return <ExpoLinearGradient {...props} className={linearGradientStyle({ class: className })} ref={ref} />;
	}
);

LinearGradient.displayName = 'LinearGradient';

export { LinearGradient };
