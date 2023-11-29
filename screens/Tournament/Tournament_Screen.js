import React, { useContext, useEffect } from "react";
import { StyleSheet, View, Text } from "react-native";
import { AccountDataContext } from "../../context/AccountDataContext";
// import { apiGetMatchData } from "../../api/apiGetMatchData";

const Tournament_Screen = ({ route, navigation }) => {
    const { accountData, setAccountData } = useContext(AccountDataContext);
    useEffect(() => {
        if (accountData === false) {
            navigation.replace("Login_Screen");
            return () => {};
        }
    }, [accountData, navigation]);

    // const matchData = apiGetMatchData(route.params.id, accountData.token);

    return (
        <View>
            <Text>Tournament Screen - TODO</Text>
        </View>
    );
};

const styles = StyleSheet.create({

});

export default Tournament_Screen;
