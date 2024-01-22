import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, FlatList } from 'react-native';

const TasksScreen = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [dueDate, setDueDate] = useState('');

  // Function to add a task
  const addTask = () => {
    if (newTask.trim() !== '' && dueDate.trim() !== '') {
      const task = {
        name: newTask,
        dueDate: dueDate,
      };
      setTasks([...tasks, task]);
      setNewTask('');
      setDueDate('');
    }
  };

  // Function to remove a task
  const removeTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  return (
    <View style={styles.container}>
      <Text>This should be the tasks page.</Text>

      {/* Input field for new task */}
      <TextInput
        style={styles.input}
        placeholder="Enter a new task"
        value={newTask}
        onChangeText={(text) => setNewTask(text)}
      />

      {/* Input field for task due date */}
      <TextInput
        style={styles.input}
        placeholder="Enter due date"
        value={dueDate}
        onChangeText={(text) => setDueDate(text)}
      />

      {/* Button to add a new task */}
      <Button title="Add Task" onPress={addTask} />

      {/* List of tasks with three columns */}
      <FlatList
        data={tasks}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <View style={styles.taskItem}>
            <Button title="Remove Task" onPress={() => removeTask(index)} />
            <Text>{item.name}</Text>
            <Text>{item.dueDate}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    margin: 10,
    width: '80%',
  },
  taskItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 5,
    width: '80%',
  },
});

export default TasksScreen;
