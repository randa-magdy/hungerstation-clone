import { ThemedText } from '@/components/UI/ThemedText';
import { Colors } from '@/constants/Colors';
import { StyleSheet, View } from 'react-native';

export default function AdBadge({ isBadge }: { isBadge: boolean }) {
  return (
    <View style={[styles.adContainer, isBadge ? styles.adWhite : styles.adTransparent]}>
      <ThemedText
        type="default"
        style={[
          styles.adText,
          { color: isBadge ? Colors.light.darkBrownText : Colors.light.lightGrayText },
        ]}>
        Ad
      </ThemedText>
    </View>
  );
}

const styles = StyleSheet.create({
  adContainer: {
    borderRadius: 7,
    paddingHorizontal: 5,
    paddingVertical: 3,
    width: 30,
  },
  adTransparent: {
    borderColor: Colors.light.lightGrayBorder,
    borderWidth: 1,
  },
  adWhite: {
    borderWidth: 0,
    backgroundColor: Colors.light.transparentWhiteBackground,
  },
  adText: {
    textAlign: 'center',
  },
});
