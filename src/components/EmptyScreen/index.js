import {View, Text, StyleSheet} from 'react-native';

import React from 'react';

export default function EmptyScreen({title = 'Empty Screen'}) {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text
        style={{
          textAlign: 'center',
          fontSize: 36,
          color: '#777',
          textTransform: 'capitalize',
        }}>
        {title}
      </Text>
    </View>
  );
}
