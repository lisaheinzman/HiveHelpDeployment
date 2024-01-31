import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, TextInput } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 
import { Theme } from './Theme.js'; 
import { useNavigation } from '@react-navigation/native'; // Import useNavigation hook

const TasksScreen = () => {
  const navigation = useNavigation(); // Initialize navigation

  const handleTaskPress = (task) => {
    navigation.navigate('TaskDetails', { task }); // Navigate to TaskDetailsScreen and pass task details
  };
  
  const [tasks, setTasks] = useState([]);
  const [showAddTask, setShowAddTask] = useState(false);
  const [showCompletedTasks, setShowCompletedTasks] = useState(false);
  const [newTaskName, setNewTaskName] = useState("");
  const [newTaskDescription, setNewTaskDescription] = useState("");
  const [newTaskDueDate, setNewTaskDueDate] = useState("");

  useEffect(() => {
    const jsonData = [
      {
        name: "Walk Dog",
        description: "Walk my neighbors dog on 1/5.",
        dueDate: "01/05/2024",
        completed: false,
      },
      {
        name: "Finish Research Project",
        description: "Complete performing research and finish paper.",
        dueDate: "01/15/2024",
        completed: false,
      },
      {
        name: "Grocery Shop",
        description: "Weekly grocery shopping at Trader Joes and Aldis.",
        dueDate: "02/05/2024",
        completed: false,
      },
      {
        name: "Car Wash",
        description: "Take car to car wash.",
        dueDate: "01/29/2024",
        completed: false,
      },
      {
        name: "Fold Clothes",
        description: "Finished laundry, just have to fold clothes and put them away.",
        dueDate: "01/28/2023",
        completed: true,
      },
      {
        name: "Call Mom",
        description: "Mom wanted me to call her about Dad's birthday after she gets back from the trip.",
        dueDate: "01/30/2024",
        completed: true,
      },
    ];
    setTasks(jsonData);
  }, []);

  const toggleCompletion = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };
  

  const addTask = () => {
    if (newTaskName.trim() !== "" && newTaskDueDate.trim() !== "") {
      const newTask = {
        name: newTaskName,
        description: newTaskDescription,
        dueDate: newTaskDueDate,
        completed: false,
      };
      setTasks([...tasks, newTask]);
      setNewTaskName("");
      setNewTaskDescription("");
      setNewTaskDueDate("");
      setShowAddTask(false);
    }
  }

  const completedTasks = tasks.filter((task) => task.completed);


  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Tasks</Text>
        <TouchableOpacity
          style={styles.plusButton}
          onPress={() => setShowAddTask(!showAddTask)}
        >
          <View style={styles.hexagonInner} />
          <View style={styles.hexagonBefore} />
          <View style={styles.hexagonAfter} />
          <AntDesign
            name="plus"
            size={24}
            color="black"
            style={styles.plusIcon}
          />
        </TouchableOpacity>
      </View>

      {showAddTask && (
        <View style={styles.addTaskSection}>
          <Text style={styles.sectionTitle}>Add Task</Text>
          <TextInput
            style={styles.input}
            placeholder="Task Name"
            value={newTaskName}
            onChangeText={setNewTaskName}
          />
          <TextInput
            style={styles.input}
            placeholder="Task Description"
            value={newTaskDescription}
            onChangeText={setNewTaskDescription}
          />
          <TextInput
            style={styles.input}
            placeholder="Due Date"
            value={newTaskDueDate}
            onChangeText={setNewTaskDueDate}
          />
          <TouchableOpacity style={styles.addButton} onPress={addTask}>
            <Text style={styles.addButtonText}>Add</Text>
          </TouchableOpacity>
        </View>
      )}

