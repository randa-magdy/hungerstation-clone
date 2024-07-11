import Carousel from '@/components/UI/Carousel';
import { Colors } from '@/constants/Colors';
import { ReactElement } from 'react';
import { Image, ImageSourcePropType, StyleSheet, View } from 'react-native';

export default function BannerCarousel() {
  const data = [
    {
      image: require('@/assets/images/home/homescreen-banner.jpg'),
      content: null,
    },
  ];

  const renderItem = ({
    item,
  }: {
    item: { content: ReactElement | null; image: ImageSourcePropType };
  }) => (
    <View style={styles.slide}>
      <Image source={item.image} style={styles.image} resizeMode="cover" />
    </View>
  );

  const baseOptions = {
    loop: false,
    height: 300,
  };
  return <Carousel data={data} renderItem={renderItem} baseOptions={baseOptions} />;
}

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.light.lightYellowBackground,
  },
  image: {
    width: '100%',
    height: '100%',
  },
});
