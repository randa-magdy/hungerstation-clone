import { View, type ViewProps } from 'react-native';

import { useThemeColor } from '@/hooks/useThemeColor';

export type ThemedViewProps = ViewProps & {
  lightColor?: string;
  darkColor?: string;
  container?: 'full-width' | 'padding-around';
};

export function ThemedView({
  style,
  container = 'full-width',
  lightColor,
  darkColor,
  ...otherProps
}: ThemedViewProps) {
  const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, 'background');

  return (
    <View
      style={[{ backgroundColor, padding: container === 'padding-around' ? 15 : 0 }, style]}
      {...otherProps}
    />
  );
}
