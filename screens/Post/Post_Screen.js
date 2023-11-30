import React, { useContext, useEffect } from "react";
import { StyleSheet, View, Text } from "react-native";
import { AccountDataContext } from "../../context/AccountDataContext";
// import { apiGetMatchData } from "../../api/apiGetMatchData";

const Post_Screen = ({ route, navigation }) => {
    const { accountData, setAccountData } = useContext(AccountDataContext);

    // const matchData = apiGetMatchData(route.params.id, accountData.token);

    return (
        <View>
            <Text>Post Screen - TODO</Text>
        </View>
    );
};

const styles = StyleSheet.create({});

export default Post_Screen;
