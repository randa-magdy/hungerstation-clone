import RoundedImageCard from '@/components/Reusable/Cards/RestaurantsCards/RoundedImageCard';
import { ImageCardProps } from '@/components/Reusable/Cards/types';
import Carousel from '@/components/UI/Carousel';
import { Colors } from '@/constants/Colors';
import { Dimensions, StyleSheet, View } from 'react-native';

const data: ImageCardProps[] = [
  {
    logo: require('@/assets/images/businesses/logos/marble.webp'),
    image: require('@/assets/images/businesses/banars/marble.webp'),
    rating: { value: '4.5', count: '100' },
    title: 'Marble Slab Creamery',
    description: 'Desserts - Ice Cream',
    deliveryTime: { interval: '15 - 25', unit: 'mins', color: Colors.light.darkBrownText },
    freeDelivery: { isFree: true, value: 15 },
    isHplus: true,
  },
  {
    logo: require('@/assets/images/businesses/logos/shawayet-alkhaleej.webp'),
    image: require('@/assets/images/businesses/banars/shawayet-alkhaleej.webp'),
    rating: { value: '4.5', count: '100' },
    title: 'Shawayet Alkhaleej',
    description: 'Grill - Arabic',
    deliveryTime: { interval: '15 - 25', unit: 'mins', color: Colors.light.darkBrownText },
    freeDelivery: { isFree: true, value: 15 },
    isHplus: true,
  },
];

const baseOptions = {
  vertical: false,
  width: Dimensions.get('screen').width * 0.7,
  height: 300,
  style: {
    width: Dimensions.get('screen').width,
  },
};
export default function FeaturedCarousel() {
  const renderItem = ({ item }: { item: ImageCardProps }) => (
    <View style={styles.slide}>
      <RoundedImageCard cardData={item} />
    </View>
  );

  return <Carousel data={data} renderItem={renderItem} baseOptions={baseOptions} />;
}

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    marginLeft: '2.5%',
  },
});
