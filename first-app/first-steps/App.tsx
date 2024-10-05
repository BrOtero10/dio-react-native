import { StyleSheet, View, Image, Button, TouchableOpacity } from 'react-native';
import symbolOn from './assets/pictures/symbol-on.png'
import symbolOff from './assets/pictures/symbol-off.png'
import { useState } from 'react';

export default function App() {

  const [isOn, setIsOn] = useState(false)

  return (
    <View style={isOn ? styles.containerOn : styles.containerOff}>
      <TouchableOpacity onPress={() => setIsOn(prev => !prev)}>
        <Image source={isOn ? symbolOn : symbolOff}></Image>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  containerOn: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerOff: {
    flex: 1,
    backgroundColor: 'gray',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
