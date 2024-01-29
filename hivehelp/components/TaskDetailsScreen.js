import React from 'react';
import { View, Text } from 'react-native';

const TaskDetailsScreen = ({ route }) => {
  const { task } = route.params;

  return (
    <View>
      <Text>{task.name}</Text>
      <Text>{task.description}</Text>
      <Text>{task.dueDate}</Text>
      {/* Other task details */}
    </View>
  );
}

export default TaskDetailsScreen;
