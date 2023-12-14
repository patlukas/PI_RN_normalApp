import React, { useContext, useEffect, useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import { AccountDataContext } from "../../context/AccountDataContext";
import { apiGetTournamentData } from "../../api/apiGetTournamentData";

const Tournament_Screen = ({ route, navigation }) => {
    const { accountData, setAccountData } = useContext(AccountDataContext);
    const [tournamentData, setTournamentData] = useState([]);
    useEffect(() => {
        loadTournamentData();
    }, []);
    useEffect(() => {
        if (accountData === false) {
            navigation.replace("Login_Screen");
            return () => {};
        }
    }, [accountData, navigation]);

    const loadTournamentData = async () => {
        setTournamentData(
            await apiGetTournamentData(route.params.id, accountData.token)
        );
    };

    return (
        <View>
            <View>
                <Text>{tournamentData.name}</Text>
                <Text>{tournamentData.date}</Text>
                <Text>{tournamentData.city}</Text>
            </View>
            {/* <View>
                <Tournament_Brackets data={tournamentData.gamesInRound} />
            </View> */}
        </View>
    );
};

const styles = StyleSheet.create({});

export default Tournament_Screen;
