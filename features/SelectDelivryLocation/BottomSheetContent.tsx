import Button from '@/components/UI/Button';
import Input from '@/components/UI/Input';
import { ThemedText } from '@/components/UI/ThemedText';
import { Colors } from '@/constants/Colors';
import { router } from 'expo-router';
import { Dispatch, SetStateAction, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import { AddressType } from '.';

export default function BottomSheetContent({
  confirmed,
  setConfirm,
  address,
}: {
  confirmed: boolean;
  setConfirm: Dispatch<SetStateAction<boolean>>;
  address: AddressType;
}) {
  const height = useSharedValue(0);
  const opacity = useSharedValue(0);

  //  `${address.street} ${address.region} ${address.city} ${address.country}`;

  useEffect(() => {
    height.value = withTiming(confirmed ? 120 : 0, { duration: 300 });
    opacity.value = withTiming(confirmed ? 1 : 0, { duration: 300 });
  }, [confirmed, height, opacity]);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      height: height.value,
      opacity: opacity.value,
    };
  });

  const handleSubmit = () => {
    if (!confirmed) {
      setConfirm(true);
    } else {
      router.push('/');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.addressDetails}>
        <ThemedText type="small" style={styles.title}>
          Delivery Location
        </ThemedText>
        <ThemedText type="normal" style={styles.shortAddress}>
          {address.district}
        </ThemedText>
        <ThemedText type="normal" style={styles.address}>
          {address.formattedAddress}
        </ThemedText>
      </View>
      <Animated.View style={animatedStyle}>
        <View style={styles.border} />
        <View style={styles.addressDetails}>
          <ThemedText type="defaultSemiBold" style={styles.shortAddress}>
            Address Details
          </ThemedText>
          <ThemedText style={styles.note} type="small">
            Your address details will be given to rider.
          </ThemedText>
          <Input
            config={{
              placeholder: 'Ex: villa - apartment number',
              onChangeText: (v: any) => console.log(v),
            }}
          />
        </View>
      </Animated.View>

      <Button
        title={confirmed ? 'Save & Continue' : 'Confirm Location'}
        handlePress={handleSubmit}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 10,
  },
  title: {
    color: Colors.light.vanillaLatteText,
  },
  shortAddress: {
    fontWeight: 'bold',
    color: Colors.light.darkBrownText,
    marginVertical: 5,
    textAlign: 'left',
  },
  address: {
    textAlign: 'left',
    color: Colors.light.darkBrownText,
  },
  border: {
    borderTopWidth: 1,
    borderTopColor: Colors.light.darkGrayBorder,
  },
  addressDetails: {
    paddingVertical: 10,
  },
  note: {
    color: Colors.light.vanillaLatteText,
    paddingBottom: 7,
  },
});
