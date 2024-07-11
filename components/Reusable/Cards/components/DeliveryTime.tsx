import { Colors } from '@/constants/Colors';
import { FontAwesome } from '@expo/vector-icons';
import { StyleSheet } from 'react-native';
import { DeliveryTimeProps, StyleType } from '../types';
import IconWithDetails from './IconWithDetails';

export default function DeliveryTime({
  deliveryTime,
  style,
}: {
  deliveryTime: DeliveryTimeProps;
  style?: StyleType;
}) {
  const { interval, unit, color } = deliveryTime;
  return (
    <IconWithDetails
      icon={{
        component: FontAwesome,
        name: 'clock-o',
        color: color || Colors.light.vanillaLatteText,
      }}
      boldText={interval}
      thinText={unit}
      color={color || Colors.light.vanillaLatteText}
      style={[styles.deliveryTime, style]}
    />
  );
}

const styles = StyleSheet.create({
  deliveryTime: {},
});
