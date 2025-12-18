# React Native/Expo Project

You're an expert in TypeScript, React Native, Expo, and Mobile UI development.

## Code Style and Structure

- Write concise, technical TypeScript code with accurate examples
- Use functional and declarative programming patterns; avoid classes
- Prefer iteration and modularization over code duplication
- Use descriptive variable names with auxiliary verbs (e.g., isLoading, hasError)
- Ensure components are modular, reusable, compossible and maintainable
- Component Modularity: Break down components into smaller, reusable pieces. Keep components focused on a single responsibility

## Tools

Default to using bun instead npm.

- Use `bun expo install <package-name>` for installing expo-compatible packages
- Use `bun run <script>` instead of npm/yarn run
- Use `bun run tsc` for type checking
- Use `bun run test` to run jest --watch

## Tech Stack

### Core

- Expo SDK 54
- React 19.1 / React Native 0.81 (New Architecture enabled, React Compiler enabled)
- Expo Router v6 (file-based routing with typed routes)
- Nativewind with gluestack-ui v3

### Styling

- Light/Dark theme support with adaptive themes

### UI Components

Use gluestack-ui v3 components. Below are all the components avaliable:

- accordion
- actionsheet
- alert
- alert-dialog
- avatar
- badge
- bottomsheet
- box
- button
- card
- center
- checkbox
- divider
- drawer
- fab
- flat-list
- form-control
- gluestack-ui-provider
- grid
- heading
- hstack
- icon
- image
- image-background
- input
- input-accessory-view
- keyboard-avoiding-view
- link
- menu
- modal
- popover
- portal
- pressable
- progress
- radio
- refresh-control
- safe-area-view
- scroll-view
- section-list
- select
- skeleton
- slider
- spinner
- status-bar
- switch
- table
- text
- textarea
- toast
- tooltip
- view
- virtualized-list
- vstack

Import them from components for example: `import { VStack } from '@/components/ui/vstack';`

## Naming Conventions

- Use kebab-case for all files eg. `use-storage`
- Use `@/` for importing internal files
- Favor named exports for components and utilities

## TypeScript Usage

- Avoid enums; use const objects with 'as const' assertion
- Use functional components with TypeScript types
- Avoid try/catch blocks unless there's good reason to translate or handle error in that abstraction

### Storage & Data

- react-native-mmkv (persistent storage)
- jotai (state management)
- neverthrow (Result-based error handling)

## State Management

- Use jotai for global/shared state management
- Use atomWithMMKV for persisted state
- Keep atoms small and focused on a single piece of state
- Derive computed state using derived atoms
- Implement proper cleanup in useEffect hooks

### Animations & Gestures

- Use moti for declarative animations
- Use react-native-reanimated v4 for complex/custom animations
- Use react-native-gesture-handler v2 for gesture-based interactions

## Error Handling

- Use neverthrow Result types for operations that can fail (API calls, parsing, etc.)
- Prefer Result pattern over try/catch for explicit error handling
- Log errors appropriately for debugging (use console.error())
- Provide user-friendly error messages (use Alert)
- Use ErrorBoundary components for UI error recovery

## Environment Variables

- Use EXPO*PUBLIC*\* prefix for client-side environment variables
- Access via process.env.EXPO*PUBLIC*\*\*

## Performance Best Practices

React Compiler is enabled and automatically handles memoization. You generally **don't need** manual `useMemo`, `useCallback`, or `React.memo` for preventing re-renders, but you may still use `useCallback` for passing stable references to child components or dependencies.
