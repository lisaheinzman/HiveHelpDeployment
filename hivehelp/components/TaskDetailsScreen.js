import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TaskDetailsScreen = ({ route }) => {
  const { task } = route.params;

  return (
    <View style={styles.container}>
      <Text>Name: {task.name}</Text>
      <Text>Description: {task.description}</Text>
      <Text>Due Date: {task.dueDate}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default TaskDetailsScreen;
