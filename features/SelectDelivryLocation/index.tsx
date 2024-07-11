import BottomSheet from '@/components/UI/BottomSheet';
import MapViewScreen from '@/components/UI/MapView';
import SearchViewInput from '@/components/UI/SearchViewInput';
import { ThemedView } from '@/components/UI/ThemedView';
import { useUIAction } from '@/contexts/ui.context';
import { useEffect, useState } from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import BottomSheetContent from './BottomSheetContent';

export type AddressType = { district: string | null; formattedAddress: string | null };
export default function SelectDelivryLocation() {
  const [address, setAddress] = useState<AddressType>({
    district: '',
    formattedAddress: '',
  });
  const [confirmed, setConfirm] = useState<boolean>(false);
  const { openModal } = useUIAction();
  const opacity = useSharedValue(1);

  useEffect(() => {
    opacity.value = withTiming(confirmed ? 0 : 1, {
      duration: 300,
    });
  }, [confirmed, opacity]);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      opacity: opacity.value,
      height: opacity.value === 0 ? 0 : 'auto',
    };
  });

  return (
    <ThemedView style={styles.container}>
      <Animated.View style={[styles.searchInput, animatedStyle]}>
        <Pressable onPress={() => openModal('SEARCH_PLACES')}>
          <SearchViewInput placeHolder="Search a place" />
        </Pressable>
      </Animated.View>
      <View style={styles.container}>
        <MapViewScreen setAddress={setAddress} confirmed={confirmed} />
        <BottomSheet isOpen={true}>
          <BottomSheetContent confirmed={confirmed} setConfirm={setConfirm} address={address} />
        </BottomSheet>
      </View>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
  },
  searchInput: {
    position: 'absolute',
    zIndex: 1,
    top: '3%',
    alignSelf: 'center',
    width: '95%',
  },
});
