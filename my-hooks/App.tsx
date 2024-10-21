import { StatusBar } from 'expo-status-bar';
import { useState, useEffect, useRef, useReducer } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';


// AÇÕES PARA REDUCER
const actionsTypes = {
  RESET: 'RESET',
  WRITE: 'WRITE',

}

// DEFINIÇÃO DO REDUCER
const reducer = (state: any, action: any) => {
  // AÇÕES POSSÍVEIS
  switch(action.type) {

    case actionsTypes.RESET:
      state.textInputRef2.current.focus();
      state.textInputRef2.current.setNativeProps({ text: ''})
      return state;

    case actionsTypes.WRITE: 
      state.textInputRef2.current.setNativeProps({ text: 'Bruno Otero' })
      return state;

    default:
      return state;
  }

}

export default function App() {

  // USESTATE 

  const [quantity, setQuantity] = useState<number>(12);
  const [price, setPrice] = useState(10.9);

  const basePrice = 10.9

  const removeNumber = () => {
    setQuantity((prevQuantity) => {
      const newQuantity = prevQuantity - 1;
      setPrice(basePrice * newQuantity);
      console.log(newQuantity);
      return newQuantity;
    });
    console.log(quantity)
  }

  const addNumber = () => {
    setQuantity((prevQuantity) => {
      const newQuantity = prevQuantity + 1;
      setPrice(basePrice * newQuantity);
      console.log(newQuantity);
      return newQuantity;
    });
    console.log(quantity)
  }

  // USEEFFECT

  useEffect(() => {
    console.log("Quantity mudou")
  }, [quantity])

  // USEREF

  const textInputRef = useRef<TextInput>(null); // Cria uma referência ao componente

  const resetButton = () => {
    if(textInputRef.current) {
      textInputRef.current.focus();
      textInputRef.current.setNativeProps({ text: ''})
    }
  }

  // USEREDUCER

  const initialState = {
    textInputRef2: useRef<TextInput>(null),
  }
  
  const [state, dispatch] = useReducer(reducer, initialState)

  const resetButton2 = () => {
    dispatch({type: actionsTypes.RESET})
  }

  const writeButton = () => {
    dispatch({type: actionsTypes.WRITE})
  }

  return (
    <View style={styles.container}>
      <Text style={{ marginBottom: 20, fontSize: 20 }}>Unit price: R$ {basePrice.toFixed(2)}</Text>
      <View style={styles.buttonRow}>
        <Button title='-' color='red' onPress={removeNumber}/>
        <Text style={styles.textLabel}>{quantity}</Text>
        <Button title='+' onPress={addNumber}/>
      </View>
      <Text style={{ marginTop: 10, fontSize: 18 }}>R$ {price.toFixed(2)}</Text>

      <TextInput style={styles.textInputStyle} ref={textInputRef}/>
      <Button title='Resetar' onPress={resetButton}/>

      <TextInput style={styles.textInputStyle} ref={state.textInputRef2}/>
      <View style={styles.buttonRow}>
        <Button title='RESET' color='red' onPress={resetButton2}/>
        <Button title='WHITE' onPress={writeButton}/>
      </View>

      <StatusBar style='auto'/>
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
  textLabel: {
    fontSize: 22,
  },
  buttonRow: {
    flexDirection: 'row',
  },
  textInputStyle: {
    height: 40, 
    borderColor: 'gray', 
    borderWidth: 1, 
    marginBottom: 15, 
    paddingHorizontal: 10,
    paddingTop: 10,
    marginTop: 50,
  }
});
