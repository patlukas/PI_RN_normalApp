import React, { useContext, useState, useEffect } from "react";
import { StyleSheet, View } from "react-native";
import { TextInput} from "react-native-paper";
import { AccountDataContext } from "../../context/AccountDataContext";
import OptionBar from "../OptionBar.js/OptionBar";
import PlayerList_List from "../PlayerList/PlayerList_List";
import { api_player_get_listPlayers } from "../../api/api_player_get_listPlayers";
import TeamList_List from "../TeamList/TeamList_List";
import { api_team_get_listTeams } from "../../api/api_team_get_listTeams";

const Search_Screen = ({ navigation }) => {
    const { accountData } = useContext(AccountDataContext);

    const [search, setSearch] = useState("");
    const [option, setOption] = useState(0);
    const [listPlayerData, setListPlayerData] = useState([]);
    const [listTeamData, setListTeamData] = useState([]);
    const [playerToShow, setPlayerToShow] = useState([]);
    const [teamToShow, setTeamToShow] = useState([]);

    useEffect(() => {
        onLoad();
    }, []);

    useEffect(() => {
        if (search === "") {
            setPlayerToShow(listPlayerData);
            setTeamToShow(listTeamData);
        }
        let newListPlayer = [];
        for (const player of listPlayerData) {
            if (player.name.toLowerCase().includes(search))
                newListPlayer.push(player);
        }
        let newListTeam = [];
        for (const team of listTeamData) {
            if (team.name.toLowerCase().includes(search))
                newListTeam.push(team);
        }
        setPlayerToShow(newListPlayer);
        setTeamToShow(newListTeam);
    }, [search]);

    const onLoad = async () => {
        const players = await api_player_get_listPlayers(accountData.token);
        const teams = await api_team_get_listTeams(accountData.token);
        setListPlayerData(players);
        setListTeamData(teams);
        setPlayerToShow(players);
        setTeamToShow(teams);
    };
    let selectedScreen = null;
    if (option === 0) {
        selectedScreen = (
            <TeamList_List data={teamToShow} navigation={navigation} />
        );
    } else if (option === 1) {
        selectedScreen = (
            <PlayerList_List data={playerToShow} navigation={navigation} />
        );
    }
    return (
        <View style={{ height: "100%" }}>
            <TextInput
                style={styles.txtInput_search}
                label="Search..."
                mode={"outlined"}
                autoCapitalize="none"
                value={search}
                onChangeText={(text) => setSearch(text.toLowerCase())}
                right={<TextInput.Icon icon="magnify" />}
            />
            <OptionBar
                options={[
                    `Teams (${teamToShow.length})`,
                    `Players (${playerToShow.length})`,
                ]}
                selected={option}
                onSelect={setOption}
            />
            <View style={{ flex: 1 }}>{selectedScreen}</View>
        </View>
    );
};

const styles = StyleSheet.create({
    txtInput_search: {
        width: "80%",
        marginHorizontal: "10%",
        marginVertical: 8,
        borderBottomWidth: 0,
        backgroundColor: "#ccc",
    },
});

export default Search_Screen;
