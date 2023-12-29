import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { Button } from "react-native-paper";

const Tournament_OptionsBar = ({ rounds, setRound, selected, roundNames }) => {
    return (
        <View style={styles.container}>
            <FlatList
                horizontal={true}
                data={rounds}
                renderItem={({ item }) => (
                    <View style={styles.btn}>
                        <Button
                            mode="text"
                            onPress={() => setRound(parseInt(item))}
                            textColor={item == selected ? "#00f" : "#000"}
                        >
                            {roundNames[parseInt(item)]}
                        </Button>
                    </View>
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#aaa",
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: "444",
    },
    btn: {
        paddingHorizontal: 20,
    },
});

export default Tournament_OptionsBar;
