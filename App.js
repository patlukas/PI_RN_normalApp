import { Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Login_Screen from "./screens/Login/Login_Screen";
import Signup_Screen from "./screens/Signup/Signup_Screen";
import Main_Screen from "./screens/Main/Main_Screen";
import Team_Screen from "./screens/Team/Team_Screen";
import MatchList_Screen from "./screens/MatchList/MatchList_Screen";
import Match_Screen from "./screens/Match/Match_Screen";
import TournamentList_Screen from "./screens/TournamentList/TournamentList_Screen";
import Tournament_Screen from "./screens/Tournament/Tournament_Screen";
import Player_Screen from "./screens/Player/Player_Screen";
import Post_Screen from "./screens/Post/Post_Screen";
import { AccountDataContext } from "./context/AccountDataContext";
import { useState } from "react";
import Search_Screen from "./screens/Search/Search_Screen";
import Profile_Screen from "./screens/Profile/Profile_Screen";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
    global.apiLink = "http://192.168.0.199:8080/api/";

    const [accountData, setAccountData] = useState(
        // {
        //     id: "c0c308dd-0983-489e-8d51-10d753b345cc",
        //     token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiUGxheWVyVXNlcjAxMyIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL25hbWVpZGVudGlmaWVyIjoiYzBjMzA4ZGQtMDk4My00ODllLThkNTEtMTBkNzUzYjM0NWNjIiwianRpIjoiNDdmNTc1MDEtZGE5YS00OWZhLThiZTAtZGU1N2JhZmFmZGIzIiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy9yb2xlIjoiUGxheWVyIiwiZXhwIjoxNzA0MTQ3Mzk0LCJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjUwMDAiLCJhdWQiOiJodHRwOi8vbG9jYWxob3N0OjQyMDAifQ.rZDnwnW8-zpKxNna4sQmO-48JivHiCgHkhcmkXEZmms",
        //     username: "PlayerUser013",
        //     firstName: "Michał",
        //     lastName: "Jóźwiak",
        //     email: "siema@tu.kubi",
        //     imageURL: "Upload/UserImages/default.png",
        //     playerId: 73,
        //     teamId: null,
        //     organizerId: null,
        // }
        false
    );
    if (accountData === false) {
        return (
            <AccountDataContext.Provider
                value={{ accountData, setAccountData }}
            >
                <NavigationContainer>
                    <Stack.Navigator initialRouteName="Login_Screen">
                        <Stack.Screen
                            name="Login_Screen"
                            component={Login_Screen}
                            options={{ headerShown: false }}
                        />
                        <Stack.Screen
                            name="Signup_Screen"
                            component={Signup_Screen}
                            options={{ headerShown: false }}
                        />
                    </Stack.Navigator>
                </NavigationContainer>
            </AccountDataContext.Provider>
        );
    }
    return (
        <AccountDataContext.Provider value={{ accountData, setAccountData }}>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen
                        name="BarBottom"
                        component={BarBottom}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name="Team_Screen"
                        component={Team_Screen}
                        options={{ title: "Zespół" }}
                    />
                    <Stack.Screen
                        name="Match_Screen"
                        component={Match_Screen}
                        options={{ title: "Mecz" }}
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
                </Stack.Navigator>
            </NavigationContainer>
        </AccountDataContext.Provider>
    );
}

function BarBottom() {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarStyle: { backgroundColor: "#9462E5" },
                tabBarActiveTintColor: "#F2F2F2",
                tabBarInactiveTintColor: "#222",
                tabBarShowLabel: false,
            }}
        >
            <Tab.Screen
                name="Main_Screen"
                component={Main_Screen}
                options={{
                    title: "Playmaker",
                    tabBarIcon: ({ color }) => {
                        return (
                            <Image
                                source={require("./assets/home.png")}
                                style={{
                                    height: 30,
                                    width: 30,
                                    tintColor: color,
                                }}
                            />
                        );
                    },
                }}
            />
            <Tab.Screen
                name="Search_Screen"
                component={Search_Screen}
                options={{
                    title: "Search",
                    tabBarIcon: ({ color }) => {
                        return (
                            <Image
                                source={require("./assets/magnifying-glass.png")}
                                style={{
                                    height: 30,
                                    width: 30,
                                    tintColor: color,
                                }}
                            />
                        );
                    },
                }}
            />
            <Tab.Screen
                name="MatchList_Screen"
                component={MatchList_Screen}
                options={{
                    title: "Games",
                    tabBarIcon: ({ color }) => {
                        return (
                            <Image
                                source={require("./assets/voleyball.png")}
                                style={{
                                    height: 30,
                                    width: 30,
                                    tintColor: color,
                                }}
                            />
                        );
                    },
                }}
            />
            <Tab.Screen
                name="TournamentList_Screen"
                component={TournamentList_Screen}
                options={{
                    title: "Tournaments",
                    tabBarIcon: ({ color }) => {
                        return (
                            <Image
                                source={require("./assets/network.png")}
                                style={{
                                    height: 30,
                                    width: 30,
                                    tintColor: color,
                                }}
                            />
                        );
                    },
                }}
            />
            <Tab.Screen
                name="Profile_Screen"
                component={Profile_Screen}
                options={{
                    title: "Profile",
                    tabBarIcon: ({ color }) => {
                        return (
                            <Image
                                source={require("./assets/user.png")}
                                style={{
                                    height: 30,
                                    width: 30,
                                    tintColor: color,
                                }}
                            />
                        );
                    },
                }}
            />
        </Tab.Navigator>
    );
}
