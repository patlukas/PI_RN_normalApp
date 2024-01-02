import React, { useContext, useState } from "react";
import { AccountDataContext } from "../../context/AccountDataContext";
import { View, StyleSheet } from "react-native";
import User_Detail from "./User_Detail";
import { useFocusEffect } from "@react-navigation/native";
import OptionBar from "../../components/OptionBar";
import Settings from "../../components/Settings";
import { api_user_get_user } from "../../api/api_user_get_user";

const User_Screen = ({ route }) => {
    const { accountData } = useContext(AccountDataContext);
    const [userData, setUserData] = useState(false);

    useFocusEffect(
        React.useCallback(() => {
            loadData();
        }, [])
    );

    const loadData = async () => {
        setUserData(
            await api_user_get_user(accountData.token, route.params.id)
        );
    };

    let options = [];
    let selectedScreen = null;
    if (route.params.id === accountData.id) {
        options.push("Settings");
        selectedScreen = <Settings afterChangeImage={loadData} />;
    }

    if (userData === false) return null;
    return (
        <View style={styles.container_main}>
            <User_Detail data={userData} />
            <OptionBar options={options} selected={0} onSelect={() => {}} />
            <View style={styles.container_posts}>{selectedScreen}</View>
        </View>
    );
};

const styles = StyleSheet.create({
    container_main: {
        flex: 1,
    },
    container_head: {
        height: "auto",
    },
    container_posts: {
        flex: 1,
    },
});

export default User_Screen;
