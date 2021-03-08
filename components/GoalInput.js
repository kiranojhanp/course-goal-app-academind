import React, { useState } from "react";
import { StyleSheet, TextInput, View, Button, Modal } from "react-native";

const GoalInput = (props) => {
  const [enteredGoal, setEnteredGoal] = useState("");

  const handleText = (enteredCourse) => {
    setEnteredGoal(enteredCourse);
  };

  const onAddGoal = () => {
    if (enteredGoal) {
      props.addGoalHandler(enteredGoal);
      setEnteredGoal("");
    } else {
      console.log("The course name cannot be empty");
    }
  };

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.screen}>
        <TextInput
          placeholder="Enter a name"
          style={styles.InputTextStyle}
          onChangeText={handleText}
          value={enteredGoal}
        />
        <View style={styles.ButtonStyle}>
          <View style={styles.button}>
            <Button title="CANCEL" onPress={props.onCancel} color="red" />
          </View>
          <View style={styles.button}>
            <Button title="ADD" onPress={onAddGoal} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  InputTextStyle: {
    width: "80%",
    padding: 10,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: "black",
  },
  ButtonStyle: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "60%",
  },
  button: {
    width: "40%",
  },
});

export default GoalInput;
