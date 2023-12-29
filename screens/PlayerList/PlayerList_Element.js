import React from "react";
import { StyleSheet, Text, Image, View } from "react-native";
import Card from "../../components/Card";

const PlayerList_Element = ({
    name,
    position,
    number,
    shortTeamName,
    imageURL,
    onPress,
}) => {
    return (
        <Card backgroundColor="#fcf" onPress={onPress}>
            <View style={styles.container}>
                <View>
                    <Image
                        style={styles.img}
                        source={{
                            uri:
                                imageURL + `?timestamp=${new Date().getTime()}`,
                        }}
                    />
                </View>
                <View style={styles.container_txt}>
                    <Text style={styles.player_name}>
                        {name} [{shortTeamName}]
                    </Text>
                    <Text style={styles.player_position}>
                        {number} | {position}
                    </Text>
                </View>
            </View>
        </Card>
    );
};

const styles = StyleSheet.create({
    player_name: {
        textAlign: "center",
        fontSize: 18,
        fontWeight: "bold",
    },
    player_position: {
        textAlign: "center",
        fontSize: 16,
    },
    container: {
        flexDirection: "row",
    },
    img: {
        width: 50,
        height: 50,
    },
    container_txt: {
        flex: 1,
    },
});

export default PlayerList_Element;
