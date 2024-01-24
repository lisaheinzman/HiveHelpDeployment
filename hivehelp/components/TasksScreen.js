import React, { useState } from 'react';
import { View, Text, TextInput, Button, TouchableOpacity, StyleSheet, FlatList } from 'react-native';

const TasksScreen = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [showTaskInput, setShowTaskInput] = useState(false); // To toggle task input fields

  // Function to add a task
  const addTask = () => {
    if (newTask.trim() !== '' && dueDate.trim() !== '') {
      const task = {
        name: newTask,
        description: taskDescription,
        dueDate: dueDate,
        completed: false, // Initially, the task is not completed
      };
      setTasks([...tasks, task]);
      setNewTask('');
      setTaskDescription('');
      setDueDate('');
      setShowTaskInput(false); // Hide task input fields after adding a task
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
      <View style={styles.header}>
        <Text style={styles.title}>Tasks</Text>
        <TouchableOpacity onPress={() => setShowTaskInput(!showTaskInput)}>
          <Text style={styles.addButton}>+</Text>
        </TouchableOpacity>
      </View>

      {showTaskInput && (
        <View>
          {/* Input field for new task */}
          <TextInput
            style={styles.input}
            placeholder="Enter a new task"
            value={newTask}
            onChangeText={(text) => setNewTask(text)}
          />

          {/* Input field for task description */}
          <TextInput
            style={styles.input}
            placeholder="Enter task description"
            value={taskDescription}
            onChangeText={(text) => setTaskDescription(text)}
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
        </View>
      )}

      {/* List of tasks in separate boxes with lines */}
      <FlatList
        data={tasks}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <View style={styles.taskBox}>
            <TouchableOpacity onPress={() => toggleCompletion(index)} style={styles.taskButton}>
              <Text style={styles.taskButtonText}>{item.completed ? '✓' : '○'}</Text>
            </TouchableOpacity>
            <View style={styles.lineVertical} />
            <View style={styles.taskDetails}>
              <Text style={[styles.taskName, item.completed && styles.completedTask]}>{item.name}</Text>
              <View style={styles.lineHorizontal} />
              <Text style={styles.dueDate}>{item.dueDate}</Text>
            </View>
            <View style={styles.lineVertical} />
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
    padding: 24,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '80%',
    marginBottom: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  addButton: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#007bff', // Blue color
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 12,
    marginVertical: 12,
    width: '80%',
  },
  taskBox: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 16,
    marginVertical: 12,
    borderRadius: 8,
    width: '80%',
  },
  taskButton: {
    backgroundColor: '#007bff',
    padding: 8,
    borderRadius: 8,
  },
  taskButtonText: {
    color: '#fff',
    fontSize: 18,
  },
  taskDetails: {
    flex: 1,
    marginHorizontal: 8,
  },
  lineVertical: {
    height: '100%',
    width: 1,
    backgroundColor: '#ccc',
  },
  lineHorizontal: {
    height: 1,
    width: '100%',
    backgroundColor: '#ccc',
    marginVertical: 8,
  },
  taskName: {
    fontSize: 16,
    fontWeight: 'bold',
    textDecorationLine: 'none',
  },
  completedTask: {
    textDecorationLine: 'line-through',
  },
  dueDate: {
    fontSize: 14,
    color: '#666',
  },
});

export default TasksScreen;
