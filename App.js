import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import IndexScreen from "./screens/IndexScreen";
import { Provider } from "./context/BlogContext";
import ShowScreen from "./screens/ShowScreen";
import CreateScreen from "./screens/CreateScreen";
import { AntDesign } from "@expo/vector-icons";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerTitle: "" }}>
          <Stack.Screen
            name="Index"
            component={IndexScreen}
            options={({ navigation }) => ({
              headerRight: () => (
                <TouchableOpacity onPress={() => navigation.navigate("Create")}>
                  <AntDesign name="pluscircle" size={24} color="black" />
                </TouchableOpacity>
              ),
              headerLeft: () => <Text>Blog App</Text>,
            })}
          />
          <Stack.Screen name="Show" component={ShowScreen} />
          <Stack.Screen name="Create" component={CreateScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
