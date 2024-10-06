import { StatusBar } from 'expo-status-bar';
import { Alert, StyleSheet, Text, View, ScrollView, Switch } from 'react-native';
import { RotatingSharingan } from './src/components/RotatingSharingan';
import { useState } from 'react';

export default function App() {

  const [ligado, setLigado] = useState(false)

  const handleSwitch = () => {
    setLigado(prev => !prev)
  }

  return (
    <ScrollView style={{flex: 1}}>
      <View style={[styles.container, {backgroundColor: 'lightcyan'}]}>
        <Switch 
          value={ligado}
          onValueChange={handleSwitch}
        />
        <View
          onTouchStart={(e) => {
            Alert.alert('Começou a tocar', 'Toque iniciado')
          }}
          onTouchEnd={(e) => {
            Alert.alert('TOQUE', 'Toque finalizado')
          }}
          onTouchMove={(e) => {
            Alert.alert('MOVEU', 'Movimento em toque executado')
          }}
        ><Text>Toque aqui.</Text></View>
        <Text
          selectable={false}
        >Texto não-selecionável</Text>
        <Text
          selectable={true}
        >Texto selecionável</Text>
        <Text style={[styles.border, styles.text]}>
          <Text>Texto</Text>
          <Text> </Text>
          <Text>Composto</Text>
        </Text>
        <Text
          onPress={() => {console.log('Pressionado')}}
          onLongPress={() => {console.log('Pressionamento longo')}}
        >Texto pressionável</Text>

        <View
          style={{display: ligado ? 'flex' : 'none'}}
        >
          <RotatingSharingan/>
          <RotatingSharingan/>
          <RotatingSharingan/>
          <RotatingSharingan/>
          <RotatingSharingan/>
          <RotatingSharingan/>
          <RotatingSharingan/>
          <RotatingSharingan/>
          <RotatingSharingan/>
          <RotatingSharingan/>
        </View>
        <StatusBar style="auto" />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  border: {
    borderColor: 'darkblue',
    borderWidth: 3,
    borderRadius: 10,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    backgroundColor: 'blue',
    color: 'white',
    textAlign: 'center',
    padding: 5,
  }
});
