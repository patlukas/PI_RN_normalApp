import React, { useContext, useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { AccountDataContext } from "../../context/AccountDataContext";
import { apiGetMatchData } from "../../api/apiGetMatchData";
import { apiAddCommentToMatch } from "../../api/apiAddCommentToMatch";
import Match_Detail from "./Match_Detail";
import CommentList_List from "../CommentList/CommentList_List";
import { apiGetListMatchComments } from "../../api/apiGetListMatchComments";

const Match_Screen = ({ route, navigation }) => {
    const { accountData, setAccountData } = useContext(AccountDataContext);
    const [matchData, setMatchData] = useState(false);
    const [commentList, setCommentList] = useState([]);
    useEffect(() => {
        loadMatchData();
    }, []);

    const loadMatchData = async () => {
        setMatchData(await apiGetMatchData(route.params.id, accountData.token));
        setCommentList(
            await apiGetListMatchComments(
                accountData.id,
                route.params.id,
                accountData.token
            )
        );
    };

    const onSelectTeam = (id) => {
        navigation.push("Team_Screen", { id });
    };

    const onAddComment = async (newComment) => {
        await apiAddCommentToMatch(
            accountData.id,
            route.params.id,
            accountData.token,
            newComment
        );
        setCommentList(
            await apiGetListMatchComments(
                accountData.id,
                route.params.id,
                accountData.token
            )
        );
    };

    if (matchData === false) {
        return null;
    }

    return (
        <View style={styles.container}>
            <Match_Detail
                teams={matchData.teams}
                winner={matchData.winner}
                setNow={matchData.setNow}
                date={matchData.date}
                onSelectTeam={onSelectTeam}
            />
            <CommentList_List data={commentList} onAddComment={onAddComment} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default Match_Screen;
