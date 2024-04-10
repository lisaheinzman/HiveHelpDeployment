import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Theme } from './Theme.js';
import { useTheme } from './ThemeProvider.js';
import { supabase } from '../supabase'; 

const EditTask = ({ route, navigation }) => {
  const { colorScheme } = useTheme();
  const { task } = route.params;

  const [name, setName] = useState(task.name);
  const [description, setDescription] = useState(task.description);
  const [dueDate, setDueDate] = useState(task.dueDate);

  const handleUpdate = async () => {
    try {
      const { data, error } = await supabase
        .from('tasks')
        .update({ name, description, dueDate })
        .eq('id', task.id);

      if (error) {
        throw error;
      }

      console.log('Task updated successfully:', data);

      // Navigate back after successful update
      navigation.goBack();
    } catch (error) {
      console.error('Error updating task:', error.message);
      // Handle error (e.g., show an error message to the user)
    }}

  return (
    <View style={[styles.container, {backgroundColor: colorScheme.background}]}>
      <Text style={[styles.label, { color: colorScheme.text }]}>Task Name:</Text>
      <TextInput
        style={[styles.input, { borderColor: colorScheme.secondary }, {color: colorScheme.text}]}
        value={name}
        onChangeText={setName}
        placeholder="Enter task name"
      />
      <Text style={[styles.label, { color: colorScheme.text }]}>Description:</Text>
      <TextInput
        style={[styles.input, { height: 100, borderColor: colorScheme.secondary }, {color: colorScheme.text}]} 
        value={description}
        onChangeText={setDescription}
        placeholder="Enter task description"
        multiline={true}
      />
      <Text style={[styles.label, { color: colorScheme.text }]}>Due Date:</Text>
      <TextInput
        style={[styles.input, { borderColor: colorScheme.secondary }, {color: colorScheme.text}]}
        value={dueDate}
        onChangeText={setDueDate}
        placeholder="Enter due date"
      />
      <TouchableOpacity style={[styles.button, { backgroundColor: colorScheme.primary }]} onPress={handleUpdate}>
        <Text style={[styles.buttonText, { color: colorScheme.text }]}>Update Task</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 50,
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