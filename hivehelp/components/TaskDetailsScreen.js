import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { useTheme } from './ThemeProvider.js';
import { supabase } from '../supabase'; // Ensure you import supabase correctly

const TaskDetailsScreen = ({ route, navigation }) => {
  const { task } = route.params;
  const { colorScheme } = useTheme();

  const [updatedTask, setUpdatedTask] = useState(task);
  
  const navigateToEditScreen = () => {
    navigation.navigate('EditTask', { task: updatedTask });
  };

  
  const confirmDeleteTask = () => {
    Alert.alert(
      "Delete Task",
      "Are you sure you want to delete this task?",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Deletion cancelled"),
          style: "cancel"
        },
        { text: "Delete", onPress: handleDeleteTask }
      ],
      { cancelable: false }
    );
  };
  
  const handleDeleteTask = async () => {
    try {
      const { error } = await supabase
        .from('tasks')
        .delete()
        .match({ id: updatedTask.id });

      if (error) throw error;

      Alert.alert("Task Deleted", "The task has been successfully deleted.", [
        { text: "OK", onPress: () => navigation.goBack() }
      ]);
    } catch (error) {
      Alert.alert("Deletion Failed", error.message);
    }
  };

  return (
    <View style={[styles.container, {backgroundColor: colorScheme.background}]}>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <View style={styles.taskDetailsContainer}>
          <View style={styles.detail}>
            <Text style={[styles.label, { color: colorScheme.text }]}>Task Name:</Text>
            <Text style={{ color: colorScheme.text }}>{updatedTask.name}</Text>
          </View>
          <View style={styles.detail}>
            <Text style={[styles.label, { color: colorScheme.text }]}>Description:</Text>
            <Text style={{ color: colorScheme.text }}>{updatedTask.description}</Text>
          </View>
          <View style={styles.detail}>
            <Text style={[styles.label, { color: colorScheme.text }]}>Due Date:</Text>
            <Text style={{ color: colorScheme.text }}>{updatedTask.dueDate}</Text>
          </View>
        </View>
      </ScrollView>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={[styles.button, { backgroundColor: colorScheme.primary }]} onPress={() => navigation.goBack()}>
          <Text style={styles.buttonText}>Back</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.editButton, { backgroundColor: colorScheme.secondary }]} onPress={navigateToEditScreen}>
          <Text style={styles.buttonText}>Edit</Text>
        </TouchableOpacity>
        {/* Delete Button */}
        <TouchableOpacity style={[styles.button, { backgroundColor: 'red' }]} onPress={confirmDeleteTask}>
  <Text style={styles.buttonText}>Delete</Text>
</TouchableOpacity>

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  contentContainer: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  taskDetailsContainer: {
    paddingHorizontal: 20,
    alignItems: 'center',
    marginTop: 40,
  },
  detail: {
    marginBottom: 20,
    alignItems: "center"
  },
  label: {
    fontWeight: 'bold',
    marginBottom: 4,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    marginBottom: 80,
  },
  button: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    marginRight: 20,
    marginLeft: 20,
    marginBottom:80
  },
  buttonText: {
    color: 'white', // Updated to ensure text is visible on all button backgrounds
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default TaskDetailsScreen;
