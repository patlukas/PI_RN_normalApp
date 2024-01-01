import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import CommentList_ElementBasic from "./CommentList_ElementBasic";

const CommentList_ListBasic = ({ data }) => {
    return (
        <View>
            <FlatList
                data={data}
                renderItem={({ item }) => (
                    <CommentList_ElementBasic
                        name={item.name}
                        content={item.text}
                    />
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({});

export default CommentList_ListBasic;
