import React, { useRef, useEffect } from "react";
import { Text, TouchableOpacity, StyleSheet, Animated } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import Fonts from "../theme/Fonts";
import * as Font from "expo-font";

const colors = [
  "#F76709",
  "#F4D909",
  "#30A46B",
  "#0090FF",
  "#8D4EC5",
  "#D63F9F",
  "#E5484D",
];

const GradientButton = ({ onPress, title }) => {
  const animatedColors = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    animateColors();
  }, []);

  const animateColors = () => {
    const animations = colors.map((color, index) => {
      return Animated.timing(animatedColors, {
        toValue: (index + 1) / colors.length,
        duration: 1000 / colors.length, // Equal duration for each segment
        delay: index * (1000 / colors.length), // Delay for each segment
        useNativeDriver: false,
      });
    });

    Animated.loop(Animated.sequence(animations)).start();
  };

  const interpolatedColors = animatedColors.interpolate({
    inputRange: colors.map((_, index) => index / (colors.length - 1)),
    outputRange: colors,
  });

  return (
    <TouchableOpacity onPress={onPress}>
      <Animated.View
        style={StyleSheet.flatten([
          styles.button,
          { backgroundColor: interpolatedColors },
        ])}
      >
        <Text style={styles.buttonText}>Proceed</Text>
      </Animated.View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: 14,
    paddingHorizontal: 120,
    borderRadius: 6,
    alignItems: "center",
    marginBottom: 200,
    elevation: 5,
  },
  buttonText: {
    fontFamily: Fonts.family.thin,
    color: "#fff",
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "center",
  },
});

export default GradientButton;
