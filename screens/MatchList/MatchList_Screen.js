import React, { useContext, useEffect } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { TextInput, Button, Text } from "react-native-paper";
import { AccountDataContext } from "../../context/AccountDataContext";
import { apiGetListMatchesData } from "../../api/apiGetListMatchesData";
import MatchList_List from "./MatchList_List";

const MatchList_Screen = ({ navigation }) => {
    const { accountData, setAccountData } = useContext(AccountDataContext);
    useEffect(() => {
        if (accountData === false) {
            navigation.replace("Login_Screen");
            return () => {};
        }
    }, [accountData, navigation]);

    const lisMatchesData = apiGetListMatchesData(accountData.token);

    return <MatchList_List data={lisMatchesData} navigation={navigation} />;
};

const styles = StyleSheet.create({});

export default MatchList_Screen;
