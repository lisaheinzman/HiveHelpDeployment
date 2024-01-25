import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ColorScheme } from './ColorScheme';
import TasksScreen from './TasksScreen';

const HomeScreen = ({}) => {
  const navigation = useNavigation();

  const [displayText, setDisplayText] = useState('Remeber to always do what you love!');

  const changeTextL = () => {
    setDisplayText('Remeber to always do what you love!');
  };
  const changeTextR = () => {
    setDisplayText("It\'s okay to make mistakes\! \nYour mistakes don\'t define you.");
  };
  const goToTemplatePage = () => {
    navigation.navigate('Profile'); // 'Template' should match the name of the stack or screen you want to navigate to
  };

  return (
    <View style={styles.pageContainer}>
      <Text style={styles.titleText} >Welcome</Text>
      <View style={styles.backgroundBox}></View>
      <View style={styles.yellowBox}>
          <TouchableOpacity style={styles.button} onPress={changeTextL}>
            <Text style={styles.buttonText}>{'<'}</Text>
          </TouchableOpacity>
          <Text style={styles.text}>{displayText}</Text>
          {/* Button on the right side */}
          <TouchableOpacity style={styles.button} onPress={changeTextR}>
            <Text style={styles.buttonText}>{'>'}</Text>
          </TouchableOpacity>
        </View>
      <View style={styles.container}>
        <View style={styles.column}>
          <TouchableOpacity style={[styles.box, { backgroundColor: ColorScheme.primary }, { borderColor: ColorScheme.primaryRich }]} onPress={goToTemplatePage}>
            <Text style={styles.buttonText}>Pinned Guide</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.box, { backgroundColor: ColorScheme.primary }, { borderColor: ColorScheme.primaryRich }]} onPress={goToTemplatePage}>
            <Text style={[styles.buttonText, { paddingTop: 10 }]} >Suggested</Text>
            <Text style={[styles.buttonText]}>Guide</Text>
          </TouchableOpacity>
        </View>
        <View style={[styles.column]}>
        <TouchableOpacity style={[styles.box, { backgroundColor: ColorScheme.secondary }, { borderColor: ColorScheme.secondaryRich }]} onPress={goToTemplatePage}>
            <Text style={styles.buttonText}>Tasks</Text>
          </TouchableOpacity>
        </View>
        {/* Blue box acting as a button */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  pageContainer: {
    flex: 3,
    backgroundColor: '#84A59D',
    justifyContent: 'center',
    alignItems: 'flex-start', // Align to the left
    padding: 1
  },
  container: {
  //  flex: 1,
    height: '40%',
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 2
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
  backgroundBox: {
    backgroundColor: '#FFF4E7',
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
    backgroundColor: '#FFDBA2',
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 25,
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