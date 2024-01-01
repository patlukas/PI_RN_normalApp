import React from "react";
import { StyleSheet, View, TouchableOpacity, Image } from "react-native";
import { TextInput } from "react-native-paper";

const BarPublishText = ({ label, onAdd }) => {
    const [text, setText] = React.useState("");

    const beforeOnAdd = () => {
        onAdd(text);
        setText("");
    };

    return (
        <View style={styles.post_container}>
            <View style={styles.view_txtInput}>
                <TextInput
                    label={label}
                    mode="outlined"
                    value={text}
                    onChangeText={(text) => setText(text)}
                    multiline={true}
                    outlineStyle={styles.txtInput}
                />
            </View>
            <View style={styles.view_btn}>
                <TouchableOpacity onPress={beforeOnAdd}>
                    <Image
                        source={require("../assets/right-arrow.png")}
                        style={styles.btn_add}
                    />
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    post_container: {
        height: "auto",
        width: "100%",
        flexDirection: "row",
        borderTopWidth: 2,
        borderColor: "#9462E5",
        backgroundColor: "#F2F2F2",
    },
    view_txtInput: {
        flex: 1,
    },
    view_btn: {
        width: "auto",
        alignItems: "center",
        justifyContent: "center",
    },
    btn_add: {
        height: 30,
        width: 30,
        marginRight: 10,
        tintColor: "#9462E5",
    },
    txtInput: {
        borderWidth: 0,
        backgroundColor: "#F2F2F2",
    },
});

export default BarPublishText;
