import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import PostList_Element from "./PostList_Element";
import PostList_AddPost from "./PostList_AddPost";

const PostList_List = ({
    data,
    navigation,
    canAddPost = false,
    onAddPost = () => {},
}) => {
    const onSelectPost = (id) => {
        navigation.navigate("Post_Screen", { id });
    };

    return (
        <View>
            {canAddPost ? <PostList_AddPost onAddPost={onAddPost} /> : null}
            <FlatList
                data={data}
                renderItem={({ item }) => (
                    <PostList_Element
                        date={item.date}
                        content={item.text}
                        onPress={() => onSelectPost(item.id)}
                    />
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({});

export default PostList_List;
