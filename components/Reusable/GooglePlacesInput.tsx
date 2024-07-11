import { Colors } from '@/constants/Colors';
import { useUIAction } from '@/contexts/ui.context';
import { Ionicons } from '@expo/vector-icons';
import { Pressable, StyleSheet, View } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
const GooglePlacesInput = () => {
  const { closeModal } = useUIAction();
  return (
    <View style={styles.container}>
      <Pressable onPress={closeModal}>
        <Ionicons name="arrow-back-outline" size={24} color={Colors.light.darkBrownText} />
      </Pressable>
      <GooglePlacesAutocomplete
        placeholder="Search"
        minLength={2} // minimum length of text to search
        // autoFocus={false}
        // returnKeyType={'search'}
        listViewDisplayed={false}
        fetchDetails={true}
        onPress={(data, details = null) => {
          // 'details' is provided when fetchDetails = true
          console.log(data, details);
        }}
        query={{
          key: 'AIzaSyAOVYRIgupAurZup5y1PRh8Ismb1A3lLao',
          language: 'en',
        }}
        styles={{
          textInputContainer: {
            width: '100%',
          },
          description: {
            fontWeight: 'bold',
          },
          predefinedPlacesDescription: {
            color: '#1faadb',
          },
          textInput: {
            fontSize: 20,
            marginStart: 20,
          },
        }}
        nearbyPlacesAPI="GooglePlacesSearch"
        debounce={200}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    position: 'absolute',
    top: 0,
    zIndex: 1,
    width: '100%',
    height: 50,
    borderBottomWidth: 1,
    borderBottomColor: Colors.light.lightGrayBorder,
    elevation: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 1,
    shadowRadius: 3,
    paddingHorizontal: 15,
    paddingVertical: 2,
  },
});

export default GooglePlacesInput;
