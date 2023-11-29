import React, { useContext, useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { AccountDataContext } from "../../context/AccountDataContext";
import { apiGetListTeamData } from "../../api/apiGetListTeamData";
import TeamList_List from "./TeamList_List";

const TeamList_Screen = ({ navigation }) => {
    const { accountData, setAccountData } = useContext(AccountDataContext);
    const [listTeamData, setListTeamData] = useState([]);
    useEffect(() => {
        loadListTeamData();
    }, []);
    useEffect(() => {
        if (accountData === false) {
            navigation.replace("Login_Screen");
            return () => {};
        }
    }, [accountData, navigation]);

    const loadListTeamData = async () => {
        const l = await apiGetListTeamData(accountData.token);
        setListTeamData(l);
    };

    return (
        <View>
            <TeamList_List data={listTeamData} navigation={navigation} />
        </View>
    );
};

const styles = StyleSheet.create({});

export default TeamList_Screen;
