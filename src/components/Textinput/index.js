import {View, TextInput} from 'react-native';
import React from 'react';
import { style } from './style';


const Textinput = ({input}) => {
  return (
    <View style={style.inputView}>
      <TextInput style={style.inputText} placeholder='Enter City Name' value={input} />
    </View>
  );
};

export default Textinput;
