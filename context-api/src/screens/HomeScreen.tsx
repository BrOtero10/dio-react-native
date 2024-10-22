import { useState } from "react";
import { TextInput, View, Button } from "react-native";

import { StackNavigationProp } from "@react-navigation/stack"

import { useContext } from "react";
import { UserContext } from "../contexts/userContext";

export default function HomeScreen({ navigation }: any) {

    const userContextValues = useContext(UserContext);

    const [inputText, setInputText] = useState("");

    const navigateToUserScreen = () => {
        userContextValues?.save(inputText)
        navigation.navigate("User", { username: inputText });
    }

    return (
        <View>
            <TextInput placeholder="Digite seu nome..."
                value={inputText} onChangeText={text => setInputText(text)}
            />
            <Button title="Logar" onPress={navigateToUserScreen} />
        </View>
    )
}