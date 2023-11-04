import { useState } from "react";
import { StyleSheet, View, FlatList, Text, Pressable } from "react-native";
import { StatusBar } from "expo-status-bar";

import { GoalText } from "./components/GoalText";
import { GoalInput } from "./components/GoalInput";

export default function App() {
  const [textValue, changeTextValue] = useState("");
  const [goalText, setGoalText] = useState([]);
  const [isModalVisible, setModalVisibilty] = useState(false);

  const handleTextChange = (enteredText) => {
    changeTextValue(enteredText);
  };

  const handleGoalText = () => {
    setGoalText((goalText) => [
      ...goalText,
      { text: textValue, id: Math.round(Math.random() * 100) },
    ]);

    changeTextValue("");
    changeVisibility();
  };

  const deleteGoal = (id) => {
    setGoalText((goalText) => goalText.filter((goal) => goal.id !== id));
  };

  const changeVisibility = () => {
    setModalVisibilty(!isModalVisible);
  };
  return (
    <>
      <StatusBar style="light" />
      <View style={styles.container}>
        <View>
          <Pressable onPress={changeVisibility} style={styles.addGoalStyle}>
            <Text style={styles.buttonTextStyle}>Click Me To Add Goal</Text>
          </Pressable>
        </View>

        <GoalInput
          textValue={textValue}
          handleTextChange={handleTextChange}
          handleGoalText={handleGoalText}
          isModalVisible={isModalVisible}
          changeVisibility={changeVisibility}
        />

        <View style={styles.goalsContainer}>
          <FlatList
            data={goalText}
            renderItem={(itemData) => {
              return (
                <GoalText
                  text={itemData.item.text}
                  itemId={itemData.item.id}
                  deleteGoal={deleteGoal}
                />
              );
            }}
            keyExtractor={(itemData, index) => {
              return itemData.id;
            }}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 50,
    paddingHorizontal: 16,
    flex: 1,
  },
  addGoalStyle: {
    backgroundColor: "purple",
    borderRadius: 5,
    padding: 10,
    flexDirection: "row",
    justifyContent: "center",
  },
  goalsContainer: {
    flex: 5,
  },
  buttonTextStyle: {
    justifyContent: "center",
    color: "white",
    fontWeight: "600",
  },
});
