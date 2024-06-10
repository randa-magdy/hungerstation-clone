import { ThemedText } from '@/components/UI/ThemedText';
import { Colors } from '@/constants/Colors';
import { StyleSheet, View } from 'react-native';
import { TitleDescriptionProps } from '../types';

export default function TitleAndDescription({ title, description }: TitleDescriptionProps) {
  return (
    <View style={styles.container}>
      <ThemedText type="subtitle" style={styles.title}>
        {title}
      </ThemedText>
      <ThemedText type="default" style={styles.description}>
        {description}
      </ThemedText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 2,
  },
  title: {
    color: Colors.light.darkBrownText,
  },
  description: {
    color: Colors.light.vanillaLatteText,
    fontWeight: '600',
  },
});
