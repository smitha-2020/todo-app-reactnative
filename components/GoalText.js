import { View, Text, StyleSheet, Pressable } from "react-native";

export const GoalText = (props) => {
  return (
    <View style={styles.goalView}>
      <Pressable
        onPress={props.deleteGoal.bind(this, props.itemId)}
        android_ripple={{ color: "white" }}
        style={(pressed) => pressed && styles.pressedStyleIOS}
      >
        <Text style={styles.goalText}>{props.text}</Text>
      </Pressable>
    </View>
  );
};
const styles = StyleSheet.create({
  goalView: {
    backgroundColor: "purple",
    borderRadius: 5,
    marginTop: 10,
  },
  pressedStyleIOS: {
    opacity: 0.5,
  },
  goalText: {
    padding: 10,
    fontSize: 10,
  },
});
