import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
//  import { ColorScheme } from './ColorScheme';

const HomeScreen = ({lightA}) => {
  const navigation = useNavigation();

  const [displayText, setDisplayText] = useState('This');

  const changeTextL = () => {
    setDisplayText('Remeber to always do what you love!');
  };
  const changeTextR = () => {
    setDisplayText("It\'s okay to make mistakes\! \nYour mistakes don\'t define you.");
  };
  const goToTemplatePage = () => {
    navigation.navigate('Template'); // 'Template' should match the name of the stack or screen you want to navigate to
  };

  return (
    <View style={styles.container}>
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
      {/* Blue box acting as a button */}
      <Text style={styles.titleText} >Welcome</Text>
      <TouchableOpacity style={styles.studyTipsButton} onPress={goToTemplatePage}>
        <Text style={styles.buttonText}>Pinned Guide</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.suggestedGuideButton} onPress={goToTemplatePage}>
        <Text style={styles.buttonText}>Suggested</Text>
        <Text style={styles.buttonText}>Guide</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start', // Align to the left
    padding: 20
  },
  titleText: {
    fontSize: 40,
    position: 'absolute',
    top: 100,
    left: 20
  },
  yellowBox: {
    backgroundColor: 'FFDBA2',
    width: '80%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 25,
    position: 'absolute',
    top: 250,
    left: 30
  },
  studyTipsButton: {
    backgroundColor: '#FFC3C2',
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 25,
    position: 'absolute',
    top: 400,
    left: 30
  },
  suggestedGuideButton: {
    backgroundColor: '#FFC3C2',
    borderRadius: 20,
    paddingHorizontal: 27,
    paddingVertical: 25,
    position: 'absolute',
    top: 500,
    left: 30
  },
  buttonText: {
    color: 'black',
    fontSize: 30,
    fontWeight: 'bold'
  },
});

export default HomeScreen;