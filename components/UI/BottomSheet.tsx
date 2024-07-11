import { Colors } from '@/constants/Colors';
import { ReactElement } from 'react';
import { StyleSheet, View } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';

import {
  GestureHandlerRootView,
  PanGestureHandler,
  PanGestureHandlerGestureEvent,
  PanGestureHandlerStateChangeEvent,
  State,
} from 'react-native-gesture-handler';

type BottomSheetProps = {
  isOpen: boolean;
  children: ReactElement;
};

export default function BottomSheet({ isOpen = true, children }: BottomSheetProps) {
  const height = useSharedValue(0);
  const translateY = useSharedValue(0);
  const initialY = useSharedValue(0);

  const onGestureEvent = (event: PanGestureHandlerGestureEvent) => {
    const { translationY } = event.nativeEvent;
    translateY.value = Math.max(0, Math.min(height.value / 2, initialY.value + translationY));
  };

  const onHandlerStateChange = (event: PanGestureHandlerStateChangeEvent) => {
    const { translationY, oldState } = event.nativeEvent;
    if (oldState === State.ACTIVE) {
      if (translationY + initialY.value > height.value / 2) {
        translateY.value = withSpring(height.value / 2);
        initialY.value = height.value / 2;
      } else {
        translateY.value = withSpring(0);
        initialY.value = 0;
      }
    }
  };

  const sheetStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: translateY.value }],
  }));

  return (
    <GestureHandlerRootView style={styles.root}>
      <PanGestureHandler
        onGestureEvent={onGestureEvent}
        onHandlerStateChange={onHandlerStateChange}>
        <Animated.View
          onLayout={(e) => {
            height.value = e.nativeEvent.layout.height;
            if (isOpen) {
              translateY.value = withSpring(0);
              initialY.value = 0;
            } else {
              translateY.value = withSpring(height.value / 2);
              initialY.value = height.value / 2;
            }
          }}
          style={[styles.sheet, sheetStyle]}>
          <View style={styles.pullDownIcon}></View>
          {children}
        </Animated.View>
      </PanGestureHandler>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    width: '100%',
    // height: 'auto',
    position: 'absolute',
    bottom: 0,
    zIndex: 9,
  },
  sheet: {
    // height: '100%',
    paddingVertical: 20,
    paddingHorizontal: 5,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    alignItems: 'center',
    justifyContent: 'flex-end',
    backgroundColor: Colors.light.whiteBackground,
  },
  pullDownIcon: {
    width: 60,
    height: 5,
    borderRadius: 100,
    backgroundColor: '#ccc',
    marginBottom: 20,
    marginHorizontal: 'auto',
  },
});
