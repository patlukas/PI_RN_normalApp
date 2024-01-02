import React, { useContext, useState, useEffect } from "react";
import {
    ScrollView,
    StyleSheet,
    View,
    KeyboardAvoidingView,
} from "react-native";
import { TextInput, Button, Text } from "react-native-paper";
import { AccountDataContext } from "../../context/AccountDataContext";
import { api_auth_register } from "../../api/api_auth_register";
import DoubleBtn from "../../components/DoubleBtn";

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
        const message = await api_auth_register(
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
        navigation.push("Login_Screen");
    };

    return (
        <ScrollView style={styles.container_main}>
            <View style={styles.container}>
                <Text style={styles.txt_logo}>Playmaker</Text>
                <View>
                    <TextInput
                        style={styles.input_txt}
                        label="Username"
                        value={username}
                        autoCapitalize="none"
                        onChangeText={(text) => setUsername(text)}
                    />
                    <TextInput
                        style={styles.input_txt}
                        label="First Name"
                        value={firstName}
                        onChangeText={(text) => setFirstName(text)}
                    />
                    <TextInput
                        style={styles.input_txt}
                        label="Last Name"
                        value={lastName}
                        onChangeText={(text) => setLastName(text)}
                    />
                    <TextInput
                        style={styles.input_txt}
                        label="E-Mail"
                        value={email}
                        autoCapitalize="none"
                        onChangeText={(text) => setEmail(text)}
                    />
                    <TextInput
                        style={styles.input_txt}
                        label="Password"
                        value={password}
                        secureTextEntry={true}
                        autoCapitalize="none"
                        onChangeText={(text) => setPassword(text)}
                    />
                    <View>
                        <TextInput
                            style={styles.input_txt}
                            label="Repeat password"
                            value={password2}
                            secureTextEntry={true}
                            autoCapitalize="none"
                            onChangeText={(text) => setPassword2(text)}
                        />

                        <View style={styles.container_alert}>
                            <Text style={styles.txt_error}>{errorMessage}</Text>
                            <Text style={styles.txt_success}>
                                {successMessage}
                            </Text>
                        </View>

                        <DoubleBtn
                            title1="Sign up"
                            title2="Log in"
                            onPress1={onSignUp}
                            onPress2={onReturnToLoginScreen}
                        />
                    </View>
                </View>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container_main: { height: "100%" },
    container: {
        paddingTop: 35,
        width: "80%",
        marginHorizontal: "10%",
    },
    container_alert: {
        flexDirection: "row",
    },
    txt_logo: {
        width: "100%",
        textAlign: "center",
        fontSize: 40,
        paddingTop: 70,
        color: "#9462E5",
        fontWeight: 700,
    },
    txt_error: {
        color: "#f55",
        fontSize: 16,
        fontWeight: 600,
    },
    txt_success: {
        color: "#5f5",
        fontSize: 16,
        fontWeight: 600,
    },
    input_txt: {
        backgroundColor: "#ddd",
        marginTop: "5%",
    },
});

export default Signup_Screen;
