import React, { useContext, useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { AccountDataContext } from "../../context/AccountDataContext";
import { api_tournament_get_tournament } from "../../api/api_tournament_get_tournament";
import Tournament_Classic from "./Tournament_Classic";
import Tournament_Swiss from "./Tournament_Swiss";
import Tournament_Head from "./Tournament_Head";

const Tournament_Screen = ({ route, navigation }) => {
    const { accountData } = useContext(AccountDataContext);
    const [tournamentData, setTournamentData] = useState([]);
    useEffect(() => {
        loadTournamentData();
    }, []);

    const loadTournamentData = async () => {
        setTournamentData(
            await api_tournament_get_tournament(
                accountData.token,
                route.params.id
            )
        );
    };
    console.log("To", tournamentData);
    let tournamentEl = null;
    if (tournamentData.eliminationAlgorithm === "SwissElimination") {
        tournamentEl = (
            <Tournament_Swiss
                tournamentId={route.params.id}
                navigation={navigation}
                games={tournamentData.games}
            />
        );
    } else {
        tournamentEl = (
            <Tournament_Classic
                tournamentId={route.params.id}
                tournamentType={tournamentData.eliminationAlgorithm}
                navigation={navigation}
            />
        );
    }

    return (
        <View style={styles.main_container}>
            <Tournament_Head
                name={tournamentData.name}
                city={tournamentData.city}
                date={tournamentData.date}
                teamCount={tournamentData.teamCount}
            />
            <View style={styles.post_container}>{tournamentEl}</View>
        </View>
    );
};

const styles = StyleSheet.create({
    txt_name: {
        textAlign: "center",
        fontWeight: "bold",
        fontSize: 22,
    },
    txt_date: {
        textAlign: "center",
        fontSize: 18,
    },
    txt_city: {
        fontSize: 20,
        textAlign: "center",
    },
    container_txt: {
        paddingBottom: 15,
        height: "auto",
    },
    main_container: {
        flex: 1,
    },
    post_container: {
        flex: 1,
    },
});

export default Tournament_Screen;
