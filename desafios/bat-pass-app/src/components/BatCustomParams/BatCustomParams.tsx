import React, { useState, useContext } from 'react';
import { View, Pressable, TextInput, Text } from 'react-native';

import { styles } from './BatCustomParamsStyles';

import { CustomCharactersContext } from '../../contexts/CustomCharactersContext';

interface BatCustomParamsProps {
    show: boolean,
    setShow: React.Dispatch<React.SetStateAction<boolean>>,
}

export function BatCustomParams(props:BatCustomParamsProps) {

    const context = useContext(CustomCharactersContext)
    if(!context) {
        throw new Error('CustomCharactersContext must be used within a CustomCharactersProvider')
    }

    const { customCharacters, setCustomCharacters, customLength, setCustomLength } = context;

    const [inputValue, setInputValue] = useState<string>(customCharacters);
    const [passLength, setPassLength] = useState<number|''>(customLength);

    const handleLengthChange = (value: string) => {
        if(value === '') {
            setPassLength('')
            return;
        }

        const numericValue = parseInt(value, 10); // converte para número inteiro
    
        // Verifica se o valor convertido é um número válido
        if (!isNaN(numericValue) && numericValue <= 500 && numericValue >= 0) {
            setPassLength(numericValue);
        }
    };

    const handleConfirm = () => {
        setCustomCharacters(inputValue);
        if(passLength != '' && passLength >= 0 && passLength <= 500) setCustomLength(passLength);
        else if(passLength === '') setCustomLength(8);
        props.setShow(false);
    }

    const handleCancel = () => {
        setInputValue('');
        setCustomCharacters('');
        props.setShow(false);
    }

    return (
    <>
    {props.show && (
        <View style={styles.container}>
            
            <TextInput
                style={{...styles.floatingInput, ...styles.floatingTextInput}}
                value={inputValue}
                onChangeText={setInputValue}
                placeholder="Type the characters for the password generation"
                multiline={true}
            />
            <TextInput
                style={{...styles.floatingInput, ...styles.floatingNumericInput}}
                value={passLength?.toString()}
                onChangeText={handleLengthChange}
                placeholder="Type the length of the password"
                keyboardType='numeric'
            />
            
            <View style={styles.buttons}>
                <Pressable 
                    style={{...styles.cancelButton, ...styles.button}}
                    onPress={handleCancel}
                >
                    <Text style={styles.buttonText}>Cancel</Text>
                </Pressable>
                <Pressable 
                    style={{...styles.confirmButton, ...styles.button}}
                    onPress={handleConfirm}
                >
                    <Text style={styles.buttonText}>Confirm</Text>
                </Pressable>
            </View>
        </View>
    )}
    </>
    );
}