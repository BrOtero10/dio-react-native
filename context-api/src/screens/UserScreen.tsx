import { Text, View } from "react-native";
import { useContext } from "react";
import { UserContext } from "../contexts/userContext";

export default function UserScreen() {

    const userContextValue = useContext(UserContext) 
    const nome = userContextValue?.loginName || "Nenhum nome salvo"

    return (
        <View>
            <Text style={{ fontSize: 20 }}>Bem vindo: {nome} </Text>
        </View>
    )
}