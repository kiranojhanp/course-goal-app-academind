import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TouchableNativeFeedback,
} from "react-native";

const GoalItem = (props) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onLongPress={props.onDelete.bind(this, props.courseID)}
    >
      <View style={styles.item}>
        <Text>{props.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  item: {
    padding: 10,
    backgroundColor: "#f5a942",
    borderColor: "black",
    borderWidth: 1,
    marginTop: 10,
  },
});

export default GoalItem;
