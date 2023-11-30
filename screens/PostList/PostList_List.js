import React from "react";
import { FlatList, StyleSheet } from "react-native";
import PostList_Element from "./PostList_Element";

const PostList_List = ({ data, navigation }) => {
    const onSelectPost = (id) => {
        navigation.navigate("Post_Screen", { id });
    };

    return (
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
    );
};

const styles = StyleSheet.create({});

export default PostList_List;
