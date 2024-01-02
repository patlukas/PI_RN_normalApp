import React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";

const CommentList_Element = ({
    id,
    name,
    date,
    content,
    imageURL,
    canDel,
    onDel,
    addBorder,
}) => {
    let delEl = null;
    if (canDel && onDel !== null) {
        delEl = (
            <TouchableOpacity onPress={() => onDel(id)}>
                <Image
                    source={require("../../assets/bin.png")}
                    style={styles.btn_del}
                />
            </TouchableOpacity>
        );
    }
    return (
        <View
            style={[
                styles.container_main,
                addBorder ? styles.container_main_border : null,
            ]}
        >
            <Image
                style={styles.image_profile}
                source={{
                    uri:
                        imageURL +
                        `?timestamp=${parseInt(new Date().getTime() / 60000)}`,
                }}
            />
            <View style={styles.container_right}>
                <View style={styles.view_oneLine}>
                    <Text style={styles.txt_name}>{name}</Text>
                    <Text style={styles.txt_date}>{date}</Text>
                </View>
                <Text style={styles.txt_content}>{content}</Text>
                <View style={styles.view_btnDel}>{delEl}</View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container_main: {
        width: "100%",
        paddingRight: 10,
        paddingTop: 5,
        paddingBottom: 9,
        flexDirection: "row",
    },
    container_main_border: {
        borderBottomWidth: 1,
        borderColor: "#ddd",
    },
    container_right: {
        flex: 1,
    },
    view_oneLine: {
        flexDirection: "row",
        width: "100%",
    },
    txt_name: {
        color: "#9462E5",
        fontSize: 13,
        fontWeight: "400",
        flex: 1,
    },
    txt_date: {
        color: "#666",
        width: "auto",
        fontSize: 8,
    },
    txt_content: {},
    view_btnDel: {
        width: "100%",
        flexDirection: "row-reverse",
        height: 20,
    },
    btn_del: {
        height: 20,
        width: 20,
        marginRight: 10,
        tintColor: "#9462E5",
    },
    image_profile: {
        height: 40,
        width: 40,
        margin: 5,
        marginTop: 0,
        borderRadius: 30,
    },
});

export default CommentList_Element;
