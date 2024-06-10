import { ThemedText } from '@/components/UI/ThemedText';
import { Colors } from '@/constants/Colors';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { StyleSheet, View } from 'react-native';

export default function FreeDeliveryBadge({ freeDeliveryValue }: { freeDeliveryValue: number }) {
  return (
    <View style={styles.badgeContainer}>
      <MaterialCommunityIcons
        name="sale"
        size={18}
        color={Colors.light.blueText}
        style={styles.icon}
      />
      <ThemedText type="default" style={styles.text}>
        Free delivery (Spend {freeDeliveryValue} SAR)
      </ThemedText>
    </View>
  );
}

const styles = StyleSheet.create({
  badgeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 2,
    backgroundColor: Colors.light.babyblueBackground,
    alignSelf: 'flex-start',
    padding: 5,
  },
  icon: { marginRight: 10 },
  text: { fontWeight: 'bold', color: Colors.light.blueText },
});
