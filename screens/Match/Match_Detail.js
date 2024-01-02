import React from "react";
import { StyleSheet, View } from "react-native";
import Match_Detail_Row from "./Match_Detail_Row";
import Match_Head from "./Match_Head";

const Match_Detail = ({
    teams,
    winner,
    isLive,
    setNow,
    date,
    onSelectTeam,
}) => {
    let result_el = [];
    const maxSet = winner === -1 ? setNow : setNow - 1;
    for (let i = 0; i < maxSet; i++) {
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
        <View style={styles.container}>
            <Match_Head
                nameH={teams[0].name}
                nameG={teams[1].name}
                resultH={teams[0].result}
                resultG={teams[1].result}
                imageH={teams[0].imageURL}
                imageG={teams[1].imageURL}
                date={date}
                isLive={isLive}
                onPressTeam1={() => onSelectTeam(teams[0].id)}
                onPressTeam2={() => onSelectTeam(teams[1].id)}
            />
            {result_el}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        height: "auto",
    },
    view_oneLine: {
        flexDirection: "row",
    },
});

export default Match_Detail;
