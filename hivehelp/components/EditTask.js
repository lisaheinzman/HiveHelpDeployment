import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Theme } from './Theme.js';

const EditTask = ({ route, navigation }) => {
  // Retrieve the task details passed from the TaskDetailsScreen
  const { task } = route.params;

  // State variables to hold the updated task details
  const [name, setName] = useState(task.name);
  const [description, setDescription] = useState(task.description);
  const [dueDate, setDueDate] = useState(task.dueDate);

  // Function to handle the task update
  const handleUpdate = () => {
    const updatedTask = {
      name: name,
      description: description,
      dueDate: dueDate,
    };
    console.log('Updated task:', updatedTask);

    navigation.goBack(); 
  };

  return (
    <View style={styles.container}>
      <Text style={[styles.label, { color: Theme.lightA.text }]}>Task Name:</Text>
      <TextInput
        style={[styles.input, { borderColor: Theme.lightA.secondary }]}
        value={name}
        onChangeText={setName}
        placeholder="Enter task name"
      />
      <Text style={[styles.label, { color: Theme.lightA.text }]}>Description:</Text>
      <TextInput
        style={[styles.input, { height: 100, borderColor: Theme.lightA.secondary }]} 
        value={description}
        onChangeText={setDescription}
        placeholder="Enter task description"
        multiline={true}
      />
      <Text style={[styles.label, { color: Theme.lightA.text }]}>Due Date:</Text>
      <TextInput
        style={[styles.input, { borderColor: Theme.lightA.secondary }]}
        value={dueDate}
        onChangeText={setDueDate}
        placeholder="Enter due date"
      />
      <TouchableOpacity style={[styles.button, { backgroundColor: Theme.lightA.primary }]} onPress={handleUpdate}>
        <Text style={[styles.buttonText, { color: Theme.lightA.text }]}>Update Task</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 50, // Adjust padding as needed to lower content
    backgroundColor: Theme.lightA.background,
  },
  label: {
    fontWeight: 'bold',
    marginBottom: 8,
    marginTop:40,
  },
  input: {
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
    //marginBottom: 20,
    color: Theme.lightA.text, 
    marginTop:20,
  },
  button: {
    backgroundColor: Theme.lightA.primary,
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default EditTask;
