import { Colors } from '@/constants/Colors';
import { Fontisto } from '@expo/vector-icons';
import { StyleSheet } from 'react-native';
import { RatingProps, StyleType } from '../types';
import IconWithDetails from './IconWithDetails';

export default function Rating({ rating, style }: { rating: RatingProps; style?: StyleType }) {
  const { value, count } = rating;
  return (
    <IconWithDetails
      icon={{ component: Fontisto, name: 'star', color: Colors.light.darkYellowBackground }}
      boldText={value}
      thinText={`(${count})`}
      style={[styles.rating, style]}
    />
  );
}

const styles = StyleSheet.create({
  rating: {
    backgroundColor: Colors.light.whiteBackground,
    borderRadius: 5,
  },
});
