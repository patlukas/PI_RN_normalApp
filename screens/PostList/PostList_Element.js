import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Card from "../../components/Card";
import { Button } from "react-native-paper";

const PostList_Element = ({
    date,
    content,
    name,
    comments,
    canDel,
    onDel,
    onPress,
}) => {
    let delEl = null;
    if (canDel) {
        delEl = (
            <Button mode="contained" onPress={onDel}>
                Del
            </Button>
        );
    }
    let elComments = [];
    for (const comment of comments) {
        elComments.push(
            <View style={styles.comment_container} key={comment.id}>
                <Text style={styles.comment_head}>
                    {comment.name} ({comment.date})
                </Text>
                <Text style={styles.comment_body}>{comment.text}</Text>
            </View>
        );
    }
    return (
        <Card backgroundColor="#ffc" onPress={onPress}>
            {name ? <Text style={styles.post_date}>{name}</Text> : null}
            <Text style={styles.post_date}>{date}</Text>
            <Text style={styles.post_content}>{content}</Text>
            {elComments}
            {delEl}
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
        fontSize: 15,
        paddingBottom: 8,
    },
    comment_container: {
        borderTopWidth: 1,
        marginTop: 6,
        paddingTop: 6,
    },
    comment_head: {
        textAlign: "center",
    },
    comment_body: {
        textAlign: "center",
    },
});

export default PostList_Element;
