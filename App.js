import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, View, Button, FlatList } from "react-native";

import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  const addGoalHandler = (goalContent) => {
    setCourseGoals((currentGoals) => [
      ...courseGoals,
      { id: currentGoals.length, value: goalContent },
    ]);
    setIsAddMode(false);
  };

  const removeGoalHandler = (goalID) => {
    setCourseGoals((currentGoals) => {
      return currentGoals.filter((goal) => goal.id !== goalID);
    });
  };

  const cancelGoalHandler = () => {
    setIsAddMode(false);
  };

  return (
    <View style={styles.root}>
      <Button title="Add new Goal" onPress={() => setIsAddMode(true)} />
      <GoalInput
        visible={isAddMode}
        addGoalHandler={addGoalHandler}
        onCancel={cancelGoalHandler}
      />

      <FlatList
        keyExtractor={(item, index) => index.toString()}
        data={courseGoals}
        renderItem={(itemData) => (
          <GoalItem
            courseID={itemData.item.id}
            onDelete={removeGoalHandler}
            title={itemData.item.value}
          />
        )}
      ></FlatList>

      <StatusBar style="dark" />
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    padding: 50,
  },
});

// #4ebc7a #f5a942 #e93e43 my colors
