import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import TaskList from './TaskList.json';
import { useTheme } from './ThemeProvider';
import { eventDetailsJSON } from './eventDetailsJSON'

const HomeScreen = () => {
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

  // Sets today's date to currentDate
  const currentDate = new Date().toISOString().split('T')[0];
  const todayEvent = eventDetailsJSON[currentDate];

  // Set default text
  const [displayText, setDisplayText] = useState('Remember to always do what you love!');

  const changeTextL = () => {
    setDisplayText('Remember to always do what you love!');
  };

  const changeTextR = () => {
    setDisplayText("It's okay to make mistakes! ");
  };

  // Navigates to Work Guides
  const goToGuidePage = () => {
    navigation.navigate('Work Guides');
  };

  // Navigates to TaskScreen
  const goToTasks = () => {
    navigation.navigate('Tasks');
  };

  // Navigates to Calendar
  const goToCalendar = () => {
    navigation.navigate('Calendar');
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
      <View style={[styles.container, {marginTop: 150}]}>
        <View style={styles.column}>
          {/* Suggested Guide */}
          <TouchableOpacity style={[styles.box, { backgroundColor: colorScheme.primary }, { borderColor: colorScheme.primaryRich }, { justifyContent: 'center' }, { paddingRight: 10 }]} onPress={goToGuidePage}>
            <Text style={[styles.buttonText, { paddingTop: 10 }, { color: colorScheme.text }, { alignSelf: 'center' }]}>Suggested</Text>
            <Text style={[styles.buttonText, { color: colorScheme.text }, { alignSelf: 'center' }]}>Guide</Text>
            <Text style={[styles.buttonText, { color: colorScheme.text }, { alignSelf: 'center' }]}>Page</Text>
          </TouchableOpacity>
        </View>
        {/* Tasks */}
        <View style={[styles.column]}>
          <TouchableOpacity style={[styles.box, { backgroundColor: colorScheme.secondaryLite }, { borderColor: colorScheme.secondaryRich }]} onPress={goToTasks}>
            <View style={[styles.boxHeader, { backgroundColor: colorScheme.secondary }, { borderBottomEndRadius: 0 }, { height: '20%' }]}>
              <Text style={[styles.buttonText, { color: colorScheme.text }]}>Tasks</Text>
            </View>
            {/* Display tasks with hexagons */}
            {tasks.map((task, index) => (
              <View key={index}>
                <View style={styles.taskContainer}>
                  <TouchableOpacity style={styles.hexagonContainer}>
                    <View style={[styles.hexagonInner, { backgroundColor: colorScheme.secondaryRich }]} />
                    <View style={[styles.hexagonBefore, { borderBottomColor: colorScheme.secondaryRich }]} />
                    <View style={[styles.hexagonAfter, { borderTopColor: colorScheme.secondaryRich }]} />
                  </TouchableOpacity>
                <Text style={[styles.text, { color: colorScheme.text }, { paddingLeft: 6 }]}>{task.name}</Text>
                </View>
              </View>
            ))}
          </TouchableOpacity>
        </View>
      </View>
      {/* Calendar */}
      <View style={styles.container}>
        <TouchableOpacity style={[styles.box, { backgroundColor: colorScheme.tertiaryLite }, { borderColor: colorScheme.tertiaryRich }, { height: '60%' }]} onPress={goToCalendar}>
          <View style={[styles.boxHeader, { backgroundColor: colorScheme.tertiary }, { borderBottomEndRadius: 0 }, { height: '25%' }]}>
            <Text style={[styles.buttonText, { color: colorScheme.text }, {alignSelf: 'center'}]}>Today</Text>
            <View style ={[{ paddingLeft: 10 }, { paddingTop: 20 }]}>
              <Text>Date: {todayEvent.dateString}</Text>
              <Text>Event Title: {todayEvent.title}</Text>
              <Text>Description: {todayEvent.description}</Text>
            </View>
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
    height: '50%',
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 2,
    borderRadius: 30
  },
  taskContainer: {
    // height: '40%',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    padding: 9,
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
  hexagonInner: {
    width: '100%',
    height: '100%'
  },
  hexagonAfter: {
    position: 'absolute',
    bottom: -6.5,
    left: 0,
    width: 0,
    height: 0,
    borderStyle: 'solid',
    borderLeftWidth: 12.5,
    borderLeftColor: 'transparent',
    borderRightWidth: 12.5,
    borderRightColor: 'transparent',
    borderTopWidth: 6.5
  },
  hexagonBefore: {
    position: 'absolute',
    top: -6.5,
    left: 0,
    width: 0,
    height: 0,
    borderStyle: 'solid',
    borderLeftWidth: 12.5,
    borderLeftColor: 'transparent',
    borderRightWidth: 12.5,
    borderRightColor: 'transparent',
    borderBottomWidth: 6.5
  },
  hexagonContainer: {
    width: 25,
    height: 14.5,
    position: 'relative'
  },
  titleText: {
    fontSize: 40,
    position: 'absolute',
    top: 90,
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
    paddingLeft: 12,
    paddingTop: 10

  }
});

export default HomeScreen;
