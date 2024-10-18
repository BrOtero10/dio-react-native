import React from 'react';
import { View, Text, Alert } from 'react-native';

import { styles } from './styles';

interface ConfirmValuesProps {
    formData: {
        name: string;
        email: string;
        phoneNumber: string;
        location: string;
        observations: string;
    },
    setShowConfirmPopUp: (value: boolean) => void,
    setIsFormPage: (value: boolean) => void
}

export function ConfirmValues({formData, setShowConfirmPopUp, setIsFormPage}:ConfirmValuesProps) {

    const handleCancel = () => {
        setShowConfirmPopUp(false)
    }

    const handleConfirm = () => {
        setShowConfirmPopUp(false)
        showAlert()
    }

    const showAlert = () => {
        Alert.alert(
            "Signal Activated", // Título do alerta
            "A Bat-Signal was Activated!.", // Mensagem do alerta
            [
                {
                    text: "OK",
                    onPress: () => setIsFormPage(false)
                }
            ],
            { cancelable: false }
        );
    };

    return (
        <View style={styles.container}>
            <View style={styles.popUp}>
                <Text style={styles.title}>Confirm Fields:</Text>

                <Text style={styles.field}>Name:</Text>
                <Text style={styles.fieldValue}>{formData.name}</Text>

                <Text style={styles.field}>Email:</Text>
                <Text style={styles.fieldValue}>{formData.email}</Text>

                <Text style={styles.field}>Phone Number:</Text>
                <Text style={styles.fieldValue}>{formData.phoneNumber}</Text>

                <Text style={styles.field}>Location:</Text>
                <Text style={styles.fieldValue}>{formData.location}</Text>

                <Text style={styles.field}>Observations:</Text>
                <Text style={styles.fieldValue}>{formData.observations}</Text>

                <View style={styles.buttons}>
                    <Text style={{backgroundColor: '#3e000b', ...styles.button}} onPress={handleCancel}>Cancel</Text>
                    <Text style={{backgroundColor: '#063e2a', ...styles.button}} onPress={handleConfirm}>Confirm</Text>
                </View>
            </View>
        </View>
    );   
}