import React, { useContext, useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { AccountDataContext } from "../../context/AccountDataContext";
import { api_team_get_listTeams } from "../../api/api_team_get_listTeams";
import TeamList_List from "./TeamList_List";

const TeamList_Screen = ({ navigation }) => {
    const { accountData } = useContext(AccountDataContext);
    const [listTeamData, setListTeamData] = useState([]);
    useEffect(() => {
        loadListTeamData();
    }, []);

    const loadListTeamData = async () => {
        setListTeamData(await api_team_get_listTeams(accountData.token));
    };

    return (
        <View>
            <TeamList_List data={listTeamData} navigation={navigation} />
        </View>
    );
};

export default TeamList_Screen;
