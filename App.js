import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login_Screen from "./screens/Login/Login_Screen";
import Signup_Screen from "./screens/Signup/Signup_Screen";
import TeamList_Screen from "./screens/TeamList/TeamList_Screen";
import Main_Screen from "./screens/Main/Main_Screen";
import Team_Screen from "./screens/Team/Team_Screen";
import GameList_Screen from "./screens/GameList/GameList_Screen";
import Match_Screen from "./screens/Match/Match_Screen";
import TournamentList_Screen from "./screens/TournamentList/TournamentList_Screen";
import Tournament_Screen from "./screens/Tournament/Tournament_Screen";
import Player_Screen from "./screens/Player/Player_Screen";
import Post_Screen from "./screens/Post/Post_Screen";
import PlayerList_Screen from "./screens/PlayerList/PlayerList_Screen";
import { AccountDataContext } from "./context/AccountDataContext";
import { useState } from "react";

const Stack = createNativeStackNavigator();

export default function App() {
    // global.apiLink = "http://localhost:8080/api/";
    global.apiLink = "http://192.168.0.199:8080/api/";

    const [accountData, setAccountData] = useState({
        id: "c0c308dd-0983-489e-8d51-10d753b345cc",
        token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiUGxheWVyVXNlcjAxMyIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL25hbWVpZGVudGlmaWVyIjoiYzBjMzA4ZGQtMDk4My00ODllLThkNTEtMTBkNzUzYjM0NWNjIiwianRpIjoiNzg3Yjg5NzktZGQwZC00MjVlLWFkM2UtMzY4MTY5YzhmODczIiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy9yb2xlIjoiUGxheWVyIiwiZXhwIjoxNzAzODc0MjY3LCJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjUwMDAiLCJhdWQiOiJodHRwOi8vbG9jYWxob3N0OjQyMDAifQ.vKyg_BwkOWSzOpL3jDk0TVlL-dhYq_ZOBDekSYRKs3s",
        username: "PlayerUser013",
        firstName: "Michał",
        lastName: "Jóźwiak",
        email: "siema@tu.kubi",
        imageURL: "Upload/UserImages/default.png",
        playerId: 73,
        teamId: null,
        organizerId: null,
    });
    return (
        <>
            <StatusBar style="auto" />
            <AccountDataContext.Provider
                value={{ accountData, setAccountData }}
            >
                <NavigationContainer>
                    <Stack.Navigator initialRouteName="Main_Screen">
                        <Stack.Screen
                            name="Login_Screen"
                            component={Login_Screen}
                            options={{ title: "Ekran logowania" }}
                        />
                        <Stack.Screen
                            name="Signup_Screen"
                            component={Signup_Screen}
                            options={{ title: "Registration" }}
                        />
                        <Stack.Screen
                            name="Main_Screen"
                            component={Main_Screen}
                            options={{ title: "Main screen" }}
                        />
                        <Stack.Screen
                            name="TeamList_Screen"
                            component={TeamList_Screen}
                            options={{ title: "Team list" }}
                        />
                        <Stack.Screen
                            name="Team_Screen"
                            component={Team_Screen}
                            options={{ title: "Zespół" }}
                        />
                        <Stack.Screen
                            name="GameList_Screen"
                            component={GameList_Screen}
                            options={{ title: "Game list" }}
                        />
                        <Stack.Screen
                            name="Match_Screen"
                            component={Match_Screen}
                            options={{ title: "Mecz" }}
                        />
                        <Stack.Screen
                            name="TournamentList_Screen"
                            component={TournamentList_Screen}
                            options={{ title: "Tournament list" }}
                        />
                        <Stack.Screen
                            name="Tournament_Screen"
                            component={Tournament_Screen}
                            options={{ title: "Turniej" }}
                        />
                        <Stack.Screen
                            name="Post_Screen"
                            component={Post_Screen}
                            options={{ title: "Post" }}
                        />
                        <Stack.Screen
                            name="Player_Screen"
                            component={Player_Screen}
                            options={{ title: "Player" }}
                        />
                        <Stack.Screen
                            name="PlayerList_Screen"
                            component={PlayerList_Screen}
                            options={{ title: "Players list" }}
                        />
                    </Stack.Navigator>
                </NavigationContainer>
            </AccountDataContext.Provider>
        </>
    );
}
