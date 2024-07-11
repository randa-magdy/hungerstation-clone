import { StyleSheet, Text, type TextProps } from 'react-native';

import { Colors } from '@/constants/Colors';
import { useThemeColor } from '@/hooks/useThemeColor';

export type ThemedTextProps = TextProps & {
  lightColor?: string;
  darkColor?: string;
  type?:
    | 'default'
    | 'normal'
    | 'title'
    | 'defaultSemiBold'
    | 'subtitle'
    | 'link'
    | 'big'
    | 'medium'
    | 'small';
};

export function ThemedText({
  style,
  lightColor,
  darkColor,
  type = 'default',
  ...rest
}: ThemedTextProps) {
  const color = useThemeColor({ light: lightColor, dark: darkColor }, 'text');

  return (
    <Text
      style={[
        { color },
        type === 'default' ? styles.default : undefined,
        type === 'title' ? styles.title : undefined,
        type === 'defaultSemiBold' ? styles.defaultSemiBold : undefined,
        type === 'normal' ? styles.normal : undefined,
        type === 'big' ? styles.big : undefined,
        type === 'subtitle' ? styles.subtitle : undefined,
        type === 'medium' ? styles.medium : undefined,
        type === 'small' ? styles.small : undefined,
        type === 'link' ? styles.link : undefined,
        style,
      ]}
      {...rest}
    />
  );
}

const styles = StyleSheet.create({
  default: {
    fontSize: 14,
  },
  defaultSemiBold: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  big: {
    fontSize: 18,
  },
  normal: {
    fontSize: 16,
  },
  medium: {
    fontSize: 13,
  },
  small: {
    fontSize: 12,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    color: Colors.light.darkBrownText,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color: Colors.light.darkBrownText,
  },
  link: {
    fontSize: 16,
    color: '#0a7ea4',
  },
});
