import { StyleType } from '@/components/Reusable/Cards/types';
import { Colors } from '@/constants/Colors';
import { Octicons } from '@expo/vector-icons';
import { StyleSheet, Text, View } from 'react-native';

export default function SearchViewInput({
  placeHolder,
  style,
}: {
  placeHolder: string;
  style?: StyleType;
}) {
  return (
    <View style={[styles.inputViewContainer, style]}>
      <Octicons name="search" size={20} color={Colors.light.brownText} />
      <Text style={styles.placeHolder}>{placeHolder}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  inputViewContainer: {
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderLeftColor: Colors.light.lightGrayBorder,
    borderTopColor: Colors.light.lightGrayBorder,
    borderRightColor: Colors.light.lightGrayBorder,
    borderBottomColor: Colors.light.lightGrayBorder,
    borderWidth: 1,
    paddingVertical: 7,
    paddingHorizontal: 15,
  },
  placeHolder: {
    color: Colors.placeHolder,
    paddingLeft: 20,
    fontSize: 16,
  },
});
