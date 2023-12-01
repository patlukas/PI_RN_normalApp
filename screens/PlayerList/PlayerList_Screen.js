import React, { useContext, useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { AccountDataContext } from "../../context/AccountDataContext";
import PlayerList_List from "./PlayerList_List";
import { apiGetListPlayerData } from "../../api/apiGetListPlayerData";

const TeamList_Screen = ({ navigation }) => {
    const { accountData, setAccountData } = useContext(AccountDataContext);
    const [listPlayerData, setListPlayerData] = useState([]);
    useEffect(() => {
        loadListPlayerData();
    }, []);

    const loadListPlayerData = async () => {
        setListPlayerData(await apiGetListPlayerData(accountData.token));
    };

    return (
        <View>
            <PlayerList_List data={listPlayerData} navigation={navigation} />
        </View>
    );
};

const styles = StyleSheet.create({});

export default TeamList_Screen;
