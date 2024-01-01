import React from "react";
import { StyleSheet, TouchableOpacity, View, Text } from "react-native";

const OptionBar = ({ options, selected, onSelect }) => {
    let optionsEl = [];
    for (let i = 0; i < options.length; i++) {
        optionsEl.push(
            <Option
                label={options[i]}
                selected={selected == i}
                onSelect={() => onSelect(i)}
                key={i}
            />
        );
    }
    return <View style={styles.bar_container}>{optionsEl}</View>;
};

const Option = ({ label, selected, onSelect }) => {
    if (selected) {
        return (
            <View
                style={[
                    styles.option_container,
                    styles.option_container_select,
                ]}
            >
                <Text style={[styles.option_txt, styles.option_txt_select]}>
                    {label}
                </Text>
            </View>
        );
    }
    return (
        <TouchableOpacity onPress={onSelect} style={styles.option_container}>
            <Text style={styles.option_txt}>{label}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    bar_container: {
        flexDirection: "row",
    },
    option_container: {
        flex: 1,
        borderBottomWidth: 1,
        borderColor: "#888",
    },
    option_container_select: {
        borderBottomWidth: 3,
        borderColor: "#9462E5",
    },
    option_txt: {
        textAlign: "center",
        fontSize: 14,
        color: "#888",
        paddingVertical: 5,
    },
    option_txt_select: {
        color: "#9462E5",
        fontWeight: "700",
    },
});

export default OptionBar;
