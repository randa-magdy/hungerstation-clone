import { Image, StyleSheet, View } from 'react-native';
import { StyleType } from '../types';

export default function Hplus({ style }: { style?: StyleType }) {
  return (
    <View style={[styles.container, style]}>
      <Image source={require('@/assets/images/hplus.jpg')} style={styles.image} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 50,
    height: 15,
  },
  image: {
    width: '100%',
    height: '100%',
  },
});
