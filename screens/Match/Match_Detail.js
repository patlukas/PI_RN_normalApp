import React, { useContext, useEffect } from "react";
import { StyleSheet, View, Text } from "react-native";
import { AccountDataContext } from "../../context/AccountDataContext";
import { apiGetMatchData } from "../../api/apiGetMatchData";
import PostList_List from "../PostList/PostList_List";
import Match_Detail_Team from "./Match_Detail_Team";
import Match_Detail_Row from "./Match_Detail_Row";

const Match_Detail = ({ teams, winner, setNow, date, onSelectTeam }) => {
    let result_el = [
        <Match_Detail_Row
            key={0}
            valH={teams[0].result}
            valG={teams[1].result}
            title={"Wynik"}
            winner={winner}
        />,
    ];
    for (let i = 0; i < setNow; i++) {
        result_el.push(
            <Match_Detail_Row
                key={i + 1}
                valH={teams[0].points[i]}
                valG={teams[1].points[i]}
                title={"Set " + (i + 1)}
            />
        );
    }
    return (
        <View>
            <View style={styles.view_oneLine}>
                <Match_Detail_Team
                    name={teams[0].name}
                    onPress={() => onSelectTeam(teams[0].id)}
                    specialFont={winner == 0}
                />
                <Match_Detail_Team
                    name={teams[1].name}
                    onPress={() => onSelectTeam(teams[0].id)}
                    specialFont={winner == 1}
                />
            </View>
            {result_el}
        </View>
    );
};

const styles = StyleSheet.create({
    view_oneLine: {
        flexDirection: "row",
    },
});

export default Match_Detail;