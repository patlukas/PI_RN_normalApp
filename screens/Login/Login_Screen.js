import React, { useContext, useState, useEffect } from "react";
import { StyleSheet, View } from "react-native";
import { TextInput, Button, Text } from "react-native-paper";
import { AccountDataContext } from "../../context/AccountDataContext";
import { api_auth_login } from "../../api/api_auth_login";
import DoubleBtn from "../../components/DoubleBtn";

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
        const newAccountData = await api_auth_login(username, password);
        if (newAccountData === false) {
            setPassword("");
            setError("Incorrect login details!");
        } else {
            setAccountData(newAccountData);
        }
    };

    return (
        <View style={styles.container_main}>
            <Text style={styles.txt_logo}>Playmaker</Text>
            <View style={styles.container_btn}>
                <TextInput
                    style={styles.input_txt}
                    label="Username"
                    value={username}
                    autoCapitalize="none"
                    onChangeText={(text) => setUsername(text)}
                />
                <TextInput
                    style={styles.input_txt}
                    label="Password"
                    value={password}
                    secureTextEntry={true}
                    autoCapitalize="none"
                    onChangeText={(text) => setPassword(text)}
                />
                <Text style={styles.txt_error}>{errorMessage}</Text>
            </View>
            <View style={styles.container_btn}>
                <DoubleBtn
                    title1="Log in"
                    onPress1={onLogIn}
                    title2="Sign up"
                    onPress2={() => navigation.push("Signup_Screen")}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container_main: {
        marginTop: 35,
    },
    txt_logo: {
        width: "100%",
        textAlign: "center",
        fontSize: 40,
        paddingTop: 70,
        paddingBottom: 110,
        color: "#9462E5",
        fontWeight: 700,
    },
    container_btn: {
        width: "80%",
        marginHorizontal: "10%",
        paddingVertical: 20,
    },
    input_txt: {
        marginVertical: 10,
        backgroundColor: "#ddd",
    },
    txt_error: {
        color: "#f55",
        fontSize: 16,
        fontWeight: 600,
    },
});

export default Login_Screen;
