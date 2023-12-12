import React, { useContext, useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import { AccountDataContext } from "../../context/AccountDataContext";
import { api_game_get_listGame } from "../../api/api_game_get_listGame";
import MatchList_List from "./MatchList_List";

const MatchList_Screen = ({ navigation }) => {
    const { accountData } = useContext(AccountDataContext);
    const [listMatchData, setListMatchData] = useState([]);
    useEffect(() => {
        loadListMatchData();
    }, []);

    const loadListMatchData = async () => {
        setListMatchData(await api_game_get_listGame(accountData.token));
    };

    return <MatchList_List data={listMatchData} navigation={navigation} />;
};

export default MatchList_Screen;
