import React, { useState, useContext } from 'react';
import { Text, Pressable } from 'react-native';
import * as Clipboard from 'expo-clipboard'

import { styles } from './BatButtonStyles';
import { BatTextInput } from '../BatTextInput/BatTextInput';
import generatePass from '../../services/passwordService';
import { BatCustomParams } from '../BatCustomParams/BatCustomParams';
import { CustomCharactersContext } from '../../contexts/CustomCharactersContext';

export function BatButton() {

    const context = useContext(CustomCharactersContext)
    if(!context) {
        throw new Error('CustomCharactersContext must be used within a CustomCharactersProvider')
    }

    const { customCharacters, customLength } = context;

    const [pass, setPass] = useState('');
    const [showCustomParams, setShowCustomParams] = useState(false)

    const handleGenerate = () => {
        let generateToken = generatePass(customCharacters, customLength);
        setPass(generateToken);
    }

    const handleCopy = () => {
        Clipboard.setStringAsync(pass);
    }

    const handleCustom = () => setShowCustomParams(prev => !prev)

    return (
    <>
        <BatTextInput pass={pass}/>
        <Pressable
            onPress={handleGenerate}
            style={styles.button}
        >
            <Text style={styles.text}>⚡ GENERATE</Text>
        </Pressable>   
        <Pressable
            onPress={handleCopy}
            style={styles.button}
        >
            <Text style={styles.text}>⚡ COPY</Text>
        </Pressable>    
        <Pressable
            onPress={handleCustom}
            style={styles.customButton}
        >
            <Text style={styles.text}>
                CUSTOM PARAMETERS
            </Text>
        </Pressable>  
        <BatCustomParams show={showCustomParams} setShow={setShowCustomParams}/>
    </>
    );
}