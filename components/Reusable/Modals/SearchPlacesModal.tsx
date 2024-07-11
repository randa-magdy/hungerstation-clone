import { StyleSheet, View } from 'react-native';
import GooglePlacesInput from '../GooglePlacesInput';

export default function SearchPlacesModal() {
  // { modalVisible, setModalVisible }
  return (
    <View style={styles.container}>
      <View style={styles.searchInput}>
        <GooglePlacesInput />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
  searchInput: {},
});
