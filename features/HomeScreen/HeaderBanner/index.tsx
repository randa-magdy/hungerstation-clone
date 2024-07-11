import RedirectToMapScreen from '@/components/Reusable/RedirectToMapScreen';
import SearchViewInput from '@/components/UI/SearchViewInput';
import { ThemedView } from '@/components/UI/ThemedView';
import { Colors } from '@/constants/Colors';
import { StyleSheet } from 'react-native';
import BannerCarousel from './BannerCarousel';

export default function HeaderBanner() {
  return (
    <ThemedView>
      <RedirectToMapScreen style={styles.searchInput}>
        <SearchViewInput placeHolder="Search for a restaurant or store" />
      </RedirectToMapScreen>
      <BannerCarousel />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  searchInput: {
    position: 'absolute',
    zIndex: 1,
    top: '30%',
    alignSelf: 'center',
    width: '93%',
    borderBottomColor: Colors.light.darkYellowBackground,
    borderBottomWidth: 3,
  },
});
