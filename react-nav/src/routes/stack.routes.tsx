// Contexto de Rotas

import { createStackNavigator } from '@react-navigation/stack'

const { Screen, Navigator } = createStackNavigator()

import Home from '../screens/HomeScreen'
import Gallery from '../screens/GalleryScreen'

export default function StackRoutes() {
    return (
        <Navigator>
            <Screen
                name='home' component={Home} 
                options={{
                    title: 'Main Menu', headerTintColor: 'blue',
                    // headerShown: false
                }}

            />
            <Screen
                name='gallery' component={Gallery}
            />
        </Navigator>
    )
}