import React from 'react';
import { View, Text  } from 'react-native';
import { StatusBar } from 'expo-status-bar'

// import { styles } from './styles';

export default function Gallery() {
    return (
        <View 
        // style={styles.container}
        style={{flex: 1, backgroundColor: 'rgba(0, 0, 255, .5)', width: '100%', alignItems: 'center', justifyContent: 'center'}}
        >
            <Text>Gallery Works!</Text>
        </View>
    );
}