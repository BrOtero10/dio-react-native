import React, { useState, useRef } from 'react';
import { View, Text, ScrollView, Alert } from 'react-native';

import { styles } from './styles';
import { Header } from '../../components/Header';
import { FormInput } from '../../components/FormInput';
import { ConfirmValues } from '../../components/ConfirmValues';

interface FormProps {
  setIsFormPage: React.Dispatch<React.SetStateAction<boolean>>;
}

export function Form({setIsFormPage}:FormProps) {

  const scrollViewRef = useRef<ScrollView>(null);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    location: '',
    observations: '',
  })

  const [showConfirmPopUp, setShowConfirmPopUp] = useState(false)

  const onFormDataChange = (field:string, value:string) => {
    setFormData({
      ...formData,
      [field]: value,
    })
  }

  const showAlert = () => {
    Alert.alert(
      "Required Fields", // Título do alerta
      "Please fill all the required fields.", // Mensagem do alerta
      [
        {
          text: "OK",
          onPress: () => console.log("OK Pressed")
        }
      ],
      { cancelable: false }
    );
  };

  function verifyRequiredFields() {
    if(formData.name && formData.email && formData.phoneNumber && formData.location) return true
    return false
  }

  const onSubmit = () => {
    if(!verifyRequiredFields()) {
      showAlert();
    } 
    else {
      console.log(formData)
      if (scrollViewRef.current) scrollViewRef.current.scrollTo({ y: 0, animated: true });
      setShowConfirmPopUp(!showConfirmPopUp)
    }
  }

  return (
    <ScrollView style={styles.container} scrollEnabled={!showConfirmPopUp} ref={scrollViewRef}
      contentContainerStyle={{
          justifyContent: 'flex-start',
          alignItems: 'center',
      }}
    >
      { showConfirmPopUp ? 
        <ConfirmValues formData={formData} setShowConfirmPopUp={setShowConfirmPopUp} setIsFormPage={setIsFormPage}/> 
      : ''}
      <Header/>
      <View style={styles.formArea}>
        <Text style={styles.formTitle}>Fill the inputs to activate the Bat Signal!</Text>

        <FormInput 
          label='Name' placeholder="Enter your name" 
          onChangeText={(value) => onFormDataChange('name', value)} required
        />
        <FormInput 
          label='Email' placeholder="Enter your best email" keyboardType='email-address'
          onChangeText={(value) => onFormDataChange('email', value)} required
        />
        <FormInput 
          label='Phone Number' placeholder="Enter your phone number" keyboardType='phone-pad'
          onChangeText={(value) => onFormDataChange('phoneNumber', value)} required
        />
        <FormInput 
          label='Current Location' placeholder="Enter your current location"
          onChangeText={(value) => onFormDataChange('location', value)} required
        />
        <FormInput 
          label='Observations' placeholder="Describe observations about the calling" multiline={true} numberOfLines={5} maxLength={304}
          onChangeText={(value) => onFormDataChange('observations', value)}
        />

        <Text style={styles.submitButton} onPress={onSubmit}>Submit</Text>
      </View>
    </ScrollView>
  );
}