import React from "react";
import { StyleSheet, Text } from "react-native";
import Card from "../../components/Card";

const PostList_Element = ({ date, content, onPress }) => {
    return (
        <Card backgroundColor="#ffc" onPress={onPress}>
            <Text style={styles.post_date}>{date}</Text>
            <Text style={styles.post_content}>{content}</Text>
        </Card>
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

export default PostList_Element;
