import React, { type PropsWithChildren, type ReactElement } from 'react';
import { StyleSheet, useColorScheme } from 'react-native';
import Animated, {
  interpolateColor,
  useAnimatedRef,
  useAnimatedStyle,
  useScrollViewOffset,
} from 'react-native-reanimated';

import { ThemedView } from '@/components/UI/ThemedView';

type Props = PropsWithChildren<{
  headerBanner?: ReactElement;
  headerBackgroundColor: { dark: string; light: string };
}>;

export default function ParallaxScrollView({
  children,
  headerBanner,
  headerBackgroundColor,
}: Props) {
  const colorScheme = useColorScheme() ?? 'light';
  const scrollRef = useAnimatedRef<Animated.ScrollView>();
  const scrollOffset = useScrollViewOffset(scrollRef);

  // const headerAnimatedStyle = useAnimatedStyle(() => {
  //   return {
  //     transform: [
  //       {
  //         translateY: interpolate(
  //           scrollOffset.value,
  //           [-HEADER_HEIGHT, 0, HEADER_HEIGHT],
  //           [-HEADER_HEIGHT / 2, 0, HEADER_HEIGHT * 0.75]
  //         ),
  //       },
  //       {
  //         scale: interpolate(scrollOffset.value, [-HEADER_HEIGHT, 0, HEADER_HEIGHT], [2, 1, 1]),
  //       },
  //     ],
  //   };
  // });

  const headerAnimatedStyle = useAnimatedStyle(() => {
    return {
      backgroundColor: interpolateColor(
        scrollOffset.value,
        [0, 20, 40, 60, 90, 120, 150],
        [
          'rgba(255, 255, 255, 0)',
          'rgba(255, 255, 255, 0.20)',
          'rgba(255, 255, 255, 0.40)',
          'rgba(255, 255, 255, 0.50)',
          'rgba(255, 255, 255, 0.60)',
          'rgba(255, 255, 255, 0.90)',
          'rgba(255, 255, 255, 1)',
        ]
      ),
      top: scrollOffset.value,
    };
  });

  return (
    <ThemedView style={styles.container}>
      <Animated.ScrollView ref={scrollRef} scrollEventThrottle={16}>
        {headerBanner && (
          <Animated.View
            style={[
              styles.header,
              { backgroundColor: headerBackgroundColor[colorScheme] },
              headerAnimatedStyle,
            ]}>
            {/* {headerBanner} */}
            {React.cloneElement(headerBanner, { scrollOffset })}
          </Animated.View>
        )}
        <ThemedView style={styles.content}>{children}</ThemedView>
      </Animated.ScrollView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
  header: {
    width: '100%',
    overflow: 'hidden',
    position: 'absolute',
    zIndex: 5,
  },
  content: {
    flex: 1,
    // padding: 20,
    gap: 16,
    overflow: 'hidden',
  },
});
