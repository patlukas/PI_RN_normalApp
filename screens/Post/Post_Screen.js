import React, { useContext, useEffect, useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import CommentList_List from "../CommentList/CommentList_List";
import { api_post_get_post } from "../../api/api_post_get_post";
import { AccountDataContext } from "../../context/AccountDataContext";
import { api_comment_post_comment } from "../../api/api_comment_post_comment";
import { api_post_get_post_listComments } from "../../api/api_post_get_post_listComments";
import { api_comment_delete_comment } from "../../api/api_comment_delete_comment";
import { Button } from "react-native-paper";
import { api_post_delete_post } from "../../api/api_post_delete_post";

const Post_Screen = ({ route, navigation }) => {
    const { accountData } = useContext(AccountDataContext);
    const [postData, setPostData] = useState(false);
    const [listComments, setListComments] = useState([]);
    useEffect(() => {
        loadPosts();
    }, []);

    const onAddComment = async (newComment) => {
        await api_comment_post_comment(
            accountData.token,
            accountData.id,
            route.params.id,
            newComment
        );
        setListComments(
            await api_post_get_post_listComments(
                accountData.token,
                accountData.id,
                route.params.id
            )
        );
    };

    const loadPosts = async () => {
        setPostData(
            await api_post_get_post(
                accountData.token,
                accountData.id,
                route.params.id
            )
        );
        setListComments(
            await api_post_get_post_listComments(
                accountData.token,
                accountData.id,
                route.params.id
            )
        );
    };

    const onDelPost = async (idPost) => {
        await api_post_delete_post(accountData.token, idPost);
        navigation.goBack();
    };

    const onDelComment = async (idComment) => {
        await api_comment_delete_comment(accountData.token, idComment);
        setListComments(
            await api_post_get_post_listComments(
                accountData.token,
                accountData.id,
                route.params.id
            )
        );
    };

    if (postData === false) return null;
    console.log("P", postData);
    let delEl = null;
    if (postData.canDel) {
        delEl = (
            <Button mode="contained" onPress={() => onDelPost(postData.id)}>
                Del
            </Button>
        );
    }

    return (
        <View style={{ flex: 1 }}>
            <View style={{ height: "auto" }}>
                <Text style={styles.post_date}>{postData.date}</Text>
                <Text style={styles.post_content}>{postData.text}</Text>
                {delEl}
            </View>
            <CommentList_List
                data={listComments}
                onAddComment={(text) => onAddComment(text)}
                onDelComment={onDelComment}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    post_date: {
        textAlign: "center",
        fontSize: 16,
    },
    post_content: {
        color: "#555",
    },
});

export default Post_Screen;
