import { StyleSheet, View, TextInput, Button } from "react-native";
const InputTask = ({ onChangeHandler, onPressHandler }) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder="Enter your task!"
        style={styles.input}
        onChangeText={onChangeHandler}
      />
      <Button title="Add task" onPress={onPressHandler} />
    </View>
  );
};

export default InputTask;

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
  input: {
    flex: 1,
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    backgroundColor: "#fff",
    marginRight: 10,
  },
});
