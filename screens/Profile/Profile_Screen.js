import React, { useContext } from "react";
import { StyleSheet } from "react-native";
import { AccountDataContext } from "../../context/AccountDataContext";
import Player_Screen from "../Player/Player_Screen";
import Team_Screen from "../Team/Team_Screen";
import User_Screen from "../User/User_Screen";

const Profile_Screen = ({ navigation }) => {
    const { accountData } = useContext(AccountDataContext);

    if (accountData.playerId !== null) {
        return (
            <Player_Screen
                navigation={navigation}
                route={{ params: { id: accountData.playerId } }}
            />
        );
    }
    if (accountData.teamId !== null) {
        return (
            <Team_Screen
                navigation={navigation}
                route={{ params: { id: accountData.teamId } }}
            />
        );
    }
    return (
        <User_Screen
            navigation={navigation}
            route={{ params: { id: accountData.id } }}
        />
    );
};

const styles = StyleSheet.create({});

export default Profile_Screen;
