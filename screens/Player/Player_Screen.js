import React, { useContext, useEffect, useState } from "react";
import { AccountDataContext } from "../../context/AccountDataContext";
import { StyleSheet, View, Text } from "react-native";
import { apiGetPlayerData } from "../../api/apiGetPlayerData";
import Player_Detail from "./Player_Detail";
import PostList_List from "../PostList/PostList_List";
import { apiGetPlayerListPosts } from "../../api/apiGetPlayerListPosts";
import { apiAddPost } from "../../api/apiAddPost";

const Player_Screen = ({ route, navigation }) => {
    const { accountData, setAccountData } = useContext(AccountDataContext);
    const [playerData, setPlayerData] = useState(false);
    const [listPosts, setListPosts] = useState([]);
    useEffect(() => {
        loadData();
    }, []);

    const loadData = async () => {
        setPlayerData(
            await apiGetPlayerData(route.params.id, accountData.token)
        );
        setListPosts(
            await apiGetPlayerListPosts(route.params.id, accountData.token)
        );
    };

    const onPressTeam = (id) => {
        navigation.navigate("Team_Screen", { id });
    };

    const onAddPost = async (text) => {
        await apiAddPost(accountData.id, text, accountData.token);
        setListPosts(
            await apiGetPlayerListPosts(route.params.id, accountData.token)
        );
    };

    return (
        <View>
            <Player_Detail
                data={playerData}
                onPressTeam={() => onPressTeam(playerData.id)}
            />
            <PostList_List
                data={listPosts}
                navigation={navigation}
                canAddPost={route.params.id === accountData.playerId}
                onAddPost={onAddPost}
            />
        </View>
    );
};

const styles = StyleSheet.create({});

export default Player_Screen;
