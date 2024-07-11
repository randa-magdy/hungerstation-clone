import RedirectToMapScreen from '@/components/Reusable/RedirectToMapScreen';
import { Colors } from '@/constants/Colors';
import { Entypo, MaterialIcons, Octicons } from '@expo/vector-icons';
import { StyleSheet, Text, View } from 'react-native';
import Animated, { interpolate, SharedValue, useAnimatedStyle } from 'react-native-reanimated';

export default function SelectLocation({ scrollOffset }: { scrollOffset?: SharedValue<number> }) {
  const searchAnimatedStyle = useAnimatedStyle(() => {
    return {
      opacity: interpolate(scrollOffset?.value || 0, [0, 90, 120, 150], [0, 0.6, 0.9, 1]),
    };
  });

  return (
    <View style={styles.container}>
      <RedirectToMapScreen style={styles.locationContainer}>
        <View style={styles.iconContainer}>
          <MaterialIcons name="location-pin" size={25} color="#0fa051" />
        </View>
        <View style={styles.locationLabelSelect}>
          <Text style={[styles.locationText, styles.locationLabel]}>Ibn Khaldun</Text>
          <View style={styles.locationSelectContainer}>
            <Text style={styles.locationText}>Select your location</Text>
            <Entypo name="chevron-small-down" size={24} color={Colors.light.darkBrownText} />
          </View>
        </View>
      </RedirectToMapScreen>
      <Animated.View style={searchAnimatedStyle}>
        <Octicons name="search" size={25} color={Colors.light.brownText} />
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 80,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 25,
    marginBottom: 10,
    paddingHorizontal: 15,
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconContainer: {
    backgroundColor: Colors.light.whiteBackground,
    borderRadius: 100,
    padding: 2,
  },
  locationLabelSelect: { paddingHorizontal: 5 },
  locationText: { color: Colors.light.darkBrownText },
  locationLabel: { fontWeight: 'bold' },
  locationSelectContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
