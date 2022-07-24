import {View, Text} from 'react-native';
import React from 'react';
import {style} from './style';
import Extrainfo from '../Extra';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const Tempview = ({info}) => {
  const kel = Math.round(info?.main?.temp);
  const k = 273.15;
  const temp = Math.floor(kel - k);
  return (
    <View style={style.container}>
      <Text style={style.cityName}>
        {info?.name} , {info?.sys?.country}
      </Text>
      <View style={{flexDirection: 'row', marginVertical: 30}}>
        <Text style={style.temp}>{`${temp} °C`}</Text>
      </View>
      {/* <Text>" {info?.weather[0]?.description} "</Text> */}
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: '110%',
          marginVertical: 30,
        }}>
        <Extrainfo icon={'Pressure'} val={info?.main?.pressure} />
        <Extrainfo icon={'Wind'} val={info?.wind?.speed} />
        <Extrainfo icon={'Humid'} val={info?.main?.humidity} />
      </View>
    </View>
  );
};

export default Tempview;
