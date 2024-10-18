import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    zIndex: 1,
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, .8)',
  },
  popUp: {
    width: '90%',
    top: 50,
    bottom: 50,
    paddingTop: 30,
    paddingHorizontal: 25,
    gap: 10,
    backgroundColor: '#d3d3d3',
    borderRadius: 15,
    elevation: 10,
  },
  title: {
    alignSelf: 'center',
    fontSize: 32,
    fontWeight: 'bold',
    paddingBottom: 20,
  },
  field: {
    fontSize: 20,
    fontWeight: '500',
  },
  fieldValue: {
    fontSize: 18,
    paddingLeft: 25,
    paddingBottom: 20,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginVertical: 75,
  },
  button: {
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 15,
    color: 'white',
    fontSize: 18,
  }
});