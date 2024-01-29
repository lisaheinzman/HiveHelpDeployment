// screens/GuidesScreen.js

import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';


const GuidesScreen = () => {

  const guideCards = [
    { title: 'School Guides', info: 'Academic Success: Ace your studies and beyond', screen: 'School.js' },
    { title: 'Work Guides', info: 'Career Excellence: Elevate your professional journey', screen: 'Work.js' },
    { title: 'Personal Guides', info: 'Self Improvement: Nurture your personal growth', screen: 'Personal.js'}
  ];
  
  const navigateToScreen = (screenName) => {
    navigation.navigate(screenName)
  }
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Guide Topics</Text>
      <Text style={styles.text}>Discover an array of guides
covering everything you need. 
From work to school and 
personal life, find guidance to 
navigate it all.</Text>

{guideCards.map((card, index) => (
  <TouchableOpacity 
  key={index}
  style={styles.card}
  onPress={() => navigateToScreen(card.screen)}>
    <Text style={styles.guideTitle}>{card.title}</Text>
    <Text>{card.info}</Text>
    <TouchableOpacity 
    style={styles.buttons}
    onPress={() => navigateToScreen(card.screen)}>
      <Text style={styles.buttonText}>Go</Text>
    </TouchableOpacity>
  </TouchableOpacity>
))}
    </View>
  );
};

const styles = StyleSheet.create ({

})
export default GuidesScreen;
