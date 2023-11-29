import React, { useContext, useEffect } from "react";
import { StyleSheet, View } from "react-native";
import { AccountDataContext } from "../../context/AccountDataContext";
import { apiGetListTournamentData } from "../../api/apiGetListTournamentData";
import TournamentList_List from "./TournamentList_List";

const TournamentList_Screen = ({ navigation }) => {
    const { accountData, setAccountData } = useContext(AccountDataContext);
    useEffect(() => {
        if (accountData === false) {
            navigation.replace("Login_Screen");
            return () => {};
        }
    }, [accountData, navigation]);

    const listTournamentData = apiGetListTournamentData(accountData.token);

    return (
        <View>
            <TournamentList_List data={listTournamentData} navigation={navigation} />
        </View>
    );
};

const styles = StyleSheet.create({});

export default TournamentList_Screen;
