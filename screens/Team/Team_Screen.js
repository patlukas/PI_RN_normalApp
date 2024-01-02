import React, { useContext, useEffect, useState } from "react";
import { StyleSheet, View, Image, TouchableOpacity } from "react-native";
import { Text } from "react-native-paper";
import { AccountDataContext } from "../../context/AccountDataContext";
import MatchList_List from "../MatchList/MatchList_List";
import TournamentList_List from "../TournamentList/TournamentList_List";
import PlayerList_List from "../PlayerList/PlayerList_List";
import PostList_List from "../PostList/PostList_List";
import { api_post_post_post } from "../../api/api_post_post_post";
import { api_team_get_team } from "../../api/api_team_get_team";
import { api_team_get_team_listPosts } from "../../api/api_team_get_team_listPosts";
import { api_team_get_team_listTournament } from "../../api/api_team_get_team_listTournament";
import { api_post_delete_post } from "../../api/api_post_delete_post";
import { useFocusEffect } from "@react-navigation/native";
import OptionBar from "../../components/OptionBar";
import Settings from "../../components/Settings";

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

    const loadPosts = async () => {
        setListPost(
            await api_team_get_team_listPosts(
                accountData.token,
                teamId,
                accountData.id
            )
        );
    };

    const loadTeamData = async () => {
        setTeamData(await api_team_get_team(accountData.token, teamId));
        await loadPosts();
        setListTournament(
            await api_team_get_team_listTournament(accountData.token, teamId)
        );
    };

    const onAddPost = async (text) => {
        await api_post_post_post(accountData.token, accountData.id, text);
        await loadPosts();
    };

    const onDelPost = async (idPost) => {
        await api_post_delete_post(accountData.token, idPost);
        await loadPosts();
    };

    if (teamData === false) return null;

    let settingsBtn = null;
    if (route.params.id === accountData.teamId) {
        settingsBtn = (
            <TouchableOpacity
                onPress={() => setDetailIndex(4)}
                style={{ flexDirection: "column-reverse" }}
            >
                <Image
                    source={require("../../assets/settings.png")}
                    style={[
                        styles.btn_settings,
                        detailIndex == 4 ? styles.btn_settings_selected : null,
                    ]}
                />
            </TouchableOpacity>
        );
    }

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
            <MatchList_List data={teamData.listGame} navigation={navigation} />
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
    } else if (detailIndex == 4) {
        detail_el = <Settings afterChangeImage={loadTeamData} />;
    }

    return (
        <View style={styles.container}>
            <View style={styles.view_mainData}>
                <Image
                    style={styles.image}
                    source={{
                        uri:
                            teamData.imageURL +
                            `?timestamp=${parseInt(
                                new Date().getTime() / 60000
                            )}`,
                    }}
                />
                <View style={{ flex: 1 }}>
                    <Text style={styles.txt_name}>
                        {teamData.teamName} [{teamData.shortTeamName}]
                    </Text>
                    <View style={styles.container_settings}>
                        <View style={styles.container_city_and_coach}>
                            <Text style={styles.txt_city}>{teamData.city}</Text>
                            <Text style={styles.txt_city}>
                                Coach: {teamData.coachFullName}
                            </Text>
                        </View>
                        {settingsBtn}
                    </View>
                </View>
            </View>
            <OptionBar
                options={["Posts", "Matches", "Tournaments", "Players"]}
                selected={detailIndex}
                onSelect={setDetailIndex}
            />
            <View style={styles.detailContainer}>{detail_el}</View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    view_mainData: {
        flexDirection: "row",
        height: "auto",
        paddingRight: 15,
        paddingLeft: 8,
        paddingBottom: "5%",
        paddingTop: 10,
    },
    txt_name: {
        fontSize: 20,
        fontWeight: "700",
        paddingTop: 5,
    },
    txt_city: {
        fontSize: 14,
    },
    detailContainer: {
        flex: 1,
    },
    image: {
        height: 60,
        width: 60,
        margin: 5,
        marginRight: 10,
        borderRadius: 30,
    },
    btn_settings: {
        height: 30,
        width: 30,
        marginRight: 5,
        tintColor: "#888",
    },
    btn_settings_selected: {
        tintColor: "#9462E5",
    },
    container_settings: {
        flexDirection: "row",
    },
    container_city_and_coach: {
        flex: 1,
    },
});

export default Team_Screen;
