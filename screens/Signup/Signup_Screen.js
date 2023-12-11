import React, { useContext, useState, useEffect } from "react";
import { StyleSheet, View } from "react-native";
import { TextInput, Button, Text } from "react-native-paper";
import { AccountDataContext } from "../../context/AccountDataContext";
import { apiOnSignUp } from "../../api/apiOnSignUp";

const Signup_Screen = ({ navigation }) => {
    const { accountData, setAccountData } = useContext(AccountDataContext);
    useEffect(() => {
        if (accountData !== false) {
            navigation.replace("Main_Screen");
            return () => {};
        }
    }, [accountData, navigation]);

    const [errorMessage, setErrorMessage] = useState("");
    const [successMessage, setSuccessMessage] = useState("");
    const [username, setUsername] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");

    const onSignUp = async () => {
        const message = await apiOnSignUp(
            username,
            firstName,
            lastName,
            email,
            password,
            password2
        );
        if (message !== "") {
            setSuccessMessage("");
            setErrorMessage(message);
        } else {
            setSuccessMessage("Account created!");
            setErrorMessage("");
            setUsername("");
            setFirstName("");
            setLastName("");
            setEmail("");
            setPassword("");
            setPassword2("");
        }
    };

    const onReturnToLoginScreen = () => {
        navigation.navigate("Login_Screen");
    };

    return (
        <View>
            <Text variant="titleMedium">{errorMessage}</Text>
            <Text variant="titleMedium">{successMessage}</Text>
            <TextInput
                label="Username"
                value={username}
                autoCapitalize="none"
                onChangeText={(text) => setUsername(text)}
            />
            <TextInput
                label="First Name"
                value={firstName}
                onChangeText={(text) => setFirstName(text)}
            />
            <TextInput
                label="Last Name"
                value={lastName}
                onChangeText={(text) => setLastName(text)}
            />
            <TextInput
                label="E-Mail"
                value={email}
                autoCapitalize="none"
                onChangeText={(text) => setEmail(text)}
            />
            <TextInput
                label="Password"
                value={password}
                secureTextEntry={true}
                autoCapitalize="none"
                onChangeText={(text) => setPassword(text)}
            />
            <TextInput
                label="Repeat password"
                value={password2}
                secureTextEntry={true}
                autoCapitalize="none"
                onChangeText={(text) => setPassword2(text)}
            />
            <Button mode="contained" onPress={onSignUp}>
                Sign Up
            </Button>
            <Button mode="contained" onPress={onReturnToLoginScreen}>
                Back to login
            </Button>
        </View>
    );
};

const styles = StyleSheet.create({});

export default Signup_Screen;
