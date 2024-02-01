import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Theme } from './Theme';
import * as FileSystem from 'expo-file-system';
import TaskList from './TaskList.json'; // Import the TaskList.json file
import { useTheme } from './ThemeProvider';


import { useTheme } from './ThemeProvider';

const HomeScreen = () => {
  const { colorScheme } = useTheme();
  const { colorScheme } = useTheme();
  const navigation = useNavigation();

  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const readJsonFile = async () => {
      try {
        // Set tasks from the imported JSON data
        setTasks(TaskList.tasks);
      } catch (error) {
        console.error('Error reading JSON file:', error);
      }
    };

    readJsonFile();
  }, []);

  const [displayText, setDisplayText] = useState('Remember to always do what you love!');

  const changeTextL = () => {
    setDisplayText('Remember to always do what you love!');
  };

  const changeTextR = () => {
    setDisplayText("It's okay to make mistakes! Your mistakes don't define you.");
  };

  const goToTemplatePage = () => {
    navigation.navigate('SignIn'); // 'Template' should match the name of the stack or screen you want to navigate to
  };

  const goToTasks = () => {
    navigation.navigate('Tasks'); // 'Template' should match the name of the stack or screen you want to navigate to
  };

  const goToCalendar = () => {
    navigation.navigate('Calendar'); // 'Template' should match the name of the stack or screen you want to navigate to
  };
  return (
    <View style={[styles.pageContainer, { backgroundColor: colorScheme.homeBackground}]}>
      <Text style={[styles.titleText, { color: colorScheme.text }]}>Welcome</Text>
      <View style={[styles.backgroundBox, { backgroundColor: colorScheme.background}]}></View>
      <View style={[styles.yellowBox, { backgroundColor: colorScheme.tertiary, borderColor: colorScheme.tertiaryRich }]}>
        <TouchableOpacity style={styles.button} onPress={changeTextL}>
          <Text style={[styles.buttonText, { color: colorScheme.text }]}>{'<'}</Text>
        </TouchableOpacity>
        <Text style={[styles.text, { color: colorScheme.text }]}>{displayText}</Text>
        {/* Button on the right side */}
        <TouchableOpacity style={styles.button} onPress={changeTextR}>
          <Text style={[styles.buttonText, { color: colorScheme.text }]}>{'>'}</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.container}>
        <View style={styles.column}>
          {/* Pinned Guide */}
          <TouchableOpacity style={[styles.box, { backgroundColor: colorScheme.primary }, { borderColor: colorScheme.primaryRich }]} onPress={goToTemplatePage}>
            <Text style={[styles.buttonText, { color: colorScheme.text }]}>Pinned Guide</Text>
          </TouchableOpacity>
          {/* Suggested Guide */}
          <TouchableOpacity style={[styles.box, { backgroundColor: colorScheme.primary }, { borderColor: colorScheme.primaryRich }]} onPress={goToTemplatePage}>
            <Text style={[styles.buttonText, { paddingTop: 10 }, { color: colorScheme.text }]}>Suggested</Text>
            <Text style={[styles.buttonText, { color: colorScheme.text }]}>Guide</Text>
          </TouchableOpacity>
        </View>
        {/* Tasks */}
        <View style={[styles.column]}>
          <TouchableOpacity style={[styles.box, { backgroundColor: colorScheme.secondaryLite }, { borderColor: colorScheme.secondaryRich }]} onPress={goToTemplatePage}>
            <View style={[styles.boxHeader, { backgroundColor: colorScheme.secondary }, { borderBottomEndRadius: 0 }]}>
              <Text style={[styles.buttonText, { color: colorScheme.text }]}>Tasks</Text>
            </View>
            {/* Display tasks */}
            {tasks.map((task, index) => (
              <View key={index}>
                <Text style={[styles.text, { color: colorScheme.text }]}>{task.name}</Text>
              </View>
            ))}
          </TouchableOpacity>
        </View>
      </View>
      {/* Calendar */}
      <View style={styles.calendarWidget}>
        <TouchableOpacity style={[styles.box, { backgroundColor: colorScheme.tertiaryLite }, { borderColor: colorScheme.tertiaryRich }]} onPress={goToTemplatePage}>
          <View style={[styles.boxHeader, { backgroundColor: colorScheme.tertiary }, { borderBottomEndRadius: 0 }]}>
            <Text style={[styles.buttonText, { color: colorScheme.text }]}>This Week</Text>
            {/*<Calendar/>*/}
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start', // Align to the left
    paddingTop: 170
  },
  container: {
  //  flex: 1,
    height: '40%',
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 2,
    borderRadius: 30
  },
  column: {
    flex: 1,
    justifyContent: 'space-between',
    margin: 8
  },
  box: {
    flex: 1,
    borderRadius: 20,
    margin: 8,
    borderBottomWidth: 5,
    borderRightWidth: 5
  },
  boxHeader: {
    height: '20%',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20
  },
  backgroundBox: {
    borderRadius: 20,
    paddingHorizontal: 215,
    paddingVertical: 500,
    position: 'absolute',
    top: 200,
    left: 0
  },
  titleText: {
    fontSize: 40,
    position: 'absolute',
    top: 100,
    left: 20
  },
  yellowBox: {
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 25,
    borderBottomWidth: 5,
    borderRightWidth: 5,
    position: 'absolute',
    top: 150,
    left: 20
  },
  buttonText: {
    color: 'black',
    fontSize: 30,
    fontWeight: 'bold',
    paddingLeft: 12

  }
});

export default HomeScreen;
