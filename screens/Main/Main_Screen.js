import React, { useContext, useEffect } from "react";
import { StyleSheet, View } from "react-native";
import { TextInput, Button, Text } from "react-native-paper";
import { AccountDataContext } from "../../context/AccountDataContext";

const Main_Screen = ({ navigation }) => {
    const { accountData, setAccountData } = useContext(AccountDataContext);
    useEffect(() => {
        if (accountData === false) {
            console.log("No login");
            navigation.replace("Login_Screen");
            return () => {};
        }
    }, [accountData, navigation]);

    const onLogout = () => {
        setAccountData(false);
    };

    return (
        <View>
            <Button
                mode="contained"
                onPress={() => navigation.push("TeamList_Screen")}
            >
                Lista zespołów
            </Button>
            <Button
                mode="contained"
                onPress={() => navigation.push("MatchList_Screen")}
            >
                Lista meczy
            </Button>
            <Button
                mode="contained"
                onPress={() => navigation.push("TournamentList_Screen")}
            >
                Lista turniejów
            </Button>
            <Button
                mode="contained"
                onPress={() => navigation.push("PlayerList_Screen")}
            >
                Lista zawodników
            </Button>
            <Button mode="contained" onPress={onLogout}>
                Wyloguj
            </Button>
        </View>
    );
};

const styles = StyleSheet.create({});

export default Main_Screen;
