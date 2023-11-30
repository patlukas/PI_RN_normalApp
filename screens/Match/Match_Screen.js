import React, { useContext, useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { AccountDataContext } from "../../context/AccountDataContext";
import { apiGetMatchData } from "../../api/apiGetMatchData";
import PostList_List from "../PostList/PostList_List";
import Match_Detail from "./Match_Detail";

const Match_Screen = ({ route, navigation }) => {
    const { accountData, setAccountData } = useContext(AccountDataContext);
    const [matchData, setMatchData] = useState(false);
    useEffect(() => {
        loadMatchData();
    }, []);

    const loadMatchData = async () => {
        const l = await apiGetMatchData(route.params.id, accountData.token);
        setMatchData(l);
    };

    const onSelectTeam = (id) => {
        navigation.push("Team_Screen", { id });
    };

    if (matchData === false) {
        return null;
    }

    return (
        <View>
            <Match_Detail
                teams={matchData.teams}
                winner={matchData.winner}
                setNow={matchData.setNow}
                date={matchData.date}
                onSelectTeam={onSelectTeam}
            />
            <PostList_List data={matchData.listPosts} />
        </View>
    );
};

const styles = StyleSheet.create({});

export default Match_Screen;
