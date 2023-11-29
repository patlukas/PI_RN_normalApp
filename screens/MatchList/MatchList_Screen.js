import React, { useContext, useEffect, useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { TextInput, Button, Text } from "react-native-paper";
import { AccountDataContext } from "../../context/AccountDataContext";
import { apiGetListMatchesData } from "../../api/apiGetListMatchesData";
import MatchList_List from "./MatchList_List";

const MatchList_Screen = ({ navigation }) => {
    const { accountData, setAccountData } = useContext(AccountDataContext);
    const [listMatchData, setListMatchData] = useState([]);
    useEffect(() => {
        loadListMatchData();
    }, []);
    useEffect(() => {
        if (accountData === false) {
            navigation.replace("Login_Screen");
            return () => {};
        }
    }, [accountData, navigation]);

    const loadListMatchData = async () => {
        const l = await apiGetListMatchesData(accountData.token);
        setListMatchData(l);
    };

    return <MatchList_List data={listMatchData} navigation={navigation} />;
};

const styles = StyleSheet.create({});

export default MatchList_Screen;
