import React from 'react';
import { View, TouchableOpacity, Text, GestureResponderEvent } from 'react-native';
import { AntDesign } from '@expo/vector-icons'

import { styles } from './styles';

interface BuyButtonProps {
    onPress: ((event: GestureResponderEvent) => void) | undefined
}

export function BuyButton({ onPress }: BuyButtonProps) {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button} onPress={onPress}>
                <AntDesign name='shoppingcart' size={24} color='white' style={styles.icon} />
                <Text style={styles.buttonText}>Buy This</Text>
            </TouchableOpacity>
        </View>
    );
}