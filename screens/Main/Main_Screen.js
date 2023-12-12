import React, { useContext, useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { TextInput, Button, Text } from "react-native-paper";
import { AccountDataContext } from "../../context/AccountDataContext";
import { apiGetListPosts } from "../../api/apiGetListPosts";
import PostList_List from "../PostList/PostList_List";

const Main_Screen = ({ navigation }) => {
    const { accountData, setAccountData } = useContext(AccountDataContext);
    const [listPost, setListPost] = useState([]);
    useEffect(() => {
        loadData();
    }, []);

    const loadData = async () => {
        setListPost(await apiGetListPosts(accountData.token));
    };
    useEffect(() => {
        if (accountData === false) {
            console.log("No login");
            navigation.replace("Login_Screen");
            return () => {};
        }
    }, [accountData, navigation]);

    const onLogout = () => {
        setAccountData(false);
    };

    let myTeamBtn = null;
    if (accountData.teamId !== null) {
        myTeamBtn = (
            <Button
                mode="contained"
                onPress={() =>
                    navigation.push("Team_Screen", { id: accountData.teamId })
                }
            >
                My team
            </Button>
        );
    }

    let myProfileBtn = null;
    if (accountData.playerId !== null) {
        myTeamBtn = (
            <Button
                mode="contained"
                onPress={() =>
                    navigation.push("Player_Screen", {
                        id: accountData.playerId,
                    })
                }
            >
                My profile
            </Button>
        );
    }

    return (
        <View style={styles.main_container}>
            <View style={styles.btn_container}>
                <Button
                    mode="contained"
                    onPress={() => navigation.push("TeamList_Screen")}
                >
                    Team list
                </Button>
                <Button
                    mode="contained"
                    onPress={() => navigation.push("GameList_Screen")}
                >
                    Game list
                </Button>
                <Button
                    mode="contained"
                    onPress={() => navigation.push("TournamentList_Screen")}
                >
                    Lista turniejów
                </Button>
                <Button
                    mode="contained"
                    onPress={() => navigation.push("PlayerList_Screen")}
                >
                    Lista zawodników
                </Button>
                {myTeamBtn}
                {myProfileBtn}
                <Button mode="contained" onPress={onLogout}>
                    Wyloguj
                </Button>
            </View>
            <View style={styles.post_container}>
                <PostList_List data={listPost} navigation={navigation} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    main_container: {
        flex: 1,
    },
    btn_container: {
        height: "auto",
    },
    post_container: {
        flex: 1,
    },
});

export default Main_Screen;
