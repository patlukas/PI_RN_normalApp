import React, { useContext, useEffect } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { TextInput, Button, Text } from "react-native-paper";
import { AccountDataContext } from "../../context/AccountDataContext";
import { apiGetListTeamData } from "../../api/apiGetListTeamData";
import TeamList_Element from "./TeamList_Element";
import TeamList_List from "./TeamList_List";

const TeamList_Screen = ({ navigation }) => {
    const { accountData, setAccountData } = useContext(AccountDataContext);
    useEffect(() => {
        if (accountData === false) {
            navigation.replace("Login_Screen");
            return () => {};
        }
    }, [accountData, navigation]);

    const listTeamData = apiGetListTeamData(accountData.token);

    return (
        <View>
            <TeamList_List data={listTeamData} navigation={navigation} />
        </View>
    );
};

const styles = StyleSheet.create({});

export default TeamList_Screen;
