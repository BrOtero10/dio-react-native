import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {

  const [number, setNumber] = useState(0)
  const [text, setText] = useState('')

  return (
    <View style={styles.container}>
      <Text>Meu primeiro app! 😁</Text>
      <StatusBar style="auto" />
      <View style={styles.buttons}>
        <Button title='Incrementar' onPress={() => setNumber(prev => prev + 1)} color='blue' />
        <Button title='Decrementar' onPress={() => setNumber(prev => prev - 1)} color='red' />
      </View>
      <Text>{ number }</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  buttons: {
    display: 'flex',
    flexDirection: 'row',
  }
});
