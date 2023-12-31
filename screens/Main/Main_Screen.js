import React, { useContext, useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import { AccountDataContext } from "../../context/AccountDataContext";
import { api_post_get_listPost } from "../../api/api_post_get_listPost";
import PostList_List from "../PostList/PostList_List";
import { api_post_delete_post } from "../../api/api_post_delete_post";
import { useFocusEffect } from "@react-navigation/native";

const Main_Screen = ({ navigation }) => {
    const { accountData } = useContext(AccountDataContext);
    const [listPost, setListPost] = useState([]);

    useFocusEffect(
        React.useCallback(() => {
            loadData();
        }, [])
    );

    const loadData = async () => {
        setListPost(
            await api_post_get_listPost(accountData.token, accountData.id)
        );
    };
    useEffect(() => {
        if (accountData === false) {
            navigation.replace("Login_Screen");
            return () => {};
        }
    }, [accountData, navigation]);

    const onDelPost = async (idPost) => {
        await api_post_delete_post(accountData.token, idPost);
        setListPost(
            await api_post_get_listPost(accountData.token, accountData.id)
        );
    };

    return (
        <PostList_List
            data={listPost}
            navigation={navigation}
            onDelPost={onDelPost}
        />
    );
};

const styles = StyleSheet.create({});

export default Main_Screen;
