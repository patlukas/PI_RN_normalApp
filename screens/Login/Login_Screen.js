import React, { useContext, useState, useEffect } from "react";
import { StyleSheet, View } from "react-native";
import { TextInput, Button, Text } from "react-native-paper";
import { AccountDataContext } from "../../context/AccountDataContext";
import { apiOnLogIn } from "../../api/apiOnLogIn";

const Login_Screen = ({ navigation }) => {
    const { accountData, setAccountData } = useContext(AccountDataContext);
    useEffect(() => {
        if (accountData !== false) {
            console.log("login");
            navigation.replace("Main_Screen");
            return () => {};
        }
    }, [accountData, navigation]);

    const [errorMessage, setError] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const onLogIn = () => {
        const newAccountData = apiOnLogIn(username, password);
        if (newAccountData === false) {
            setPassword("");
            setError("Błędne dane");
        } else {
            setAccountData(newAccountData);
        }
    };

    return (
        <View>
            <Text variant="titleMedium">{errorMessage}</Text>
            <TextInput
                label="Username"
                value={username}
                onChangeText={(text) => setUsername(text)}
            />
            <TextInput
                label="Password"
                value={password}
                secureTextEntry={true}
                onChangeText={(text) => setPassword(text)}
            />
            <Button mode="contained" onPress={onLogIn}>
                Połącz
            </Button>
        </View>
    );
};

const styles = StyleSheet.create({});

export default Login_Screen;
