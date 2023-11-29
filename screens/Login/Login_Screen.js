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
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const onLogIn = async () => {
        const newAccountData = await apiOnLogIn(email, password);
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
                label="Email"
                value={email}
                onChangeText={(text) => setEmail(text)}
            />
            <TextInput
                label="Password"
                value={password}
                secureTextEntry={true}
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
