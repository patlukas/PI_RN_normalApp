import React from "react";
import { StyleSheet, View, Text } from "react-native";

const CommentList_Element = ({ name, date, content }) => {
    return (
        <View style={styles.post_container}>
            <Text style={styles.post_name}>{name}</Text>
            <Text style={styles.post_date}>{date}</Text>
            <Text style={styles.post_content}>{content}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    post_container: {
        width: "100%",
        paddingVertical: "5%",
        paddingHorizontal: 5,
        borderBottomWidth: 2,
    },
    post_name: {
        textAlign: "center",
        fontSize: 16,
        fontWeight: "bold",
    },
    post_date: {
        textAlign: "center",
        fontSize: 14,
    },
    post_content: {
        color: "#555",
    },
});

export default CommentList_Element;
