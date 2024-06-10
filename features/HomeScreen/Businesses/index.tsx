import { ThemedText } from '@/components/UI/ThemedText';
import { ThemedView } from '@/components/UI/ThemedView';
import { Colors } from '@/constants/Colors';
import React from 'react';
import { StyleSheet } from 'react-native';
import BusinessesCards from './BusinessesCards';

export default function Businesses() {
  return (
    <ThemedView container="padding-around">
      <ThemedText type="normal" style={styles.sectionTitle}>
        What would you like to get today ?
      </ThemedText>
      <BusinessesCards />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  sectionTitle: { marginBottom: 20, color: Colors.light.darkBrownText, fontWeight: 500 },
});
