import React from 'react';
import { View, Text } from 'react-native';

import { styles } from './styles';
import { Logo } from '../../components/Logo';

interface HomeProps {
    setIsFormPage: React.Dispatch<React.SetStateAction<boolean>>;
}

export function Home({ setIsFormPage }:HomeProps) {

    const toFormPage = () => setIsFormPage(true)

    return (
        <View style={styles.container}>
            <Logo/>
            <Text style={styles.button} onPress={toFormPage}>Activate Bat Signal</Text>
        </View>
  );
}