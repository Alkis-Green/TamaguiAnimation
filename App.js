import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Tamagui from "./src/Animations/Tamagui";
import AnimatedBtn from "./src/Animations/AnimatedBtn";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Tamagui />
      <AnimatedBtn />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#112",
    alignItems: "center",
    justifyContent: "center",
  },
});
