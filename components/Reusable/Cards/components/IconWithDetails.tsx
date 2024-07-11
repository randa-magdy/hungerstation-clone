import { ThemedText } from '@/components/UI/ThemedText';
import { Colors } from '@/constants/Colors';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { StyleType } from '../types';

export default function IconWithDetails({
  icon,
  boldText,
  thinText,
  color,
  style,
}: {
  icon: { component: React.ComponentType<any>; name: string; color: string };
  boldText: string;
  thinText: string;
  color?: string;
  style?: StyleType;
}) {
  const Icon = icon.component;
  return (
    <View style={[styles.container, style]}>
      <Icon name={icon.name} size={16} color={icon.color} style={styles.icon} />
      <ThemedText type="default" style={[styles.text, styles.boldText, { color }]}>
        {boldText}
      </ThemedText>
      <ThemedText type="default" style={[styles.text, { color }]}>
        {thinText}
      </ThemedText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignSelf: 'flex-start',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 2,
    paddingVertical: 2,
  },
  icon: { paddingRight: 2 },
  boldText: { fontWeight: 'bold' },
  text: { color: Colors.light.vanillaLatteText, marginHorizontal: 2 },
});
