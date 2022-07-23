import {
  ImageBackground,
  Text,
  SafeAreaView,
  View,
  ActivityIndicator,
} from 'react-native';
import React, {useCallback, useState} from 'react';
import {style} from './style';
import Textinput from '../../components/Textinput';
import axios from 'axios';
import {api} from '../../utils/API';
import Tempview from '../../components/Tempview';
const image = {
  uri: 'https://cdn.pixabay.com/photo/2020/04/30/15/06/sunset-5113211_1280.jpg',
};

const MainScreen = () => {
  const [input, setInput] = useState('Delhi');
  // const [data, setData] = useState('');
  const [loading, setLoading] = useState(false);

  const fetchDataHandler = useCallback(() => {
    console.log('fired');
    setLoading(true);
    setInput('');
    axios({
      method: 'GET',
      url: `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${api.key}`,
    })
      .then(res => {
        console.log(res.data);
        setData(res.data);
      })
      .catch(e => console.dir(e))
      .finally(() => setLoading(false));
  }, [api.key, input]);

  return (
    <SafeAreaView style={style.container}>
      <ImageBackground source={image} resizeMode="cover" style={style.bgImage}>
        <View>
          <Textinput
            input={input}
            onChange={text => setInput(text)}
            onSubmitEditing={fetchDataHandler}
          />
        </View>
        {loading && (
          <View style={style.loader}>
            <ActivityIndicator size={'large'} color={'pink'} />
          </View>
        )}
        <Tempview />
      </ImageBackground>
    </SafeAreaView>
  );
};

export default MainScreen;
