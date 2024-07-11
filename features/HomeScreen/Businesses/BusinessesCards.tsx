import ImageTitleBlockCard from '@/components/Reusable/Cards/ImageTitleBlockCard';
import React from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';

const businessesData = [
  {
    title: 'Restaurants',
    image: require('@/assets/images/home/businesses-types/resturant.png'),
    legendLabel: '+50,000',
  },
  {
    title: 'HMarket',
    image: require('@/assets/images/home/businesses-types/market.png'),
    legendLabel: '20 Mins',
  },
  {
    title: 'Supermarkets',
    image: require('@/assets/images/home/businesses-types/supermarket.png'),
  },
  {
    title: 'Coffee & Sweets',
    image: require('@/assets/images/home/businesses-types/coffeeshop.png'),
  },
  { title: 'Pharmacies', image: require('@/assets/images/home/businesses-types/pharmacies.png') },
  {
    title: 'Flower & More',
    image: require('@/assets/images/home/businesses-types/flowershop.png'),
  },
];

export default function BusinessesCards() {
  const businessesDataList = businessesData.map((item) => (
    <ImageTitleBlockCard
      key={item.title}
      title={item.title}
      titlePosition="bottom"
      image={item.image}
      backgroundColor="gray"
      legendLabel={item.legendLabel}
      cardSize={{ width: Dimensions.get('screen').width / 4, height: 120 }}
      imageSize={{ height: 80 }}
    />
  ));
  return <View style={styles.cardsContainer}>{businessesDataList}</View>;
}

const styles = StyleSheet.create({
  cardsContainer: {
    flexDirection: 'row',
    marginBottom: 10,
    width: '100%',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
});
