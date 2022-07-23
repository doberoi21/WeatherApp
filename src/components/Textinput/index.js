import {View, TextInput} from 'react-native';
import React from 'react';
import {style} from './style';
import AntDesign from 'react-native-vector-icons/AntDesign';
const Textinput = ({input, onChange, onSubmitEditing}) => {
  return (
    <View style={style.inputView}>
      <TextInput
        style={style.inputText}
        placeholder="Enter City Name"
        onChangeText={onChange}
        onSubmitEditing={onSubmitEditing}
        value={input}>
        <AntDesign size={40} />
      </TextInput>
    </View>
  );
};

export default Textinput;
