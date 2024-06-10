import Carousel from '@/components/UI/Carousel';
import { Dimensions, ImageSourcePropType, View } from 'react-native';
import DailyOffersCard from '../DailyOffers/DailyOffersCard';

const data = [
  { title: 'Delivery', image: require('@/assets/images/home/dailly-offer/delivery.png') },
  { title: 'Super Monday', image: require('@/assets/images/home/dailly-offer/super-monday.png') },
  { title: 'Super Saver', image: require('@/assets/images/home/dailly-offer/super-saver.png') },
  { title: 'Healthy', image: require('@/assets/images/home/dailly-offer/healthy.png') },
  {
    title: 'Trendy Restaurants',
    image: require('@/assets/images/home/dailly-offer/trendy-resturant.png'),
  },
  { title: 'New in App', image: require('@/assets/images/home/dailly-offer/new-app.png') },
  {
    title: 'Make a Difference',
    image: require('@/assets/images/home/dailly-offer/make-diff.png'),
  },
];

const baseOptions = {
  vertical: false,
  width: Dimensions.get('screen').width / 3,
  height: 130,
  style: {
    width: Dimensions.get('screen').width,
  },
};
export default function DailyOffersCarousel() {
  const renderItem = ({ item }: { item: { title: string; image: ImageSourcePropType } }) => (
    <View>
      <DailyOffersCard title={item.title} image={item.image} />
    </View>
  );

  return <Carousel data={data} renderItem={renderItem} baseOptions={baseOptions} />;
}
