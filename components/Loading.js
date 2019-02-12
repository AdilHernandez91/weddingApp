import React from 'react';
import { ActivityIndicator, View, StyleSheet } from 'react-native';

import { STYLES } from '../constants';

const Loading = () => {
  return (
    <View style={styles.loading}>
      <ActivityIndicator size={'large'} color={STYLES.COLORS.LIGHT_RED} />
    </View>
  );
};

const styles = StyleSheet.create({
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Loading;
