import React, { useContext, useEffect } from "react";
import { StyleSheet, View, Text } from "react-native";
import { AccountDataContext } from "../../context/AccountDataContext";
import { apiGetMatchData } from "../../api/apiGetMatchData";
import PostList_List from "../PostList/PostList_List";
import Match_Detail from "./Match_Detail";

const Match_Screen = ({ route, navigation }) => {
    const { accountData, setAccountData } = useContext(AccountDataContext);
    useEffect(() => {
        if (accountData === false) {
            navigation.replace("Login_Screen");
            return () => {};
        }
    }, [accountData, navigation]);

    const matchData = apiGetMatchData(route.params.id, accountData.token);

    const onSelectTeam = (id) => {
        navigation.push("Team_Screen", { id });
    };

    return (
        <View>
            <Match_Detail
                teams={matchData.teams}
                winner={matchData.winner}
                setNow={matchData.setNow}
                date={matchData.date}
                onSelectTeam={onSelectTeam}
            />
            <PostList_List data={matchData.listPosts} />
        </View>
    );
};

const styles = StyleSheet.create({});

export default Match_Screen;
