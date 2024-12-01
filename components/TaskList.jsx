import { StyleSheet, View, FlatList } from "react-native";
import TaskItem from "./TaskItem";
const TaskList = ({ Tasks, deleteItem }) => {
  return (
    <View style={styles.taskList}>
      <FlatList
        data={Tasks}
        renderItem={(itemData) => {
          return <TaskItem onPressHandler={deleteItem} task={itemData.item.task} id={itemData.item.id} />;
        }}
        keyExtractor={(item, index) => {
          return item.id;
        }}
      />
    </View>
  );
};

export default TaskList;

const styles = StyleSheet.create({
    taskList: {
      backgroundColor: "transparent",
      marginBottom: 10,
    },
    taskText: {
      fontSize: 18,
      fontWeight: "bold",
      color: "#333",
    },
  });