// screens/GuidesScreen.js

import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Theme } from './Theme.js'; // Importing the Theme from themes.js

// Extracting the lightA theme for now
const { lightA } = Theme;

const GuidesScreen = ({ navigation }) => {

  const guideCards = [
    { title: 'School Guides', info: 'Academic Success: Ace your studies and beyond', screen: 'School.js' },
    { title: 'Work Guides', info: 'Career Excellence: Elevate your professional journey', screen: 'Work.js' },
    { title: 'Personal Guides', info: 'Self Improvement: Nurture your personal growth', screen: 'Personal.js'}
  ];
  
  const navigateToScreen = (screenName) => {
    navigation.navigate(screenName)
  }
  
  return (
    <View style={[styles.container, { backgroundColor: lightA.background }]}>
      <Text style={[styles.title, { color: lightA.text }]}>Guide Topics</Text>
      <Text style={[styles.text, { color: lightA.text }]}>Discover an array of guides covering everything you need. From work to school and personal life, find guidance to navigate it all.</Text>

      {guideCards.map((card, index) => (
        <TouchableOpacity 
          key={index}
          style={[styles.card, { backgroundColor: lightA.secondary }]}
          onPress={() => navigateToScreen(card.screen)}
        >
          <Text style={[styles.guideTitle, { color: lightA.text }]}>
            {card.title}
          </Text>
          <Text style={{ color: lightA.text }}>
            {card.info}
          </Text>
          <TouchableOpacity 
            style={[styles.buttons, { backgroundColor: lightA.primary }]}
            onPress={() => navigateToScreen(card.screen)}
          >
            <Text style={[styles.buttonText, { color: lightA.text }]}>Go</Text>
          </TouchableOpacity>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 80,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center'
  },
  text: {
    marginBottom: 20,
  },
  card: {
    padding: 20,
    marginBottom: 20,
    borderRadius: 10,
  },
  guideTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
    textAlign: 'center'
  },
  buttons: {
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    textAlign: 'center',
  }
});

export default GuidesScreen;
