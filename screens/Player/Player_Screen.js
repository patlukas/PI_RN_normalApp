import React, { useContext, useState } from "react";
import { AccountDataContext } from "../../context/AccountDataContext";
import { View, StyleSheet } from "react-native";
import { api_player_get_player } from "../../api/api_player_get_player";
import Player_Detail from "./Player_Detail";
import PostList_List from "../PostList/PostList_List";
import { api_player_get_player_listPosts } from "../../api/api_player_get_player_listPosts";
import { api_post_post_post } from "../../api/api_post_post_post";
import { api_post_delete_post } from "../../api/api_post_delete_post";
import { useFocusEffect } from "@react-navigation/native";
import OptionBar from "../../components/OptionBar";
import Settings from "../../components/Settings";

const Player_Screen = ({ route, navigation }) => {
    const { accountData } = useContext(AccountDataContext);
    const [playerData, setPlayerData] = useState(false);
    const [listPosts, setListPosts] = useState([]);
    const [option, setOption] = useState(0);

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
    let selectedScreen = null;
    if (option === 0) {
        selectedScreen = (
            <PostList_List
                data={listPosts}
                navigation={navigation}
                canAddPost={route.params.id === accountData.playerId}
                onAddPost={onAddPost}
                onDelPost={onDelPost}
            />
        );
    } else if (option === 1) {
        selectedScreen = <Settings afterChangeImage={loadData_player} />;
    }

    let options = ["Posts"];
    if (route.params.id === accountData.playerId) {
        options.push("Settings");
    }

    if (playerData === false) return null;
    return (
        <View style={styles.container_main}>
            <Player_Detail
                data={playerData}
                onPressTeam={() => onPressTeam(playerData.id)}
            />
            <OptionBar
                options={options}
                selected={option}
                onSelect={setOption}
            />
            <View style={styles.container_posts}>{selectedScreen}</View>
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
