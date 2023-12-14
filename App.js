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
    global.apiLink = "http://192.168.1.4:8080/api/";

    const [accountData, setAccountData] = useState({
        id: "8874b464-72a2-4f90-88cd-2158ea07de08",
        token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoic2llbWFUdUt1YmkiLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6Ijg4NzRiNDY0LTcyYTItNGY5MC04OGNkLTIxNThlYTA3ZGUwOCIsImp0aSI6ImMzZjQyMjk0LTYwZTgtNGYwZS1iZTgzLThhYTBmZWFiZWQ0ZiIsImV4cCI6MTcwMjUyMzc2NSwiaXNzIjoiaHR0cDovL2xvY2FsaG9zdDo1MDAwIiwiYXVkIjoiaHR0cDovL2xvY2FsaG9zdDo0MjAwIn0.usPMaLhEWy7HnESTIzmlfpg2RdL_9dRX700sH9CgdD8",
        username: "siemaTuKubi",
        firstName: "Siema",
        lastName: "Kubi",
        email: "siema@tu.kubi",
        imageURL: "Upload/UserImages/default.png",
        playerId: 1,
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
