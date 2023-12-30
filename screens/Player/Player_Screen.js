import React, { useContext, useState } from "react";
import { AccountDataContext } from "../../context/AccountDataContext";
import { View, StyleSheet, ScrollView } from "react-native";
import { api_player_get_player } from "../../api/api_player_get_player";
import Player_Detail from "./Player_Detail";
import PostList_List from "../PostList/PostList_List";
import { api_player_get_player_listPosts } from "../../api/api_player_get_player_listPosts";
import { api_post_post_post } from "../../api/api_post_post_post";
import { api_post_delete_post } from "../../api/api_post_delete_post";
import { useFocusEffect } from "@react-navigation/native";

const Player_Screen = ({ route, navigation }) => {
    const { accountData } = useContext(AccountDataContext);
    const [playerData, setPlayerData] = useState(false);
    const [listPosts, setListPosts] = useState([]);

    useFocusEffect(
        React.useCallback(() => {
            loadData();
        }, [])
    );

    const loadData_player = async () => {
        setPlayerData(
            await api_player_get_player(accountData.token, route.params.id)
        );
    };
    const loadData_posts = async () => {
        setListPosts(
            await api_player_get_player_listPosts(
                accountData.token,
                route.params.id,
                accountData.id
            )
        );
    };

    const loadData = async () => {
        await loadData_player();
        await loadData_posts();
    };

    const onPressTeam = (id) => {
        navigation.navigate("Team_Screen", { id });
    };

    const onAddPost = async (text) => {
        await api_post_post_post(accountData.token, accountData.id, text);
        await loadData_posts();
    };
    const onDelPost = async (idPost) => {
        await api_post_delete_post(accountData.token, idPost);
        await loadData_posts();
    };

    if (playerData === false) return null;
    return (
        <View style={styles.container_main}>
            <View style={styles.container_head}>
                <Player_Detail
                    data={playerData}
                    onPressTeam={() => onPressTeam(playerData.id)}
                    canChangeImage={route.params.id === accountData.playerId}
                    afterChangeImage={loadData_player}
                />
            </View>
            <View style={styles.container_posts}>
                <PostList_List
                    data={listPosts}
                    navigation={navigation}
                    canAddPost={route.params.id === accountData.playerId}
                    onAddPost={onAddPost}
                    onDelPost={onDelPost}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container_main: {
        flex: 1,
    },
    container_head: {
        height: "auto",
    },
    container_posts: {
        flex: 1,
    },
});

export default Player_Screen;
