import { Colors } from '@/constants/Colors';
import { ImageSourcePropType } from 'react-native';

export type StyleType = object;
export type RatingProps = { value: string; count: string };
type delvirySpecificColors =
  | typeof Colors.light.vanillaLatteText
  | typeof Colors.light.darkBrownText;

export type DeliveryTimeProps = {
  interval: string;
  unit: 'mins' | 'hours';
  color?: delvirySpecificColors;
};
export type TitleDescriptionProps = { title: string; description: string };

export interface ImageCardProps {
  logo: ImageSourcePropType;
  image: ImageSourcePropType;
  rating: RatingProps;
  title: string;
  description: string;
  deliveryTime: DeliveryTimeProps;
  freeDelivery: { isFree: boolean; value: number };
  isHplus: boolean;
}
