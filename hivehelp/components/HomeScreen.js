
import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
//import { ColorScheme } from './ColorScheme';

const HomeScreen = ({lightA}) => {
  const navigation = useNavigation();

  const goToTemplatePage = () => {
    navigation.navigate('Template'); // 'Template' should match the name of the stack or screen you want to navigate to
  };

  return (
    <View style={styles.container}>
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