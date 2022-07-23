import {ImageBackground, Text, SafeAreaView, View} from 'react-native';
import React, {useState} from 'react';
import {style} from './style';
import Textinput from '../../components/Textinput';
const image = {
  uri: 'https://static.vecteezy.com/system/resources/previews/005/542/978/large_2x/giant-dark-cloud-storm-clouds-at-sunset-abstract-weather-season-free-photo.jpg',
};

const MainScreen = () => {
  const [input, setInput] = useState("Delhi");
  return (
    <SafeAreaView style={style.container}>
      <ImageBackground source={image} resizeMode="cover" style={style.bgImage}>
        <View>
          <Textinput input={input} />
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default MainScreen;
