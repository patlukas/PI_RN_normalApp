import React from "react";
import {
    StyleSheet,
    TouchableOpacity,
    View,
    Text,
    FlatList,
} from "react-native";

const OptionBar = ({ options, selected, onSelect, scrolled = false }) => {
    if (scrolled) {
        return (
            <View style={styles.flatList_container}>
                <FlatList
                    horizontal={true}
                    data={options}
                    renderItem={({ item, index }) => (
                        <Option
                            label={item}
                            selected={selected == index}
                            onSelect={() => onSelect(index)}
                            addPadding={true}
                            key={index}
                        />
                    )}
                />
                <View style={styles.fltList_border} />
            </View>
        );
    }
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

const Option = ({ label, selected, addPadding = false, onSelect }) => {
    if (selected) {
        return (
            <View
                style={[
                    styles.option_container,
                    styles.option_container_select,
                    addPadding ? styles.option_container_padding : null,
                ]}
            >
                <Text style={[styles.option_txt, styles.option_txt_select]}>
                    {label}
                </Text>
            </View>
        );
    }
    return (
        <TouchableOpacity
            onPress={onSelect}
            style={[
                styles.option_container,
                addPadding ? styles.option_container_padding : null,
            ]}
        >
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
    option_container_padding: {
        paddingHorizontal: 20,
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
    flatList_container: {
        width: "100%",
    },
    fltList_border: {
        borderBottomWidth: 1,
        borderColor: "#888",
        top: -1,
        zIndex: -1,
    },
});

export default OptionBar;
