import { router } from 'expo-router';
import { ReactNode } from 'react';
import { Pressable } from 'react-native';
import { StyleType } from './Cards/types';

export default function RedirectToMapScreen({
  style,
  children,
  ...restProps
}: {
  style?: StyleType;
  children: ReactNode;
}) {
  const handleSelectLocationPress = () => {
    router.push('/map-view');
  };

  return (
    <Pressable style={style} onPress={handleSelectLocationPress} {...restProps}>
      {children}
    </Pressable>
  );
}
