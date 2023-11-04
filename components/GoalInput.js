import {
  Button,
  TextInput,
  StyleSheet,
  View,
  Modal,
  Image,
  Pressable,
  Text,
} from "react-native";

export const GoalInput = (props) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={props.isModalVisible}
      onRequestClose={() => {
        Alert.alert("Modal has been closed.");
      }}
    >
      <View style={styles.textContainer}>
        <Image
          source={require("../assets/goal.png")}
          style={{ height: 100, width: 100 }}
        />
        <TextInput
          style={styles.textBoxStyle}
          textValue={props.textValue}
          value={props.textValue}
          placeholder="Enter some text"
          onChangeText={props.handleTextChange}
        />
        <View style={styles.buttonMainView}>
          <View style={styles.buttonDisplayView}>
            <Pressable onPress={props.handleGoalText}>
              <Text style={{ fontWeight: "800", color: "gray", fontSize: 12 }}>
                Add Goal
              </Text>
            </Pressable>
          </View>

          <View style={styles.buttonDisplayView}>
            <Pressable onPress={props.changeVisibility}>
              <Text style={{ fontWeight: "800", color: "gray", fontSize: 12 }}>
                Cancel
              </Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  );
};
const styles = StyleSheet.create({
  textBoxStyle: {
    borderColor: "#cccccc",
    backgroundColor: "#cccccc",
    borderRadius: 5,
    borderWidth: 1,
    width: "70%",
    padding: 8,
    fontSize: 10,
  },
  textContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 25,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
    backgroundColor: "purple",
    flex: 1,
  },
  modalStyle: {
    width: "100%",
    height: 40,
    zIndex: 5,
  },
  buttonMainView: {
    width: "60%",
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  buttonDisplayView: {
    backgroundColor: "white",
    borderRadius: 6,
    justifyContent: "center",
    paddingHorizontal: 25,
    padding: 5,
    borderColor: "#cccccc",
    backgroundColor: "#cccccc",
  },
});
