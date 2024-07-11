import { Colors } from '@/constants/Colors';
import React from 'react';
import { Image, ImageSourcePropType, StyleSheet, Text, View } from 'react-native';
import { ThemedText } from '../../UI/ThemedText';

export interface ImageTitleBlockCardProps {
  title: string;
  legendLabel?: string;
  image: ImageSourcePropType;
  titlePosition: 'top' | 'bottom';
  backgroundColor: 'gray' | 'white';
  cardSize?: { width?: number; height?: number };
  imageSize?: { width?: number; height?: number };
}

export default function ImageTitleBlockCard({
  title,
  legendLabel,
  image,
  titlePosition,
  backgroundColor,
  cardSize,
  imageSize,
}: ImageTitleBlockCardProps) {
  return (
    <View
      style={[
        styles.card,
        { width: cardSize?.width || 'auto', height: cardSize?.height || 'auto' },
      ]}>
      <View
        style={[
          styles.imageContainer,
          backgroundColor === 'gray' ? styles.grayCard : styles.whiteCard,
          { height: titlePosition === 'top' ? '100%' : 'auto' },
        ]}>
        {titlePosition === 'top' && (
          <ThemedText type="defaultSemiBold" style={styles.topTitle}>
            {title}
          </ThemedText>
        )}
        <Image
          source={image}
          style={[
            styles.image,
            { width: imageSize?.width || 'auto', height: imageSize?.height || 'auto' },
          ]}
        />
      </View>
      {legendLabel && (
        <View style={styles.legend}>
          <Text style={styles.legendLabel}>{legendLabel}</Text>
        </View>
      )}
      {titlePosition === 'bottom' && (
        <ThemedText type="medium" style={styles.bottomTitle}>
          {title}
        </ThemedText>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    marginBottom: 15,
    justifyContent: 'space-between',
  },
  imageContainer: { borderRadius: 10, justifyContent: 'flex-end', paddingTop: 10 },
  grayCard: { backgroundColor: '#f3f3f3' },
  whiteCard: {
    backgroundColor: '#fff',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 3,
  },
  topTitle: {
    color: Colors.light.darkBrownText,
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 5,
  },
  bottomTitle: { color: Colors.light.darkBrownText, textAlign: 'center', fontWeight: '500' },
  image: {
    objectFit: 'contain',
  },
  legend: {
    backgroundColor: Colors.light.darkYellowBackground,
    borderRadius: 2,
    width: 50,
    paddingVertical: 2,
    marginHorizontal: 'auto',
    marginTop: -7,
  },
  legendLabel: {
    color: Colors.light.brownText,
    fontWeight: 'bold',
    fontSize: 10,
    textAlign: 'center',
  },
});
