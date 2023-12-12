import React, { useContext, useEffect, useState } from "react";
import { View } from "react-native";
import { AccountDataContext } from "../../context/AccountDataContext";
import { api_tournament_get_listTournament } from "../../api/api_tournament_get_listTournament";
import TournamentList_List from "./TournamentList_List";

const TournamentList_Screen = ({ navigation }) => {
    const { accountData } = useContext(AccountDataContext);
    const [listTournamentData, setListTournamentData] = useState([]);
    useEffect(() => {
        loadListTournamentData();
    }, []);

    const loadListTournamentData = async () => {
        setListTournamentData(
            await api_tournament_get_listTournament(accountData.token)
        );
    };

    return (
        <View>
            <TournamentList_List
                data={listTournamentData}
                navigation={navigation}
            />
        </View>
    );
};

export default TournamentList_Screen;
