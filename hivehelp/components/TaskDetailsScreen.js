import React from 'react';
import { View, Text } from 'react-native';

const TaskDetailsScreen = ({ route }) => {
  const { task } = route.params;

  return (
    <View>
      <Text>Name: {task.name}</Text>
      <Text>Description: {task.description}</Text>
      <Text>Due Date: {task.dueDate}</Text>
    </View>
  );
};

export default TaskDetailsScreen;
