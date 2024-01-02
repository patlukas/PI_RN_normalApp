import React, { useContext } from "react";
import { AccountDataContext } from "../context/AccountDataContext";
import { StyleSheet, Pressable, View, Text } from "react-native";
import * as ImagePicker from "expo-image-picker";

import { api_user_post_user_profilePicture } from "../api/api_user_post_user_profilePicture";
import { api_user_delete_user_profilePicture } from "../api/api_user_delete_user_profilePicture";

const Settings = ({ afterChangeImage }) => {
    const { accountData, setAccountData } = useContext(AccountDataContext);

    const onLogout = () => {
        setAccountData(false);
    };

    const onSelectImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [1, 1],
            quality: 1,
        });

        if (!result.canceled) {
            onChangeImage(result.assets[0].uri);
        }
    };

    const onChangeImage = async (image) => {
        await api_user_post_user_profilePicture(
            accountData.token,
            accountData.id,
            image
        );
        afterChangeImage();
    };

    const onDeleteImage = async () => {
        await api_user_delete_user_profilePicture(
            accountData.token,
            accountData.id
        );
        afterChangeImage();
    };

    return (
        <View style={styles.container}>
            <Button label="Change profile picture" onPress={onSelectImage} />
            <Button label="Delete profile picture" onPress={onDeleteImage} />
            <Button label="Log Out" onPress={onLogout} />
        </View>
    );
};

const Button = ({ label, onPress }) => {
    return (
        <Pressable style={styles.btn_container} onPress={onPress}>
            <Text style={styles.btn_txt}>{label}</Text>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    container: {
        width: "86%",
        marginHorizontal: "7%",
    },
    btn_container: {
        marginTop: 10,
        width: "100%",
        borderRadius: 5,
        borderColor: "#9462E5",
        borderWidth: 1,
    },
    btn_txt: {
        textAlign: "center",
        color: "#9462E5",
        fontSize: 15,
        paddingVertical: 10,
    },
});

export default Settings;
