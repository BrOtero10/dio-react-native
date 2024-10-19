import { createDrawerNavigator } from '@react-navigation/drawer'
import Home from '../screens/HomeScreen'
import Gallery from '../screens/GalleryScreen'

const { Navigator, Screen } = createDrawerNavigator()

export default function DrawerRoutes() {
    return (
        <Navigator>
            <Screen
                name='home' component={Home}
            />
            <Screen
                name='gallery' component={Gallery}
            />
        </Navigator>
    )
    
}