import React from 'react';
import { Animated, PanResponder } from 'react-native';
import { useRef } from 'react';
import mangekyoSharingan from '../../../assets/sharingan.jpg'

export function RotatingSharingan() {
    const rotation = useRef(new Animated.Value(0)).current;

    const rotateInterpolate = rotation.interpolate({
        inputRange: [0, 360],
        outputRange: ['0deg', '360deg'],
    });

    // Ajuste da velocidade (em milissegundos)
    const rotationSpeed = 2000; // velocidade da rotação (2 segundos para completar 360 graus)

    const panResponder = useRef(
        PanResponder.create({
        onStartShouldSetPanResponder: () => true,
        onPanResponderGrant: () => {
            // Inicia a rotação contínua ao tocar
            Animated.timing(rotation, {
            toValue: 360,
            duration: rotationSpeed, // Velocidade da rotação
            useNativeDriver: true,
            }).start();
        },
        onPanResponderRelease: () => {
            // Para a animação na posição atual ao soltar
            rotation.stopAnimation();
        },
        })
    ).current;

  return (
    <>
        {/* Imagem com rotação animada */}
        <Animated.Image
            {...panResponder.panHandlers} // Passa os manipuladores de toque para a imagem
            source={mangekyoSharingan}
            style={{
                width: 100,
                height: 100,
                borderRadius: 50,
                transform: [{ rotate: rotateInterpolate }], // Aplica a rotação
            }}
        />
    </>
  );
}