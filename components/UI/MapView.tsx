import { Colors } from '@/constants/Colors';
import { AddressType } from '@/features/SelectDelivryLocation';
import { MaterialIcons } from '@expo/vector-icons';
import * as Location from 'expo-location';
import { useNavigation } from 'expo-router';
import { Dispatch, SetStateAction, useEffect, useLayoutEffect, useRef, useState } from 'react';
import { Alert, StyleSheet, Text, TouchableOpacity } from 'react-native';
import MapView, { LatLng, MapPressEvent, Marker } from 'react-native-maps';
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import { ThemedView } from './ThemedView';

type LocationType = {
  latitude: number;
  longitude: number;
  latitudeDelta: number;
  longitudeDelta: number;
};

const defaultLocation: LocationType = {
  latitude: 24.774265, // Default latitude (e.g., Riyadh , KSA)
  longitude: 46.738586, // Default longitude (e.g., Riyadh , KSA)
  latitudeDelta: 0.0922,
  longitudeDelta: 0.0421,
};

export default function MapViewScreen({
  pinColor,
  setAddress,
  confirmed,
}: {
  pinColor?: string;
  setAddress: Dispatch<SetStateAction<AddressType>>;
  confirmed: boolean;
}) {
  const navigation = useNavigation();
  const [location, setLocation] = useState<LocationType>(defaultLocation);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const mapRef = useRef<MapView | null>(null);
  const translateY = useSharedValue(0);

  const handleDetermineLocation = (e: MapPressEvent) => {
    const { coordinate } = e.nativeEvent;
    setLocation((prevLocation) => ({
      ...prevLocation,
      ...coordinate,
    }));
    fetchAddress(coordinate);
  };

  const handleDetermineCurrentLocation = async () => {
    try {
      const loc = await Location.getCurrentPositionAsync({
        accuracy: Location.Accuracy.Balanced,
        timeInterval: 5,
      });

      const currentLocation = {
        latitude: loc.coords.latitude,
        longitude: loc.coords.longitude,
        latitudeDelta: 0.005,
        longitudeDelta: 0.005,
      };

      setLocation(currentLocation);
      mapRef.current?.animateToRegion(currentLocation);
      fetchAddress(currentLocation);
    } catch (error: any) {
      Alert.alert('Error', error.message);
    }
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: 'Select a delivery Location',
      headerTitleStyle: {
        fontWeight: '600',
        fontSize: 20,
      },
    });
  }, [navigation]);

  useEffect(() => {
    (async () => {
      try {
        fetchAddress(location);
        const { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
          setErrorMsg('Permission to access location was denied');
          return;
        }

        handleDetermineCurrentLocation();
      } catch (error: any) {
        Alert.alert('Error', error.message);
        setErrorMsg('Error fetching location');
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [handleDetermineCurrentLocation]);

  useEffect(() => {
    translateY.value = withTiming(confirmed ? -100 : 0, { duration: 300 });
  }, [confirmed, translateY]);

  const compassButtonStyle = useAnimatedStyle(() => ({
    position: 'absolute',
    bottom: '35%',
    right: 0,
    transform: [{ translateY: translateY.value }],
  }));

  const fetchAddress = async (coordinate: LatLng) => {
    try {
      const [location] = await Location.reverseGeocodeAsync(coordinate);
      const addressLocation = {
        district: location.district,
        formattedAddress: location.formattedAddress,
      };
      if (addressLocation) {
        setAddress(addressLocation);
      }
    } catch (error: any) {
      console.error('Error fetching address:', error);
    }
  };

  return (
    <ThemedView style={styles.container}>
      <MapView
        ref={mapRef}
        style={styles.map}
        initialRegion={location}
        onPress={handleDetermineLocation}
        showsUserLocation={true}
        followsUserLocation={true}
        showsMyLocationButton={false}>
        {location && (
          <Marker
            coordinate={location}
            title="Your Location"
            pinColor={confirmed ? '#00a67d' : '#A52A2A2A'}
            draggable
            onDrag={handleDetermineLocation}
          />
        )}
      </MapView>
      {errorMsg ? <Text>{errorMsg}</Text> : null}
      <Animated.View style={compassButtonStyle}>
        <TouchableOpacity style={styles.compassButton} onPress={handleDetermineCurrentLocation}>
          <MaterialIcons name="my-location" size={25} color={Colors.light.darkBrownText} />
        </TouchableOpacity>
      </Animated.View>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  map: {
    width: '100%',
    height: '100%',
  },
  compassButton: {
    // position: 'absolute',
    zIndex: 9,
    bottom: '36%', // Adjust the top position as needed
    right: 10, // Adjust the right position as needed
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 3,
  },
});
