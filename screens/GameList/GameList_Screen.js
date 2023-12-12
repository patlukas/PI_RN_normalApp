import React, { useContext, useEffect, useState } from "react";
import { AccountDataContext } from "../../context/AccountDataContext";
import { api_game_get_listGame } from "../../api/api_game_get_listGame";
import GameList_List from "./GameList_List";

const GameList_Screen = ({ navigation }) => {
    const { accountData } = useContext(AccountDataContext);
    const [listMatchData, setListMatchData] = useState([]);
    useEffect(() => {
        loadListMatchData();
    }, []);

    const loadListMatchData = async () => {
        setListMatchData(await api_game_get_listGame(accountData.token));
    };

    return <GameList_List data={listMatchData} navigation={navigation} />;
};

export default GameList_Screen;
