import { ThemedView } from '@/components/UI/ThemedView';
import BannerCarousel from './BannerCarousel';
import SearchViewInput from './SearchViewInput';

export default function HeaderBanner() {
  return (
    <ThemedView>
      {/* <SelectLocation /> */}
      <SearchViewInput />
      <BannerCarousel />
    </ThemedView>
  );
}