<FlatList
  data={showCompletedTasks ? completedTasks : tasks.filter(task => !task.completed)}
  keyExtractor={(item, index) => index.toString()}
  renderItem={({ item, index }) => (
    <TouchableOpacity onPress={() => handleTaskPress(item)}>
      <View style={styles.task}>
        <TouchableOpacity
          onPress={() => toggleCompletion(index)}
          style={styles.completeButton}
        >
          <View style={styles.hexagonInner} />
          <View style={styles.hexagonBefore} />
          <View style={styles.hexagonAfter} />
        </TouchableOpacity>
        <View style={styles.taskDetails}>
          <Text
            style={[
              styles.taskName,
              item.completed && styles.completedTask,
            ]}
          >
            {item.name}
          </Text>
          <Text style={styles.taskDescription}>{item.description}</Text>
          <Text style={styles.dueDate}>Due Date: {item.dueDate}</Text>
        </View>
      </View>
    </TouchableOpacity>
  )}
/>

      <TouchableOpacity
        style={styles.showCompletedButton}
        onPress={() => setShowCompletedTasks(!showCompletedTasks)}
      >
        <Text style={styles.showCompletedButtonText}>
          {showCompletedTasks ? "Hide Completed Tasks" : "Show Completed Tasks"}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.lightA.background, // Use theme color for background
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: Theme.lightA.secondaryRich , 
    textAlign: 'center',
    width: '100%',
    paddingTop: 50,
    paddingBottom: 20,
    paddingHorizontal: 10,
    marginBottom: 20
  },
  title: {
    fontSize: 30,
    //fontWeight: "bold",
    color: Theme.lightA.text, // Use theme color for text
  },
  plusButton: {
    width: 50,
    height: 29,
    position: "relative",
  },
  hexagonInner: {
    width: "100%",
    height: "100%",
    backgroundColor: Theme.lightA.primary,
  },
  hexagonAfter: {
    position: "absolute",
    bottom: -13,
    left: 0,
    width: 0,
    height: 0,
    borderStyle: "solid",
    borderLeftWidth: 25,
    borderLeftColor: "transparent",
    borderRightWidth: 25,
    borderRightColor: "transparent",
    borderTopWidth: 13,
    borderTopColor: Theme.lightA.primary,
  },
  hexagonBefore: {
    position: "absolute",
    top: -13,
    left: 0,
    width: 0,
    height: 0,
    borderStyle: "solid",
    borderLeftWidth: 25,
    borderLeftColor: "transparent",
    borderRightWidth: 25,
    borderRightColor: "transparent",
    borderBottomWidth: 13,
    borderBottomColor: Theme.lightA.primary,
  },
  plusIcon: {
    position: "absolute",
    top: 3,
    left: 14,
  },
  addTaskSection: {
    marginBottom: 20,
    marginHorizontal: 20, 
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    color: Theme.lightA.text, 
   textAlign: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
    color: Theme.lightA.text,
  },
  addButton: {
    backgroundColor: Theme.lightA.secondaryRich,
    padding: 10,
    borderRadius: 10,
    alignItems: "center",
    marginHorizontal: 20, 
  },
  addButtonText: {
    color: Theme.lightA.text,
    fontWeight: "bold",
  },
  task: {
    marginLeft: 20, 
    marginRight: 20,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
    paddingBottom: 15, 
    borderBottomWidth: 1,
    marginRight: 20,
    paddingBottom: 15,
  },
  taskDetails: {
    flex: 1,
    marginLeft: 20,
  },
  taskName: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
    color: Theme.lightA.text, 
  },
  taskDescription: {
    fontSize: 16,
    color: Theme.lightA.text, 
    marginBottom: 5,
  },
  dueDate: {
    fontSize: 14,
    color: Theme.lightA.text, 
  },
  completeButton: {
    width: 50,
    height: 29,
    position: "relative",
  },
  completedTask: {
    textDecorationLine: "line-through",
    color: Theme.lightA.text, // Use theme color for text
  },
  showCompletedButton: {
    backgroundColor: Theme.lightA.secondaryRich,
    padding: 10,
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 50,
    marginHorizontal: 20, 
  },
  showCompletedButtonText: {
    color: Theme.lightA.text,
    fontWeight: "bold", 
  },
})

export default TasksScreen

