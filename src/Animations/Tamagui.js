import React, { useEffect, useRef } from "react";
import { View, Text, Animated, StyleSheet } from "react-native";

const letters = ["T", "A", "M", "A", "G", "U", "I"];
const colors = [
  "#F76709",
  "#F4D909",
  "#30A46B",
  "#0090FF",
  "#8D4EC5",
  "#D63F9F",
  "#E5484D",
];

const FadeInLettersAnimation = () => {
  const animations = useRef(letters.map(() => new Animated.Value(0))).current;

  const animateLetters = () => {
    Animated.stagger(
      200,
      animations.map((animation) =>
        Animated.timing(animation, {
          toValue: 1,
          duration: 200, // Change the duration of each animation (in milliseconds)
          // delay: 100, // Add a delay to each animation (in milliseconds)
          // easing: Easing.ease, // Apply a custom easing function
          useNativeDriver: true, // Specify whether to use the native driver (required for certain properties)
        })
      )
    ).start();
  };

  useEffect(() => {
    animateLetters();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.letterContainer}>
        {letters.map((letter, index) => (
          <Animated.Text
            key={index}
            style={[
              styles.letter,
              { color: colors[index], opacity: animations[index] },
            ]}
          >
            {letter}
          </Animated.Text>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  letterContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  letter: {
    fontSize: 80,
    fontWeight: "bold",
    marginHorizontal: 1,
  },
});

export default FadeInLettersAnimation;

// import React, { useEffect, useRef } from "react";
// import { View, Text, Animated, StyleSheet } from "react-native";

// const letters = ["T", "A", "M", "A", "G", "U", "I"];
// const colors = [
//   "#F76709",
//   "#F4D909",
//   "#30A46B",
//   "#0090FF",
//   "#8D4EC5",
//   "#D63F9F",
//   "#E5484D",
// ];

// const FadeInLettersAnimation = () => {
//   const animations = useRef(letters.map(() => new Animated.Value(0))).current;

//   const animateLetters = () => {
//     const animationSequence = letters.map((letter, index) => {
//       return Animated.timing(animations[index], {
//         toValue: 1,
//         duration: 60, // Duration of each animation
//         delay: (letters.length - index) * 100, // Delay for each animation
//         useNativeDriver: true,
//       });
//     });

//     Animated.sequence(animationSequence).start();
//   };

//   useEffect(() => {
//     animateLetters();
//   }, []);

//   return (
//     <View style={styles.container}>
//       <View style={styles.letterContainer}>
//         {letters.map((letter, index) => (
//           <Animated.Text
//             key={index}
//             style={[
//               styles.letter,
//               { color: colors[index], opacity: animations[index] },
//             ]}
//           >
//             {letter}
//           </Animated.Text>
//         ))}
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   letterContainer: {
//     flexDirection: "row",
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   letter: {
//     fontSize: 60,
//     fontWeight: "bold",
//     marginHorizontal: 8,
//   },
// });

// export default FadeInLettersAnimation;
