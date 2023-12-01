import React from "react";
import { StyleSheet, View } from "react-native";
import { Button, TextInput } from "react-native-paper";

const PostList_AddPost = ({ onAddPost }) => {
    const [text, setText] = React.useState("");

    const beforeOnAddPost = () => {
        onAddPost(text);
        setText("");
    };

    return (
        <View style={styles.post_container}>
            <TextInput
                label="Post"
                value={text}
                onChangeText={(text) => setText(text)}
                multiline={true}
            />
            <Button mode="contained" onPress={beforeOnAddPost}>
                Add post
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

export default PostList_AddPost;
