
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './components/HomeScreen';
import CalendarScreen from './components/CalendarScreen';
import ProfileScreen from './components/ProfileScreen';
import TasksScreen from './components/TasksScreen';
import ToDoScreen from './components/ToDoScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>This is where the screens will be imported to and loaded in a HomeStack to navigate between the pages.</Text>
      <HomeScreen></HomeScreen>
      <CalendarScreen></CalendarScreen>
      <ProfileScreen></ProfileScreen>
      <TasksScreen></TasksScreen>
      <ToDoScreen></ToDoScreen>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
