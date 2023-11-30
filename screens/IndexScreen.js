import { StyleSheet, Text, View, Button, FlatList } from "react-native";
import React, { useContext } from "react";
import BlogContext from "../context/BlogContext";

export default function IndexScreen() {
  const { data, addBlogPost } = useContext(BlogContext);

  return (
    <View>
      <Text>IndexScreen</Text>
      <Button title="Add" onPress={addBlogPost} />
      <FlatList
        data={data}
        keyExtractor={(blogPosts) => blogPosts.title}
        renderItem={({ item }) => {
          return <Text>{item.title}</Text>;
        }}
      />
    </View>
  );
}
const styles = StyleSheet.create({});
