import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import CommentList_Element from "./CommentList_Element";

const CommentList_List = ({ data, onDelComment = null, addBorder = false }) => {
    return (
        <View>
            <FlatList
                data={data}
                renderItem={({ item }) => (
                    <CommentList_Element
                        id={item.id}
                        name={item.name}
                        date={item.date}
                        content={item.text}
                        imageURL={item.imageURL}
                        canDel={item.canDel}
                        onDel={onDelComment}
                        addBorder={addBorder}
                    />
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({});

export default CommentList_List;
