import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login_Screen from "./screens/Login/Login_Screen";
import Signup_Screen from "./screens/Signup/Signup_Screen";
import TeamList_Screen from "./screens/TeamList/TeamList_Screen";
import Main_Screen from "./screens/Main/Main_Screen";
import Team_Screen from "./screens/Team/Team_Screen";
import MatchList_Screen from "./screens/MatchList/MatchList_Screen";
import Match_Screen from "./screens/Match/Match_Screen";
import TournamentList_Screen from "./screens/TournamentList/TournamentList_Screen";
import Tournament_Screen from "./screens/Tournament/Tournament_Screen";
import Post_Screen from "./screens/Post/Post_Screen";
import { AccountDataContext } from "./context/AccountDataContext";
import { useState } from "react";

const Stack = createNativeStackNavigator();

export default function App() {
    // global.apiLink = "http://localhost:8080/api/";
    global.apiLink = "http://192.168.1.4:8080/api/";

    const [accountData, setAccountData] = useState({
        id: 1,
        token: "12345",
        isPlayer: false,
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
                            options={{ title: "Ekran rejestracji" }}
                        />
                        <Stack.Screen
                            name="Main_Screen"
                            component={Main_Screen}
                            options={{ title: "Glówny ekran" }}
                        />
                        <Stack.Screen
                            name="TeamList_Screen"
                            component={TeamList_Screen}
                            options={{ title: "Ekran z zespołami" }}
                        />
                        <Stack.Screen
                            name="Team_Screen"
                            component={Team_Screen}
                            options={{ title: "Zespół" }}
                        />
                        <Stack.Screen
                            name="MatchList_Screen"
                            component={MatchList_Screen}
                            options={{ title: "Mecze" }}
                        />
                        <Stack.Screen
                            name="Match_Screen"
                            component={Match_Screen}
                            options={{ title: "Mecz" }}
                        />
                        <Stack.Screen
                            name="TournamentList_Screen"
                            component={TournamentList_Screen}
                            options={{ title: "Lista turniejów" }}
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
                    </Stack.Navigator>
                </NavigationContainer>
            </AccountDataContext.Provider>
        </>
    );
}
