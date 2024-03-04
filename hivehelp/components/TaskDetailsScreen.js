import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { Theme } from './Theme.js';
import { useTheme } from './ThemeProvider.js';

const TaskDetailsScreen = ({ route, navigation }) => {
  const { task } = route.params;
  const { colorScheme } = useTheme();

  const [updatedTask, setUpdatedTask] = useState(task);
  
  const navigateToEditScreen = () => {
    navigation.navigate('EditTask', { task: updatedTask });
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
    //justifyContent: 'center',
    paddingHorizontal: 20,
    alignItems: 'center',
    marginTop: 40,
  },
  detail: {
    marginBottom: 20,
    fontSize: 60,
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
    color: 'Theme.lightA.text',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default TaskDetailsScreen;
