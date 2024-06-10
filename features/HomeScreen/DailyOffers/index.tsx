import { ThemedText } from '@/components/UI/ThemedText';
import { ThemedView } from '@/components/UI/ThemedView';
import { Colors } from '@/constants/Colors';
import React from 'react';
import { StyleSheet } from 'react-native';
import DailyOffersCarousel from './DailyOffersCarousel';

export default function DailyOffers() {
  return (
    <ThemedView container="padding-around" style={styles.container}>
      <ThemedText type="title">Daily Offers</ThemedText>
      <DailyOffersCarousel />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.light.lightGrayBackground,
  },
});
