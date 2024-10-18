import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  logo: {
    position: 'relative',
  },
  logoImg: {
    width: 350,
    height: 275,
    borderColor: '#e18e3a',
    borderWidth: 1,
    borderRadius: 10,
  },
  blackOverSheet: {
    width: 350,
    height: 275,
    position: 'absolute',
    backgroundColor: 'black',
    borderRadius: 10,
    opacity: .8,
    zIndex: 1,
  },
  licenceText: {
    position: 'absolute',
    bottom: 5,
    right: 10,
    fontSize: 10,
    opacity: .5,
    zIndex: 1,
    color: 'white',
    letterSpacing: .5,
  },
  licenceUrl: {
    color: '#e18e3a',
    fontWeight: 'bold',
  },
});