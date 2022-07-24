import {View, Text, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const style = StyleSheet.create({
  container: {
    height: '75%',
    width: 100,
    backgroundColor: 'rgba(255,255,255,0.7)',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
});

const Extrainfo = ({icon, val}) => {
  const getIconName = () => {
    if (icon === 'Pressure') {
      return 'weather-fog';
    } else if (icon === 'Humid') {
      return 'weather-partly-rainy';
    } else {
      return 'weather-windy';
    }
  };

  return (
    <View style={style.container}>
      <MaterialCommunityIcons
        name={getIconName()}
        size={30}
        style={{marginVertical: 10}}
      />
      <Text style={{fontWeight: '600', fontSize: 20, marginVertical: 10}}>
        {icon}
      </Text>
      <Text style={{fontWeight: '300', fontSize: 20, marginVertical: 20}}>
        {val}
      </Text>
    </View>
  );
};

export default Extrainfo;
