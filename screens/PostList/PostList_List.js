import React from "react";
import { FlatList, StyleSheet } from "react-native";
import PostList_Element from "./PostList_Element";

const PostList_List = ({ data }) => {
    return (
        <FlatList
            data={data}
            renderItem={({ item }) => (
                <PostList_Element name={item.name} date={item.date} content={item.content}/>
            )}
        />
    );
};

const styles = StyleSheet.create({});

export default PostList_List;
