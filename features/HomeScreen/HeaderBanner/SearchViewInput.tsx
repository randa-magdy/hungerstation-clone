import { Colors } from '@/constants/Colors';
import { Octicons } from '@expo/vector-icons';
import { StyleSheet, Text, View } from 'react-native';

export default function SearchViewInput() {
  return (
    <View style={styles.container}>
      <View style={styles.inputViewContainer}>
        <Octicons name="search" size={25} color={Colors.light.brownText} />
        <Text style={styles.placeHolder}>Search for a restaurant or store</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: '27%',
    zIndex: 1,
    alignSelf: 'center',
    width: '95%',
  },
  inputViewContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderLeftColor: '#ccc',
    borderTopColor: '#ccc',
    borderRightColor: '#ccc',
    borderWidth: 1,
    borderBottomColor: Colors.light.darkYellowBackground,
    borderBottomWidth: 3,
    borderRadius: 5,
    paddingVertical: 8,
    paddingHorizontal: 15,
  },
  placeHolder: {
    color: Colors.placeHolder,
    paddingLeft: 20,
    fontSize: 18,
  },
});
