import React, { useContext } from "react";
import { StyleSheet, View } from "react-native";
import { AccountDataContext } from "../../context/AccountDataContext";
import { Button } from "react-native-paper";
import * as ImagePicker from "expo-image-picker";
import { api_user_post_user_profilePicture } from "../../api/api_user_post_user_profilePicture";
import { api_user_delete_user_profilePicture } from "../../api/api_user_delete_user_profilePicture";

const Player_ChangeImage = ({
    canChangeImage,
    afterChangeImage,
    imageIsDefault,
}) => {
    if (!canChangeImage) return null;

    const { accountData } = useContext(AccountDataContext);

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

    let btnDel = null;
    if (!imageIsDefault) {
        btnDel = (
            <Button mode="contained" onPress={onDeleteImage}>
                Delete profile
            </Button>
        );
    }

    return (
        <View>
            <Button mode="contained" onPress={onSelectImage}>
                Change profile
            </Button>
            {btnDel}
        </View>
    );
};

const styles = StyleSheet.create({});

export default Player_ChangeImage;
