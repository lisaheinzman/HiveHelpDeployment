// screens/SettingsScreen.js
import React from 'react';
import { View, Text, Image, StyleSheet, Button } from 'react-native';
import { useNavigation } from '@react-navigation/core';

const SettingsScreen = () => {
    const navigation = useNavigation();
  const navigateToProfile = () => {
    navigation.navigate('Profile'); // Go back to the previous screen
  };

  return (
    <View style={styles.container}>
      <View style={styles.profileButton}>
        <Button title="Back to Profile" onPress={navigateToProfile} />
      </View>

      <Text style={styles.heading}>Settings</Text>

      <View style={styles.section}>
        <Text style={styles.sectionHeading}>Account</Text>
        <Button title="Update Email" onPress={() => console.log('Update Email')} />
        <Button title="Update Password" onPress={() => console.log('Update Password')} />
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionHeading}>Theme</Text>
        <Button title="Set Color Theme" onPress={() => console.log('Set Color Theme')} />
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionHeading}>Notifications</Text>
        <Button title="Push Notifications" onPress={() => console.log('Push Notifications')} />
        <Button title="Updates" onPress={() => console.log('Updates')} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
  },
  profileButton: {
    marginBottom: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 20,
  },
  section: {
    marginBottom: 20,
  },
  sectionHeading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default SettingsScreen;
