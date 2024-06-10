import * as React from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';

interface CarouselProps {
  data: any[];
  renderItem: (props: { item: any }) => React.ReactElement;
  scrollAnimationDuration?: number;
  autoPlay?: boolean;
  height?: number;
  style?: object;
  // mode?: 'parallax' | 'horizontal-stack' | 'vertical-stack';
  // modeConfig?: ILayoutConfig;
  baseOptions?: object;
}
const width = Dimensions.get('window').width;

export default function CarouselComponent({
  data,
  renderItem,
  baseOptions,
  ...restProps
}: CarouselProps) {
  return (
    <View style={styles.container}>
      <Carousel
        data={data}
        renderItem={renderItem}
        width={width}
        loop
        {...baseOptions}
        {...restProps}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
