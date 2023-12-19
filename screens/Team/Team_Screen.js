import React, { useContext, useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";
import { AccountDataContext } from "../../context/AccountDataContext";
import Team_DetailBtn from "./Team_DetailBtn";
import GameList_List from "../GameList/GameList_List";
import TournamentList_List from "../TournamentList/TournamentList_List";
import PlayerList_List from "../PlayerList/PlayerList_List";
import PostList_List from "../PostList/PostList_List";
import { api_post_post_post } from "../../api/api_post_post_post";
import { api_team_get_team } from "../../api/api_team_get_team";
import { api_team_get_team_listPosts } from "../../api/api_team_get_team_listPosts";
import { api_team_get_team_listTournament } from "../../api/api_team_get_team_listTournament";
import { api_post_delete_post } from "../../api/api_post_delete_post";
import { useFocusEffect } from "@react-navigation/native";

const Team_Screen = ({ route, navigation }) => {
    const { accountData } = useContext(AccountDataContext);
    const [detailIndex, setDetailIndex] = useState(0);
    const [teamData, setTeamData] = useState(false);
    const [listPost, setListPost] = useState([]);
    const [listTournament, setListTournament] = useState([]);

    useFocusEffect(
        React.useCallback(() => {
            loadTeamData();
        }, [])
    );
    useEffect(() => {
        if (accountData === false) {
            navigation.replace("Login_Screen");
            return () => {};
        }
    }, [accountData, navigation]);
    const teamId = route.params.id;

    const loadTeamData = async () => {
        setTeamData(await api_team_get_team(accountData.token, teamId));
        setListPost(
            await api_team_get_team_listPosts(
                accountData.token,
                teamId,
                accountData.id
            )
        );
        setListTournament(
            await api_team_get_team_listTournament(accountData.token, teamId)
        );
    };

    const onAddPost = async (text) => {
        await api_post_post_post(accountData.token, accountData.id, text);
        setListPost(
            await api_team_get_team_listPosts(
                accountData.token,
                teamId,
                accountData.id
            )
        );
    };

    const onDelPost = async (idPost) => {
        await api_post_delete_post(accountData.token, idPost);
        setListPost(
            await api_team_get_team_listPosts(
                accountData.token,
                teamId,
                accountData.id
            )
        );
    };

    if (teamData === false) return null;

    let detail_el = [];
    if (detailIndex == 0) {
        detail_el = (
            <PostList_List
                data={listPost}
                navigation={navigation}
                canAddPost={route.params.id === accountData.teamId}
                onAddPost={onAddPost}
                onDelPost={onDelPost}
            />
        );
    } else if (detailIndex == 1) {
        detail_el = (
            <GameList_List data={teamData.listGame} navigation={navigation} />
        );
    } else if (detailIndex == 2) {
        detail_el = (
            <TournamentList_List
                data={listTournament}
                navigation={navigation}
            />
        );
    } else if (detailIndex == 3) {
        detail_el = (
            <PlayerList_List
                data={teamData.listPlayer}
                navigation={navigation}
            />
        );
    }

    return (
        <View style={styles.container}>
            <View style={styles.view_mainData}>
                <Text style={styles.txt_name}>
                    Name: {teamData.teamName} [{teamData.shortTeamName}]
                </Text>
                <Text style={styles.txt_city}>City: {teamData.city}</Text>
                <Text style={styles.txt_city}>
                    Coach: {teamData.coachFullName}
                </Text>
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
            <View style={styles.detailContainer}>{detail_el}</View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    view_mainData: {
        height: "auto",
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
    detailContainer: {
        flex: 1,
    },
});

export default Team_Screen;
