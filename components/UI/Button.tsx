import { Colors } from '@/constants/Colors';
import React from 'react';
import { Pressable, StyleProp, StyleSheet, Text, TextStyle, View } from 'react-native';

type ButtonProps = {
  title: string | React.ReactElement;
  variant?: 'normal' | 'custom' | 'outline';
  block?: boolean;
  size?: 'big' | 'medium' | 'small';
  disabled?: boolean;
  disabledOutline?: boolean;
  color?: string;
  handlePress: () => void;
};

export default function Button({
  title,
  variant = 'normal',
  block = false,
  size = 'medium',
  disabled = false,
  disabledOutline = false,
  handlePress,
}: ButtonProps) {
  const buttonStyle = [
    styles.root,
    variant === 'normal' && styles.normal,
    variant === 'custom' && styles.custom,
    variant === 'outline' && styles.outline,
    block && styles.block,
    disabled && styles.disabled,
    disabledOutline && styles.disabledOutline,
    size === 'big' && styles.big,
    size === 'medium' && styles.medium,
    size === 'small' && styles.small,
  ].filter(Boolean);

  const textStyle = [
    styles.text,
    disabled && styles.disabledText,
    size === 'big' && styles.textBig,
    size === 'small' && styles.textSmall,
  ].filter(Boolean) as StyleProp<TextStyle>;

  return (
    <Pressable disabled={disabled || disabledOutline} onPress={handlePress}>
      <View style={buttonStyle}>
        <Text style={textStyle}>{title}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
    fontWeight: '600',
    borderRadius: 5,
    marginVertical: 10,
  },
  normal: {
    backgroundColor: Colors.light.darkYellowBackground,
    borderWidth: 1,
    borderColor: 'transparent',
  },
  custom: {
    borderWidth: 1,
    borderColor: 'transparent',
  },
  outline: {
    borderWidth: 1,
    borderColor: Colors.light.darkYellowBackground,
    backgroundColor: 'transparent',
  },
  disabled: {
    borderWidth: 1,
    borderColor: '#e5e7eb',
    backgroundColor: '#d1d5db',
  },
  disabledOutline: {
    borderWidth: 1,
    borderColor: '#e5e7eb',
    backgroundColor: 'transparent',
  },
  block: {
    width: '100%',
  },
  small: {
    paddingHorizontal: 8,
    height: 36,
  },
  medium: {
    paddingHorizontal: 20,
    height: 48,
  },
  big: {
    paddingHorizontal: 40,
    height: 56,
  },
  text: {
    color: Colors.light.darkBrownText,
    fontWeight: '600',
    fontSize: 16,
  },
  textBig: { fontSize: 18 },
  textSmall: { fontSize: 14 },
  disabledText: {
    color: '#9ca3af',
  },
});
