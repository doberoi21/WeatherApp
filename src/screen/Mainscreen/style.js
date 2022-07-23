import {StyleSheet} from 'react-native';
export const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  bgImage: {
    flex: 1,
    flexDirection: 'column',
  },
  loader: {
    height: 200,
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: 'red',
  },
  infoView: {
    alignItems: 'center',
  },

  dateText: {
    color: '#fff',
    fontSize: 22,
    marginVertical: 10,
  },
  tempText: {
    fontSize: 45,
    color: '#fff',
    marginVertical: 10,
  },
  minMaxText: {
    fontSize: 22,
    color: '#fff',
    marginVertical: 10,
    fontWeight: '500',
  },
});
