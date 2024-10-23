import { StatusBar, StyleSheet, Text, View } from 'react-native';
import GarageScreen from './src/screens/GarageScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <GarageScreen />
      <StatusBar barStyle='light-content' backgroundColor='#1c1c22' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
