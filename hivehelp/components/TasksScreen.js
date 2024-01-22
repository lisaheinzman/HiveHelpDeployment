import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const TasksScreen = () => {
  const [tasks, setTasks] = useState([]);

  // Function to add a task
  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  return (
    <View style={styles.container}>
      <Text>This should be the tasks page.</Text>
      <FlatList
        data={tasks}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <Text>{item}</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default TasksScreen;
