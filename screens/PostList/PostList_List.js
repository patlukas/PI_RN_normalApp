import React from "react";
import { FlatList, View, StyleSheet } from "react-native";
import PostList_Element from "./PostList_Element";
import BarPublishText from "../../components/BarPublishText";

const PostList_List = ({
    data,
    navigation,
    canAddPost = false,
    onAddPost = () => {},
    onDelPost = () => {},
}) => {
    const onSelectPost = (id) => {
        navigation.navigate("Post_Screen", { id });
    };

    return (
        <View style={styles.container_main}>
            <View style={styles.container_posts}>
                <FlatList
                    data={data}
                    renderItem={({ item }) => (
                        <PostList_Element
                            name={item.name}
                            date={item.date}
                            content={item.text}
                            comments={item.comments}
                            imageURL={item.imageURL}
                            canDel={item.canDel}
                            onDel={() => onDelPost(item.id)}
                            onPress={() => onSelectPost(item.id)}
                            commentBasic={true}
                            key={item.id}
                        />
                    )}
                />
            </View>
            <View style={styles.container_addPost}>
                {canAddPost ? (
                    <BarPublishText label={"Post"} onAdd={onAddPost} />
                ) : null}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container_main: {
        flex: 1,
    },
    container_addPost: {
        height: "auto",
    },
    container_posts: {
        flex: 1,
    },
});

export default PostList_List;
