import React, { useEffect, useState } from 'react';
import { View, Text, Button, Image } from 'react-native';

import { styles } from './styles';

import Logo from "../../../assets/logo.png"
import { Divider } from '../Divider';
import { CAR_ASSETS_BASE_URL } from '../../constants/car';
import { BuyButton } from '../BuyButton';
import { CarModel } from './props';
import { handleNextItem, handlePreviousItem, loadCarData } from './actions';
import { BuyPopUp } from '../BuyPopUp';

export function CardView() {

    const [carData, setCarData] = useState<CarModel | null>(null)

    const [showBuyPopUp, setShowBuyPopUp] = useState<boolean>(false)

    useEffect(() => {
        (async () => {
            await loadCarData(1, setCarData);
            console.log(carData)
        })();
    }, [])

    const renderLogoBox = () => (
        <View style={styles.logoContainer}>
            <Image source={Logo} style={styles.imageLogo} />
        </View>
    )

    const renderCarDetails = () => (
        <View style={{ alignItems: 'center' }}>
            <Text style={styles.carBrand}>Lamborghini</Text>
            <Text style={styles.carName}>{carData?.carName}</Text>
        </View>
    )

    const renderCarImage = () => (
        <Image style={styles.image} source={{ uri: `${CAR_ASSETS_BASE_URL}${carData?.id}.png` }}/>
    )

    const renderPriceControls = () => (
        <View style={styles.priceLabelContainer}>
            <Button title='<' color='#01a6b3' onPress={() => {handlePreviousItem(carData, setCarData)}}/>
            <Text style={styles.priceLabel}>{carData?.price}</Text>
            <Button title='>' color='#01a6b3' onPress={() => {handleNextItem(carData, setCarData)}}/>
        </View>
    )

    return (
        <View style={styles.container}>
            { showBuyPopUp && <BuyPopUp carData={carData} handleCancel={() => setShowBuyPopUp(false)} /> }

            { renderLogoBox() }
            <Divider />

            { renderCarDetails() }
            { renderCarImage() }

            <Divider />

            <BuyButton onPress={() => setShowBuyPopUp(true)} />
            { renderPriceControls() }
        </View>
    );
}