import { Colors } from '@/constants/Colors';
import { Image, ImageSourcePropType, StyleSheet, View } from 'react-native';
import { StyleType } from '../types';

export default function BusinessLogo({
  logo,
  style,
}: {
  logo: ImageSourcePropType;
  style?: StyleType;
}) {
  return (
    <View style={[styles.logoContainer, style]}>
      <Image source={logo} style={styles.logo} />
    </View>
  );
}

const styles = StyleSheet.create({
  logoContainer: {
    width: 60,
    height: 60,
    borderRadius: 7,
    backgroundColor: Colors.light.whiteBackground,
    padding: 0,
  },
  logo: {
    width: '100%',
    height: '100%',
    borderRadius: 7,
  },
});
