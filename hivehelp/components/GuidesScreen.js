import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Theme } from './Theme.js'; // Importing the Theme from themes.js
import { useTheme } from './ThemeProvider.js';

const GuidesScreen = () => {
  const { colorScheme } = useTheme();

  const navigation = useNavigation()

  const guideCards = [
    { title: 'School Guides', info: 'Academic Success: Ace your studies and beyond', screen: 'School Guides' },
    { title: 'Work Guides', info: 'Career Excellence: Elevate your professional journey', screen: 'Work Guides' },
    { title: 'Personal Guides', info: 'Self Improvement: Nurture your personal growth', screen: 'Personal Guides'}
  ];
  
  const navigateToScreen = (screenName) => {
    navigation.navigate(screenName)
  }
  
  return (
    
    <View style={[styles.container, { backgroundColor: colorScheme.background }]}>
      <View style={[styles.heading, { borderRadius: 8 }, {backgroundColor: colorScheme.tertiary}]}>
      <Text style={[styles.title, { color: colorScheme.text }]}>Guide Topics</Text>
      <Text style={[styles.text, { color: colorScheme.text }]}>Discover an array of guides covering everything you need. From work to school and personal life, find guidance to navigate it all.</Text>
      </View>
      {guideCards.map((card, index) => (
        <TouchableOpacity 
          key={index}
          style={[styles.card, {backgroundColor: colorScheme.secondary }]}
          onPress={() => navigateToScreen(card.screen)}
        >
          <Text style={[styles.guideTitle, { color: colorScheme.text }]}>
            {card.title}
          </Text>
          <Text style={{ color: colorScheme.text }}>
            {card.info}
          </Text>
          <TouchableOpacity 
            style={[styles.buttons, { backgroundColor: colorScheme.primaryRich }]}
            onPress={() => navigateToScreen(card.screen)}
          >
            <Text style={[styles.buttonText, { color: colorScheme.text }]}>Go</Text>
          </TouchableOpacity>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 80
  },
  heading: {
    paddingVertical: 10, 
    marginBottom: 10,
    paddingHorizontal: 20
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
    textAlign: 'center'
  },
  guideTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
    textAlign: 'center',
  },
  buttons: {
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    width: '30%',
    alignSelf: "center"
  },
  buttonText: {
    textAlign: 'center',
  }
});

export default GuidesScreen;
