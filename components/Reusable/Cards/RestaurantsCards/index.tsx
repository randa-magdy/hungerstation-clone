import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

export default function RestaurantsCards() {
  return (
    <View style={styles.card}>
      <View style={styles.imageContainer}>
        <Image source={require('')} style={styles.image} />
        <View style={styles.overlayContent}></View>
      </View>
      <View style={styles.details}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {},
  imageContainer: {},
  image: {},
  overlayContent: {},
  details: {},
});
