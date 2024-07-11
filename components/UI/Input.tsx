import { Colors } from '@/constants/Colors';
import { useState } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import { ThemedText } from './ThemedText';

export default function Input({ label, config }: { label?: string; config: object }) {
  const [inputFocus, setInputFocus] = useState<boolean>(false);
  return (
    <View>
      {label && <ThemedText style={styles.label}>{label}</ThemedText>}
      <TextInput
        style={[
          styles.input,
          { borderColor: inputFocus ? Colors.light.darkYellowBorder : Colors.light.darkGrayBorder },
        ]}
        onBlur={() => setInputFocus(false)}
        onFocus={() => setInputFocus(true)}
        {...config}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  label: {
    color: Colors.light.darkGrayText,
  },
  input: {
    borderWidth: 1.5,
    borderRadius: 10,
    paddingHorizontal: 15,
    height: 45,
  },
});
