import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

const style = StyleSheet.create({
  container: {
    height: 100,
    width: 80,
    backgroundColor: 'yellow',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const Extrainfo = () => {
  return (
    <View style={style.container}>
      <Text>Rain</Text>
      <Text>55</Text>
    </View>
  );
};

export default Extrainfo;
