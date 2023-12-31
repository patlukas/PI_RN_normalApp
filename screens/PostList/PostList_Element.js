import React from "react";
import { Image, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import CommentList_List from "../CommentList/CommentList_List";

const PostList_Element = ({
    date,
    content,
    name,
    comments,
    imageURL,
    canDel,
    onDel,
    onDelComment = null,
    onPress = null,
    onPressAuthor = null,
}) => {
    let delEl = null;
    if (canDel) {
        delEl = (
            <TouchableOpacity onPress={onDel}>
                <Image
                    source={require("../../assets/bin.png")}
                    style={styles.btn_del}
                />
            </TouchableOpacity>
        );
    }
    const Post = ({ isReadMore }) => {
        return (
            <>
                <View style={{ width: "auto" }}>
                    <Image
                        style={styles.image_profile}
                        source={{
                            uri:
                                imageURL + `?timestamp=${new Date().getTime()}`,
                        }}
                    />
                </View>
                <View style={{ flex: 1 }}>
                    <View style={styles.view_oneLine}>
                        <Text style={styles.txt_name}>{name}</Text>
                        {delEl}
                    </View>

                    <Text style={styles.txt_content}>{content}</Text>
                    <View style={[styles.view_oneLine, styles.footer]}>
                        <Text style={styles.txt_date}>{date}</Text>
                        {isReadMore ? (
                            <Text style={styles.txt_readMore}>Read more</Text>
                        ) : null}
                    </View>
                </View>
            </>
        );
    };
    const Comments = () => {
        return (
            <View style={styles.comment_container}>
                <CommentList_List data={comments} onDelComment={onDelComment} />
            </View>
        );
    };
    if (onPress !== null) {
        return (
            <TouchableOpacity onPress={onPress}>
                <View style={styles.post_container}>
                    <Post additionalText={"Read more"} />
                </View>
                <Comments />
            </TouchableOpacity>
        );
    }
    if (onPressAuthor !== null) {
        return (
            <View>
                <TouchableOpacity
                    onPress={onPressAuthor}
                    style={styles.post_container}
                >
                    <Post additionalText={"Read more"} />
                </TouchableOpacity>
                <Comments />
            </View>
        );
    }
    return (
        <View>
            <View style={styles.post_container}>
                <Post additionalText={"Read more"} />
            </View>
            <Comments />
        </View>
    );
};

const styles = StyleSheet.create({
    post_container: {
        paddingVertical: 7,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: "#9462E5",
        flexDirection: "row",
        width: "100%",
    },
    btn_del: {
        height: 20,
        width: 20,
        marginRight: 10,
        tintColor: "#9462E5",
    },
    view_oneLine: {
        width: "100%",
        flexDirection: "row",
    },
    txt_name: {
        flex: 1,
        fontSize: 19,
        fontWeight: "500",
        color: "#9462E5",
    },
    txt_content: {
        fontSize: 16,
    },
    txt_date: {
        flex: 1,
        color: "#666",
        fontSize: 13,
    },
    txt_readMore: {
        fontSize: 13,
        marginRight: 6,
        color: "#9462E5",
    },
    footer: {
        marginTop: 8,
    },
    image_profile: {
        height: 40,
        width: 40,
        margin: 5,
        borderRadius: 30,
    },
    comment_container: {
        maxHeight: "100%",
        paddingLeft: 50,
        width: "100%",
    },
});

export default PostList_Element;
