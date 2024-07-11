import { Colors } from '@/constants/Colors';
import { Ionicons } from '@expo/vector-icons';
import { StyleType } from '../types';
import IconWithDetails from './IconWithDetails';

export default function LocationDistance({ style }: { style?: StyleType }) {
  return (
    <IconWithDetails
      icon={{
        component: Ionicons,
        name: 'location-sharp',
        color: Colors.light.vanillaLatteText,
      }}
      boldText="6.8"
      thinText="km"
      style={style}
    />
  );
}
