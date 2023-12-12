import React, { useContext, useEffect, useState } from "react";
import { View } from "react-native";
import { AccountDataContext } from "../../context/AccountDataContext";
import PlayerList_List from "./PlayerList_List";
import { api_player_get_listPlayers } from "../../api/api_player_get_listPlayers";

const TeamList_Screen = ({ navigation }) => {
    const { accountData } = useContext(AccountDataContext);
    const [listPlayerData, setListPlayerData] = useState([]);
    useEffect(() => {
        loadListPlayerData();
    }, []);

    const loadListPlayerData = async () => {
        setListPlayerData(await api_player_get_listPlayers(accountData.token));
    };

    return (
        <View>
            <PlayerList_List data={listPlayerData} navigation={navigation} />
        </View>
    );
};

export default TeamList_Screen;
