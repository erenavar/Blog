import { FlatList, StyleSheet, Text, View, Button } from "react-native";
import React, { useState } from "react";

export default function Index() {
  const [deneme, setDeneme] = useState([]);
  return (
    <View>
      <Text>IndexScreen</Text>
      <Button title="deneme" />
      <FlatList />
    </View>
  );
}

const styles = StyleSheet.create({});
