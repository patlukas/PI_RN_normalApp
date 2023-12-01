import React, { useContext, useEffect, useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import CommentList_List from "../CommentList/CommentList_List";
import { apiGetPostData } from "../../api/apiGetPostData";
import { AccountDataContext } from "../../context/AccountDataContext";
import { apiAddCommentToPost } from "../../api/apiAddCommentToPost";
import { apiGetListPostComments } from "../../api/apiGetListPostComments";

const Post_Screen = ({ route, navigation }) => {
    const { accountData, setAccountData } = useContext(AccountDataContext);
    const [postData, setPostData] = useState(false);
    const [listComments, setListComments] = useState([]);
    useEffect(() => {
        loadPosts();
    }, []);

    const onAddComment = async (newComment) => {
        await apiAddCommentToPost(
            accountData.id,
            route.params.id,
            accountData.token,
            newComment
        );
        setListComments(
            await apiGetListPostComments(
                accountData.id,
                route.params.id,
                accountData.token
            )
        );
    };

    const loadPosts = async () => {
        setPostData(await apiGetPostData(route.params.id, accountData.token));
        setListComments(
            await apiGetListPostComments(
                accountData.id,
                route.params.id,
                accountData.token
            )
        );
    };

    if (postData === false) return null;

    return (
        <View style={{ flex: 1 }}>
            <View style={{ height: "auto" }}>
                <Text style={styles.post_date}>{postData.date}</Text>
                <Text style={styles.post_content}>{postData.text}</Text>
            </View>
            <CommentList_List
                data={listComments}
                onAddComment={(text) => onAddComment(text)}
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
