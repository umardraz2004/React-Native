import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import TaskList from "./components/TaskList";
import InputTask from "./components/InputTask";
export default function App() {

  const [enteredTask, setenteredTask] = useState("");
  const [currentTasks, setCurrentTasks] = useState([]);

  function generateRandomId(existingIds) {
    let randomId;
    do {
      randomId = Math.floor(Math.random() * 1000);
    } while (existingIds.includes(randomId));
    return randomId;
  }
  
  function inputHandler(text) {
    setenteredTask(text);
  }

  function addTaskHandler() {
    const existingIds = currentTasks.map((task) => task.id);
    const taskId = generateRandomId(existingIds);
    const newTask = { id: taskId, task: enteredTask };
    setCurrentTasks((prevTask) => [...prevTask, newTask]);
  }

  function deleteItemHandler(taskId) {
    setCurrentTasks((prevTasks) => prevTasks.filter((task) => task.id!== taskId));
  }

  console.log(currentTasks);
  
  return (
    <View style={styles.appContainer}>
      <StatusBar style="auto" />
      <InputTask
        onChangeHandler={inputHandler}
        onPressHandler={addTaskHandler}
      />
      <TaskList Tasks={currentTasks} deleteItem={deleteItemHandler} />
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    marginTop: 30,
    padding: 20,
    backgroundColor: "#fff",
  },
});
