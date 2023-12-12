import React, { useContext, useState, useEffect } from "react";
import { StyleSheet, View } from "react-native";
import { TextInput, Button, Text } from "react-native-paper";
import { AccountDataContext } from "../../context/AccountDataContext";
import { apiOnLogIn } from "../../api/apiOnLogIn";

const Login_Screen = ({ navigation }) => {
    const { accountData, setAccountData } = useContext(AccountDataContext);
    useEffect(() => {
        if (accountData !== false) {
            navigation.replace("Main_Screen");
            return () => {};
        }
    }, [accountData, navigation]);

    const [errorMessage, setError] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const onLogIn = async () => {
        const newAccountData = await apiOnLogIn(username, password);
        if (newAccountData === false) {
            setPassword("");
            setError("Incorrect login details!");
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
                autoCapitalize="none"
                onChangeText={(text) => setUsername(text)}
            />
            <TextInput
                label="Password"
                value={password}
                secureTextEntry={true}
                autoCapitalize="none"
                onChangeText={(text) => setPassword(text)}
            />
            <Button mode="contained" onPress={onLogIn}>
                Log in
            </Button>
            <Button
                mode="contained"
                onPress={() => navigation.push("Signup_Screen")}
            >
                Sign up
            </Button>
        </View>
    );
};

const styles = StyleSheet.create({});

export default Login_Screen;
