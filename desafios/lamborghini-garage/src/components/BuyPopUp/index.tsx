import React, { useState } from 'react';
import { Button, GestureResponderEvent, Text, View } from 'react-native';

import { AntDesign } from "@expo/vector-icons"

import { styles } from './styles';
import { Divider } from '../Divider';
import { CarModel } from '../CardView/props';

export interface BuyPopUpProps {
    carData: CarModel | null;
    handleCancel: ((event: GestureResponderEvent) => void) | undefined;
}

export function BuyPopUp({ carData, handleCancel }: BuyPopUpProps) {

    const [isConfirmed, setIsConfirmed] = useState<boolean>(false)

    const handleConfirm = () => {
        setIsConfirmed(true)
    }

    const renderCarValues = () => (
        <View style={ styles.carDataContainer}>
            <Text style={styles.lamborghiniText}>Lamborghini</Text>
            <Text style={styles.carName}>{carData?.carName}</Text>
            <Text style={styles.carReleaseYear}>Release Year: {carData?.releaseYear}</Text>
        </View>
    )

    const renderButtons = () => (
        <View style={styles.buttons}>
            <View style={{ flex: 1 }}>
                <Button title='Cancel' color='#5b5b6e' onPress={handleCancel} />
            </View>
            <View style={{ flex: 1 }}>
                <Button title='Confirm' color='#e6c12e' onPress={handleConfirm} />
            </View>
        </View>
    )

    return (
        <View style={styles.container}>
            { isConfirmed ? (
                <View style={styles.confirmedPurchaseContainer}>
                    <AntDesign name="checkcircleo" size={200} color="white" />
                    <Text style={styles.confirmedPurchaseText}>Confirmed Purchase!</Text>
                    <Button title='Return' onPress={handleCancel}/>
                </View>
            ) : (
                <View style={styles.buyContainer}> 
                    <Text style={styles.title}>Confirm Buy</Text>
                    <Divider />
                    { renderCarValues() }
                    <Divider/>
                    <Text style={styles.carPrice}>Price: {carData?.price}</Text>
                    { renderButtons() }
                </View>
            )}
        </View>
    );
}