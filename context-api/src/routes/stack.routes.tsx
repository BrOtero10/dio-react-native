import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "../screens/HomeScreen";
import UserScreen from "../screens/UserScreen";

import { UserContextProvider } from "../contexts/userContext";

export default function StackRoutes() {

    const { Navigator, Screen } = createStackNavigator()

    return (
        <UserContextProvider>
            <Navigator>
                <Screen name="Home" component={HomeScreen} />
                <Screen name="User" component={UserScreen} />
            </Navigator>
        </UserContextProvider>
    )
}