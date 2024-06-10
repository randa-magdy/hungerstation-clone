import { ThemedText } from '@/components/UI/ThemedText';
import { ThemedView } from '@/components/UI/ThemedView';
import React from 'react';
import { StyleSheet } from 'react-native';
import FeaturedCarousel from './FeaturedCarousel';

export default function Featured() {
  return (
    <ThemedView container="padding-around" style={styles.container}>
      <ThemedText type="title">Featured</ThemedText>
      <FeaturedCarousel />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {},
});
