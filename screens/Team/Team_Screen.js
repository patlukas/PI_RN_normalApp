import React, { useContext, useEffect, useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { TextInput, Button, Text } from "react-native-paper";
import { AccountDataContext } from "../../context/AccountDataContext";
import { apiGetTeamData } from "../../api/apiGetTeamData";
import { apiGetTeamListPosts } from "../../api/apiGetTeamListPosts";
import Team_DetailBtn from "./Team_DetailBtn";
import MatchList_List from "../MatchList/MatchList_List";
import TournamentList_List from "../TournamentList/TournamentList_List";
import PlayerList_List from "../PlayerList/PlayerList_List";
import PostList_List from "../PostList/PostList_List";
import { apiGetListPlayerData } from "../../api/apiGetListPlayerData";

const Team_Screen = ({ route, navigation }) => {
    const { accountData, setAccountData } = useContext(AccountDataContext);
    const [detailIndex, setDetailIndex] = useState(0);
    const [teamData, setTeamData] = useState(false);
    const [listPost, setListPost] = useState([]);
    const [listPlayer, setListPlayer] = useState([]);
    useEffect(() => {
        loadTeamData();
    }, []);
    useEffect(() => {
        if (accountData === false) {
            navigation.replace("Login_Screen");
            return () => {};
        }
    }, [accountData, navigation]);
    const teamId = route.params.id;

    const loadTeamData = async () => {
        setTeamData(await apiGetTeamData(teamId, accountData.token));
        setListPost(await apiGetTeamListPosts(teamId, accountData.token));
        setListPlayer(await apiGetListPlayerData(accountData.token, teamId));
    };

    if (teamData === false) {
        return null;
    }

    let detail_el = [];
    if (detailIndex == 0) {
        detail_el = <PostList_List data={listPost} navigation={navigation} />;
    } else if (detailIndex == 1) {
        detail_el = (
            <MatchList_List
                data={teamData.listMatches}
                navigation={navigation}
            />
        );
    } else if (detailIndex == 2) {
        detail_el = (
            <TournamentList_List
                data={teamData.listTournaments}
                navigation={navigation}
            />
        );
    } else if (detailIndex == 3) {
        detail_el = (
            <PlayerList_List data={listPlayer} navigation={navigation} />
        );
    }

    return (
        <View>
            <View style={styles.view_mainData}>
                <Text style={styles.txt_name}>Name: {teamData.name}</Text>
                <Text style={styles.txt_city}>City: {teamData.city}</Text>
                <Text style={styles.txt_city}>Coach: {teamData.coach}</Text>
            </View>
            <View style={styles.Team_DetailBtnContainer}>
                <Team_DetailBtn
                    title="Posts"
                    onPress={() => setDetailIndex(0)}
                    isSelected={detailIndex == 0}
                />
                <Team_DetailBtn
                    title="Matches"
                    onPress={() => setDetailIndex(1)}
                    isSelected={detailIndex == 1}
                />
                <Team_DetailBtn
                    title="Tournaments"
                    onPress={() => setDetailIndex(2)}
                    isSelected={detailIndex == 2}
                />
                <Team_DetailBtn
                    title="Players"
                    onPress={() => setDetailIndex(3)}
                    isSelected={detailIndex == 3}
                />
            </View>
            {detail_el}
        </View>
    );
};

const styles = StyleSheet.create({
    view_mainData: {
        backgroundColor: "#ccf",
        paddingHorizontal: 15,
        paddingVertical: "5%",
    },
    txt_name: {
        textAlign: "center",
        fontSize: 18,
        fontWeight: 700,
    },
    txt_city: {
        textAlign: "center",
        fontSize: 16,
    },
    Team_DetailBtnContainer: {
        flexDirection: "row",
    },
});

export default Team_Screen;
