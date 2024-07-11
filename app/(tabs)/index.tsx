import ParallaxScrollView from '@/components/UI/ParallaxScrollView';
import { Colors } from '@/constants/Colors';
import Businesses from '@/features/HomeScreen/Businesses';
import DailyOffers from '@/features/HomeScreen/DailyOffers';
import Featured from '@/features/HomeScreen/Featured';
import HeaderBanner from '@/features/HomeScreen/HeaderBanner';
import SelectLocation from '@/features/HomeScreen/HeaderBanner/SelectLocation';

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{
        light: Colors.light.lightYellowBackground,
        dark: Colors.dark.background,
      }}
      headerBanner={<SelectLocation />}>
      <HeaderBanner />
      <Businesses />
      <DailyOffers />
      <Featured />
    </ParallaxScrollView>
  );
}
