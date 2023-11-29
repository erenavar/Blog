import { StyleSheet, Text, View, Button, FlatList } from "react-native";
import React, { useContext } from "react";
import BlogContext from "../context/BlogContext";

export default function Index() {
  const blogPosts = useContext(BlogContext);

  return (
    <View>
      <Text>IndexScreen</Text>
      <Text>IndexScreen</Text>
      <FlatList
        item={blogPosts}

        renderItem={({ item }) => {
          return <Text>{item}</Text>;
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
