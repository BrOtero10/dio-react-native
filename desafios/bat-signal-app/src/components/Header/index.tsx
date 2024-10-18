import React from 'react';
import { Image, View } from 'react-native';

import { styles } from './styles';

import logo from '../../../assets/bat-14.jpg'

export function Header() {
  return (
    <View style={styles.container}>
        <Image source={logo} alt='Pequeno logo de morcego no Header da página'
            style={styles.headerLogoImg}
        />
        <View style={styles.blackOverSheet}></View>
    </View>
  );
}