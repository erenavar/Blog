import { StyleSheet, Text, View, Button, FlatList } from "react-native";
import React, { useContext } from "react";
import { Context } from "../context/BlogContext";
import { MaterialIcons } from "@expo/vector-icons";

export default function IndexScreen() {
  const { state, addBlogPost } = useContext(Context);

  return (
    <View>
      <Button title="Add" onPress={addBlogPost} />
      <FlatList
        data={state}
        keyExtractor={(blogPosts) => blogPosts.title}
        renderItem={({ item }) => {
          return (
            <View style={styles.listStyle}>
              <Text style={styles.title}>{item.title}</Text>
              <MaterialIcons name="delete" size={24} color="black" />
            </View>
          );
        }}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  listStyle: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderTopWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 20,
    borderColor: "gray",
  },
  title: {
    fontSize: 18,
  },
});
