import React, { useContext, useEffect, useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import { AccountDataContext } from "../../context/AccountDataContext";
import { api_game_get_game } from "../../api/api_game_get_game";
import { api_gameComment_post_comment } from "../../api/api_gameComment_post_comment";
import Match_Detail from "./Match_Detail";
import CommentList_List from "../CommentList/CommentList_List";
import { api_game_get_game_listComments } from "../../api/api_game_get_game_listComments";
import { api_gameComment_delete_comment } from "../../api/api_gameComment_delete_comment";
import BarPublishText from "../../components/BarPublishText";

const Match_Screen = ({ route, navigation }) => {
    const { accountData } = useContext(AccountDataContext);
    const [matchData, setMatchData] = useState(false);
    const [commentList, setCommentList] = useState([]);
    useEffect(() => {
        loadMatchData();
        setInterval(loadMatchData, 5000);
    }, []);

    const loadMatchData = async () => {
        setMatchData(
            await api_game_get_game(accountData.token, route.params.id)
        );
        setCommentList(
            await api_game_get_game_listComments(
                accountData.token,
                accountData.id,
                route.params.id
            )
        );
    };

    const onSelectTeam = (id) => {
        if (id === null) return;
        navigation.push("Team_Screen", { id });
    };

    const onAddComment = async (newComment) => {
        await api_gameComment_post_comment(
            accountData.token,
            accountData.id,
            route.params.id,
            newComment
        );
        setCommentList(
            await api_game_get_game_listComments(
                accountData.token,
                accountData.id,
                route.params.id
            )
        );
    };

    const onDelComment = async (idComment) => {
        await api_gameComment_delete_comment(
            accountData.token,
            route.params.id,
            idComment
        );
        setCommentList(
            await api_game_get_game_listComments(
                accountData.token,
                accountData.id,
                route.params.id
            )
        );
    };

    if (matchData === false) return null;

    return (
        <View style={styles.container}>
            <Match_Detail
                teams={matchData.teams}
                winner={matchData.winner}
                setNow={matchData.setNow}
                date={matchData.date}
                isLive={matchData.isLive}
                onSelectTeam={onSelectTeam}
            />
            <Text style={styles.txt_liveChat}>Live chat</Text>
            <View style={styles.container_comment}>
                <CommentList_List
                    data={commentList}
                    onDelComment={onDelComment}
                    addBorder={true}
                />
            </View>
            <BarPublishText label={"Comment"} onAdd={onAddComment} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    txt_liveChat: {
        width: "100%",
        borderBottomWidth: 1,
        textAlign: "center",
        borderColor: "#ddd",
        paddingTop: 10,
        fontSize: 18,
        paddingBottom: 5,
    },
    container_comment: {
        flex: 1,
    },
});

export default Match_Screen;
