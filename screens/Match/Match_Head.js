import React from "react";
import { StyleSheet, View, Image, Text, TouchableOpacity } from "react-native";

const Match_Head = ({
    nameH,
    nameG,
    resultH,
    resultG,
    imageG,
    imageH,
    isLive,
    date,
    onPress = null,
    onPressTeam1 = null,
    onPressTeam2 = null,
}) => {
    const Match_Head_Detail = () => {
        return (
            <>
                <Team name={nameH} imageURL={imageH} onPress={onPressTeam1} />
                <View style={{ width: "auto" }}>
                    <Text style={styles.txt_date}>{date}</Text>
                    <Text style={styles.txt_result}>
                        {resultH} - {resultG}
                    </Text>
                    <Text style={styles.txt_live}>{isLive ? "●Live" : ""}</Text>
                </View>
                <Team name={nameG} imageURL={imageG} onPress={onPressTeam2} />
            </>
        );
    };
    if (onPress === null) {
        return (
            <View style={styles.container}>
                <Match_Head_Detail />
            </View>
        );
    }
    return (
        <TouchableOpacity
            style={[styles.container, styles.containerWithBorder]}
            onPress={onPress}
        >
            <Match_Head_Detail />
        </TouchableOpacity>
    );
};

const Team = ({ name, imageURL, onPress }) => {
    const Team_Detail = () => {
        return (
            <>
                <Image
                    style={styles.team_image}
                    source={{
                        uri:
                            imageURL +
                            `?timestamp=${parseInt(
                                new Date().getTime() / 60000
                            )}`,
                    }}
                />
                <Text style={styles.team_name}>{name}</Text>
            </>
        );
    };
    if (onPress === null) {
        return (
            <View style={styles.team_view}>
                <Team_Detail />
            </View>
        );
    }
    return (
        <TouchableOpacity style={styles.team_view} onPress={onPress}>
            <Team_Detail />
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        width: "100%",
        flexDirection: "row",
        paddingVertical: 4,
    },
    containerWithBorder: {
        borderBottomWidth: 1,
        borderTopWidth: 1,
        borderColor: "#ddd",
    },
    team_view: {
        flex: 1,
        alignItems: "center",
    },

    team_image: {
        height: 40,
        width: 40,
        margin: 5,
        marginBottom: 0,
        borderRadius: 30,
        alignItems: "center",
        justifyContent: "center",
    },
    team_name: {
        textAlign: "center",
    },
    txt_result: {
        fontSize: 35,
        color: "#9462E5",
        fontWeight: "700",
    },
    txt_live: {
        top: -10,
        color: "#f33",
        textAlign: "center",
        fontSize: 18,
        fontWeight: "700",
    },
    txt_date: {
        color: "#888",
        bottom: -10,
        fontSize: 11,
        textAlign: "center",
    },
});

export default Match_Head;
