import {ImageBackground, View, ActivityIndicator, Platform} from 'react-native';
import React, {useCallback, useState, useEffect} from 'react';
import {style} from './style';
import Textinput from '../../components/Textinput';
import axios from 'axios';
import {api} from '../../utils/API';
import Tempview from '../../components/Tempview';
import {
  checkMultiple,
  PERMISSIONS,
  requestMultiple,
  RESULTS,
} from 'react-native-permissions';
import Geolocation from 'react-native-geolocation-service';
import {
  sunriseImg,
  sunsetImg,
  daylightImg,
  nightImg,
} from '../../utils/imagess';

const MainScreen = () => {
  const [input, setInput] = useState('Delhi');
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(RESULTS.DENIED);
  // const [lat, setLat] = useState();
  // const [long, setLong] = useState();

  useEffect(() => {
    setLoading(true);
    Geolocation.getCurrentPosition(
      async position => {
        console.log(position);
        const {latitude: lat, longitude: lon} = position.coords;
        if (lat && lon) {
          const response = await axios.get(
            `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${api.key}`,
          );
          console.log(response.data);
          setData(response.data);
          setLoading(false);
        }
      },
      error => {
        // See error code charts below.
        console.log(error.code, error.message);
      },
      {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
    );
    checkGeoLocationPermission();
  }, []);

  const checkGeoLocationPermission = () => {
    if (Platform.OS == 'ios') {
      checkMultiple([
        PERMISSIONS.IOS.LOCATION_ALWAYS,
        PERMISSIONS.IOS.LOCATION_WHEN_IN_USE,
      ]).then(statuses => {
        if (
          statuses['ios.permission.LOCATION_ALWAYS'] == RESULTS.DENIED &&
          statuses['ios.permission.LOCATION_WHEN_IN_USE'] == RESULTS.DENIED
        ) {
          requestMultiple([
            PERMISSIONS.IOS.LOCATION_ALWAYS,
            PERMISSIONS.IOS.LOCATION_WHEN_IN_USE,
          ]).then(statuses => {
            if (
              statuses['ios.permission.LOCATION_ALWAYS'] == RESULTS.GRANTED &&
              statuses['ios.permission.LOCATION_WHEN_IN_USE'] == RESULTS.GRANTED
            ) {
              setResult(RESULTS.GRANTED);
            }
          });
        }

        // console.log('Camera', statuses[PERMISSIONS.IOS.LOCATION_ALWAYS]);
        // console.log('FaceID', statuses[PERMISSIONS.IOS.LOCATION_WHEN_IN_USE]);
        console.log(statuses);
      });
    } else {
      checkMultiple([
        PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
        PERMISSIONS.ANDROID.ACCESS_COARSE_LOCATION,
      ]).then(statuses => {
        console.log(statuses);

        // console.log('Camera', statuses[PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION]);
        // console.log('FaceID', statuses[PERMISSIONS.ANDROID.ACCESS_COARSE_LOCATION]);
      });
    }
  };

  const fetchDataHandler = useCallback(async () => {
    console.log('fired');
    setLoading(true);
    setInput('');
    const res = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${api.key}`,
    );
    console.log(res);
    setData(res.data);
    setLoading(false);
  }, [api.key, input]);

  const getImage = () => {
    const time = new Date().getHours();
    console.log(time);
    if (time >= 6 && time <= 10) {
      return sunriseImg;
    } else if (time >= 10 && time <= 16) {
      return daylightImg;
    } else if (time >= 16 && time <= 7) {
      return sunsetImg;
    } else {
      return nightImg;
    }
  };

  return (
    <View style={style.container}>
      <ImageBackground
        source={{uri: getImage()}}
        resizeMode="cover"
        style={style.bgImage}>
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
        <Tempview info={data} />
      </ImageBackground>
    </View>
  );
};

export default MainScreen;
