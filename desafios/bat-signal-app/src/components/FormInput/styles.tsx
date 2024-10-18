import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginVertical: 25,
  },
  labelText: {
    fontSize: 16,
    fontWeight: '600',
    color: 'black'
  },
  requiredMark: {
    color: 'darkred',
    fontWeight: 'bold',
  },
  textInput: {
    width: '95%',
    padding: 10,
    borderColor: '#0F0F0F',
    borderWidth: 5,
    borderRadius: 10,
    marginVertical: 10,
    marginLeft: 10,
    textAlign: 'center',
    color: 'black',
    backgroundColor: 'lightgray',
  }
});