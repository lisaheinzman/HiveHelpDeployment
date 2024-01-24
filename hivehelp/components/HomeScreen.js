import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
//  import { ColorScheme } from './ColorScheme';

const HomeScreen = ({lightA}) => {
  const navigation = useNavigation();

  const [displayText, setDisplayText] = useState('Remeber to always do what you love!');

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
    <View style={styles.pageContainer}>
      <Text style={styles.titleText} >Welcome</Text>
      <View style={styles.backgroundBox}></View>
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
        <TouchableOpacity style={styles.studyTipsButton} onPress={goToTemplatePage}>
          <Text style={styles.buttonText}>Pinned Guide</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.suggestedGuideButton} onPress={goToTemplatePage}>
          <Text style={styles.buttonText}>Suggested</Text>
          <Text style={styles.buttonText}>Guide</Text>
        </TouchableOpacity>
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
    padding: 20
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start', // Align to the left
    padding: 20
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
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 25,
    position: 'absolute',
    top: 150,
    left: 20
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