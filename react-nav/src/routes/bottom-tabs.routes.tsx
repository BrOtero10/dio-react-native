// Contexto de Rotas

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import Home from '../screens/HomeScreen'
import Gallery from '../screens/GalleryScreen'

const { Navigator, Screen } = createBottomTabNavigator()

export default function BottomTabsRoutes() {
    return (
        <Navigator>
            <Screen 
                name='home' component={Home}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons
                            name='home'
                            color={color}
                            size={size}
                        />
                    ),
                    title: 'Home',
                }}
            />
            <Screen 
                name='gallery' component={Gallery}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons
                            name='view-gallery'
                            color={color}
                            size={size}
                        />
                    ),
                    title: 'Gallery'
                }}
            />
        </Navigator>
    )
}