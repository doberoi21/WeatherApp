import {View, Text} from 'react-native';
import React from 'react';
import {style} from './style';
import Extrainfo from '../Extra';

const Tempview = () => {
  return (
    <View style={style.container}>
      <Text style={style.cityName}>New Delhi , IN </Text>
      <View style={{flexDirection: 'row', marginVertical: 30}}>
        <View>
          <Text>MAX Temp</Text>
        </View>
        <View
          style={{
            width: 3,
            height: 20,
            backgroundColor: 'black',
            marginHorizontal: 10,
          }}
        />
        <View>
          <Text>MIN Temp</Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          width: '100%',
          marginVertical: 30,
        }}>
        <Extrainfo />
        <Extrainfo />
        <Extrainfo />
      </View>
    </View>
  );
};

export default Tempview;
