import { Colors } from '@/constants/Colors';
import { Image, StyleSheet, View } from 'react-native';
import AdBadge from '../components/AdBadge';
import BusinessLogo from '../components/BusinessLogo';
import DeliveryTime from '../components/DeliveryTime';
import FreeDeliveryBadge from '../components/FreeDeliveryBadge';
import Hplus from '../components/Hplus';
import Rating from '../components/Rating';
import TitleAndDescription from '../components/TitleAndDescription';
import { ImageCardProps } from '../types';

export default function RoundedImageCard({ cardData }: { cardData: ImageCardProps }) {
  const { logo, image, rating, title, description, deliveryTime, freeDelivery, isHplus } = cardData;
  return (
    <View style={styles.card}>
      <View style={styles.imageContainer}>
        <Image source={image} style={styles.image} />
        <View style={styles.overlayContainer}>
          <BusinessLogo logo={logo} />
          <View style={styles.overlayRightside}>
            <Rating rating={rating} />
            <AdBadge isBadge={true} />
          </View>
        </View>
      </View>
      <View style={styles.detailsContainer}>
        <View style={styles.titleContainer}>
          <TitleAndDescription title={title} description={description} />
          {isHplus && <Hplus />}
        </View>
        <DeliveryTime style={styles.deliverytime} deliveryTime={deliveryTime} />
        {freeDelivery.isFree && <FreeDeliveryBadge freeDeliveryValue={freeDelivery.value} />}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: '100%',
  },
  imageContainer: {
    height: 150,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
  overlayContainer: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    padding: 10,
  },
  overlayRightside: {
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    height: '100%',
  },

  detailsContainer: {
    paddingHorizontal: 8,
    paddingVertical: 10,
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'baseline',
  },
  deliverytime: {
    backgroundColor: Colors.light.lightGrayBackground,
    borderRadius: 15,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginVertical: 7,
  },
});
