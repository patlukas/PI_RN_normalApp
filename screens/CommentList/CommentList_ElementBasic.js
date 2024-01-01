import React from "react";
import { StyleSheet, View, Text } from "react-native";

const CommentList_ElementBasic = ({ name, content }) => {
    return (
        <View style={styles.container_main}>
            <Text style={styles.txt_name}>{name}</Text>
            <Text style={styles.txt_content}>{content}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container_main: {
        width: "100%",
        flexDirection: "row",
    },
    txt_name: {
        color: "#9462E5",
        fontSize: 12,
        paddingRight: 5,
    },
    txt_content: {
        flex: 1,
        fontSize: 11,
    },
});

export default CommentList_ElementBasic;
