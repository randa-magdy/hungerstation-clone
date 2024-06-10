import ImageTitleBlockCard, {
  ImageTitleBlockCardProps,
} from '@/components/Reusable/Cards/ImageTitleBlockCard';
import React from 'react';
import { Dimensions } from 'react-native';

export default function DailyOffersCard({
  title,
  image,
}: Pick<ImageTitleBlockCardProps, 'title' | 'image'>) {
  return (
    <ImageTitleBlockCard
      title={title}
      image={image}
      titlePosition="top"
      backgroundColor="white"
      cardSize={{ width: Dimensions.get('screen').width / 4, height: 100 }}
      imageSize={{ height: 50 }}
    />
  );
}
