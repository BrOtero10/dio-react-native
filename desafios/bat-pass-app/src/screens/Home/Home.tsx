import { Text, View } from 'react-native'
import { StatusBar } from 'expo-status-bar'

import { styles } from './Style'
import { BatLogo } from '../../components/BatLogo/BatLogo'
import { BatButton } from '../../components/BatButton/BatButton'
import { CustomCharactersProvider } from '../../contexts/CustomCharactersContext'

export default function Home() {
    return (
        <CustomCharactersProvider>
            <View style={styles.appContainer}>
                <View style={styles.logoContainer}>
                    <BatLogo/>
                </View>
                <View style={styles.inputContainer}>
                    <BatButton/>
                </View>
                <StatusBar style="light" />
            </View>
        </CustomCharactersProvider>
    )
}