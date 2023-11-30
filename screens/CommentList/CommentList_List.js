import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import CommentList_Element from "./CommentList_Element";
import CommentList_AddComment from "./CommentList_AddComment";

const CommentList_List = ({ data, onAddComment }) => {
    return (
        <View style={styles.container}>
            <CommentList_AddComment onAddComment={onAddComment} />
            <FlatList
                style={styles.flatList}
                data={data}
                renderItem={({ item }) => (
                    <CommentList_Element
                        name={item.name}
                        date={item.date}
                        content={item.content}
                    />
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    flatList: {
        height: "auto",
    },
});

export default CommentList_List;
