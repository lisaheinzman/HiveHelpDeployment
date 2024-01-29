import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';

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
        <View>
          <Text style={styles.label}>Task Name:</Text>
          <Text>{task.name}</Text>
        </View>
        <View>
          <Text style={styles.label}>Description:</Text>
          <Text>{task.description}</Text>
        </View>
        <View>
          <Text style={styles.label}>Due Date:</Text>
          <Text>{task.dueDate}</Text>
        </View>
      </ScrollView>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
          <Text style={styles.buttonText}>Back</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.updateButton]} onPress={handleUpdate}>
          <Text style={styles.buttonText}>Update</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  contentContainer: {
    paddingBottom: 80,
  },
  label: {
    fontWeight: 'bold',
    marginBottom: 4,
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 16,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
  },
  button: {
    backgroundColor: '#007AFF',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  updateButton: {
    backgroundColor: '#4CD964',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default TaskDetailsScreen;
