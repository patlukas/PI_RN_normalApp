import React from "react";
import { StyleSheet, View } from "react-native";
import { Button, TextInput } from "react-native-paper";

const CommentList_AddComment = ({ onAddComment }) => {
    const [text, setText] = React.useState("");

    const beforeOnAddComment = () => {
        onAddComment(text);
        setText("");
    };

    return (
        <View style={styles.post_container}>
            <TextInput
                label="Comment"
                value={text}
                onChangeText={(text) => setText(text)}
                multiline={true}
            />
            <Button mode="contained" onPress={beforeOnAddComment}>
                Add comment
            </Button>
        </View>
    );
};

const styles = StyleSheet.create({
    post_container: {
        width: "100%",
        paddingVertical: "5%",
        paddingHorizontal: 10,
        borderBottomWidth: 2,
    },
});

export default CommentList_AddComment;
