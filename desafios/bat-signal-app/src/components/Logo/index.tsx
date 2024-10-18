import React from 'react';
import { View, Image, Text, Linking } from 'react-native';

import { styles } from './styles';

import logo from "../../../assets/bat-14.jpg"

export function Logo() {
  return (
    <View style={styles.logo}>
        <Image source={logo} alt='Logo de morcego' style={styles.logoImg}/>
        <View style={styles.blackOverSheet}></View>
        <Text style={styles.licenceText}>Imagem por <Text style={styles.licenceUrl} onPress={() => Linking.openURL('https://www.vecteezy.com')}>Vecteezy.com</Text></Text>
    </View>
);
}