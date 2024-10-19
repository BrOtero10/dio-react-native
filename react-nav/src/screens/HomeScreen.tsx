import React from 'react';
import { View, Text, Button } from 'react-native';
import { StatusBar } from 'expo-status-bar'

// import { styles } from './styles';

export default function Home({ navigation } : any) {

    const navToGallery = () => {
        navigation.navigate('gallery')
    }

    return (
        <View 
            style={{flex: 1, backgroundColor: 'rgba(255, 0, 0, .5)', width: '100%', alignItems: 'center', justifyContent: 'center'}}
        >
            <Text>Home Works!</Text>
            {/* <Button
                color='blue'
                title='Go to Gallery'
                onPress={navToGallery}
            /> */}
        </View>
    );
}''