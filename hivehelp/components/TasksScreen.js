import React, { useState } from 'react';
import { View, Text, TextInput, Button, TouchableOpacity, StyleSheet, FlatList } from 'react-native';

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
        completed: false, // Initially, the task is not completed
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

  // Function to toggle task completion
  const toggleCompletion = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tasks Page</Text>

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

      {/* List of tasks in a grid layout */}
      <FlatList
        data={tasks}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <View style={styles.taskContainer}>
            <TouchableOpacity onPress={() => toggleCompletion(index)}>
              <Text style={[styles.taskName, item.completed && styles.completedTask]}>
                {item.completed ? '✓ ' : '○ '}
              </Text>
            </TouchableOpacity>
            <Text style={[styles.taskName, item.completed && styles.completedTask]}>{item.name}</Text>
            <Text style={styles.dueDate}>{item.dueDate}</Text>
            <Button title="Remove" onPress={() => removeTask(index)} />
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
    backgroundColor: '#f5f5f5',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 8,
    marginVertical: 8,
    width: '80%',
  },
  taskContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 12,
    marginVertical: 8,
    borderRadius: 8,
    width: '80%',
  },
  taskName: {
    fontSize: 16,
    fontWeight: 'bold',
    textDecorationLine: 'none', // Initial state: no strike-through
  },
  completedTask: {
    textDecorationLine: 'line-through', // Apply strike-through for completed tasks
  },
  dueDate: {
    fontSize: 14,
    color: '#666',
  },
});

export default TasksScreen;
