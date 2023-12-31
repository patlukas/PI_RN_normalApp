import React, { useContext, useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { api_post_get_post } from "../../api/api_post_get_post";
import { AccountDataContext } from "../../context/AccountDataContext";
import { api_comment_post_comment } from "../../api/api_comment_post_comment";
import { api_comment_delete_comment } from "../../api/api_comment_delete_comment";
import { api_post_delete_post } from "../../api/api_post_delete_post";
import PostList_Element from "../PostList/PostList_Element";
import CommentList_AddComment from "../CommentList/CommentList_AddComment";

const Post_Screen = ({ route, navigation }) => {
    const { accountData } = useContext(AccountDataContext);
    const [postData, setPostData] = useState(false);
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
        loadPosts();
    };

    const loadPosts = async () => {
        setPostData(
            await api_post_get_post(
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
        loadPosts();
    };

    if (postData === false) return null;

    const onPressAuthor = () => {
        if (postData.teamId !== null) {
            navigation.navigate("Team_Screen", { id: postData.teamId });
        } else if (postData.playerId !== null) {
            navigation.navigate("Player_Screen", {
                id: postData.author.playerId,
            });
        }
    };

    return (
        <View style={styles.view_main}>
            <View style={styles.view_post}>
                <PostList_Element
                    name={postData.name}
                    date={postData.date}
                    content={postData.text}
                    comments={postData.comments}
                    imageURL={postData.imageURL}
                    canDel={postData.canDel}
                    onDel={() => onDelPost(postData.id)}
                    onDelComment={onDelComment}
                    onPressAuthor={onPressAuthor}
                    key={postData.id}
                />
            </View>
            <CommentList_AddComment onAddComment={onAddComment} />
        </View>
    );
};

const styles = StyleSheet.create({
    view_main: {
        height: "100%",
    },
    view_post: {
        flex: 1,
        paddingBottom: 35,
    },
});

export default Post_Screen;
