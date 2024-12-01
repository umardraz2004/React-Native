import { StyleSheet, View, Text, Pressable } from "react-native";
const TaskItem = ({ task, onPressHandler, id }) => {
  return (
    <View style={styles.taskItem}>
      <Pressable
        android_ripple={{ color: "#2c73d2" }}
        onPress={onPressHandler.bind(this, id)}
      >
        <Text style={styles.taskItemText}>{task}</Text>
      </Pressable>
    </View>
  );
};

export default TaskItem;

const styles = StyleSheet.create({
  taskItem: {
    marginBottom: 10,
    backgroundColor: "#0081cf",
    borderRadius: 7,
  },
  taskItemText: {
    color: "#fff",
    padding: 12,
  },
});
