import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Home } from './src/pages/Home';
import { useState } from 'react';
import { Form } from './src/pages/Form';

export default function App() {

  const [isOnFormPage, setIsOnFormPage] = useState<boolean>(false);

  return (
    <View style={styles.container}>
      { isOnFormPage ? <Form setIsFormPage={setIsOnFormPage}/> : <Home setIsFormPage={setIsOnFormPage}/> }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#A0A0A0',
    alignItems: 'center',
    justifyContent: 'center',
  },
});