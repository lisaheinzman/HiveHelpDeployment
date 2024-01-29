import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { Theme } from './Theme.js'; // Import your theme from Theme.js

const TaskDetailsScreen = ({ route, navigation }) => {
  const { task } = route.params;

  const handleUpdate = () => {
    // Here you can implement the logic to update the task details
    // For demonstration purposes, let's just log the task details to the console
    console.log('Updating task:', task);
  }

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <View style={styles.taskDetailsContainer}>
          <View style={styles.detail}>
            <Text style={[styles.label, { color: Theme.lightA.text }]}>Task Name:</Text>
            <Text style={{ color: Theme.lightA.text }}>{task.name}</Text>
          </View>
          <View style={styles.detail}>
            <Text style={[styles.label, { color: Theme.lightA.text }]}>Description:</Text>
            <Text style={{ color: Theme.lightA.text }}>{task.description}</Text>
          </View>
          <View style={styles.detail}>
            <Text style={[styles.label, { color: Theme.lightA.text }]}>Due Date:</Text>
            <Text style={{ color: Theme.lightA.text }}>{task.dueDate}</Text>
          </View>
        </View>
      </ScrollView>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={[styles.button, { backgroundColor: Theme.lightA.primary }]} onPress={() => navigation.goBack()}>
          <Text style={styles.buttonText}>Back</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.updateButton, { backgroundColor: Theme.lightA.secondary }]} onPress={handleUpdate}>
          <Text style={styles.buttonText}>Update</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.lightA.background,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentContainer: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  taskDetailsContainer: {
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  detail: {
    marginBottom: 20,
  },
  label: {
    fontWeight: 'bold',
    marginBottom: 4,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    marginBottom: 20,
  },
  button: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  updateButton: {
    backgroundColor: Theme.lightA.secondary,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default TaskDetailsScreen;
