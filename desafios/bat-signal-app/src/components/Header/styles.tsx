import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    borderColor: 'grey',
    borderWidth: 1,
    display: 'flex',
    justifyContent: 'flex-start',
  },
  headerLogoImg: {
    marginTop: 10,
    width: 100,
    height: 80,
  },
  blackOverSheet: {
    width: 100,
    height: 80,
    position: 'absolute',
    top: 10,
    backgroundColor: 'black',
    zIndex: 1,
    opacity: .37,
  }
});