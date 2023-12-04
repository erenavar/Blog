import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";

export default function BlogPostForm({ onSubmit, initialValues }) {
  const [title, setTitle] = useState(initialValues ? initialValues.title : "");
  const [content, setContent] = useState(
    initialValues ? initialValues.content : ""
  );
  return (
    <View style={styles.main}>
      <Text style={styles.label}>Subject: </Text>
      <TextInput
        style={styles.input}
        value={title}
        onChangeText={(text) => setTitle(text)}
      />
      <Text style={styles.label}>Content: </Text>
      <TextInput
        style={styles.input}
        value={content}
        onChangeText={(text) => setContent(text)}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => onSubmit(title, content)}
      >
        <View style={styles.buttonView}>
          <Text style={styles.buttonText}>Save</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    marginTop: 10,
  },
  label: {
    fontSize: 20,
    marginLeft: 10,
  },
  input: {
    borderWidth: 1,
    margin: 10,
    borderRadius: 20,
    padding: 10,
    fontSize: 18,
    marginBottom: 15,
  },
  button: {
    padding: 30,
  },
  buttonView: {
    backgroundColor: "green",
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
  },
  buttonText: {
    color: "white",
    fontSize: 20,
  },
});
