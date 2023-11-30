import { StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import { Context } from "../context/BlogContext";

export default function ShowScreen({ route }) {
  const { state } = useContext(Context);
  const blogPost = state.find((blogPost) => blogPost.id == route.params.id);
  return (
    <View>
      <Text>{blogPost.id}</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
