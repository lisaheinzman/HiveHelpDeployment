import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import profilePicture from '../assets/bee_icon.jpg'

const SettingsScreen = () => {
  const navigation = useNavigation();

  const navigateToProfile = () => {
    navigation.navigate('Profile'); // Go back to the previous screen
  };

  return (
    <View style={styles.container}>
      <View>
        <TouchableOpacity onPress={navigateToProfile} style={styles.profileButton}>
        <Image source={profilePicture} style={styles.profilePicture} />
      </TouchableOpacity>
      </View>
      <View style={styles.header}>
      
        <Text style={styles.heading}>Settings</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionHeading}>Account</Text>
        <View style={styles.line} />
        <TouchableOpacity style={styles.button} onPress={() => console.log('Update Email')}>
          <Text style={styles.buttonText}>Update Email</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => console.log('Update Password')}>
          <Text style={styles.buttonText}>Update Password</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => console.log('Delete Account')}>
          <Text style={styles.buttonText}>Delete Account</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionHeading}>Theme</Text>
        <View style={styles.line} />
        <TouchableOpacity style={styles.button} onPress={() => console.log('Set Color Theme')}>
          <Text style={styles.buttonText}>Set Color Theme</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionHeading}>Notifications</Text>
        <View style={styles.line} />
        <TouchableOpacity style={styles.button} onPress={() => console.log('Push Notifications')}>
          <Text style={styles.buttonText}>Push Notifications</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => console.log('Updates')}>
          <Text style={styles.buttonText}>Updates</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    paddingTop: 20,
  },
  backButton: {
    marginRight: 20,
  },
  heading: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  section: {
    marginBottom: 20,
    padding: 10,
  },
  sectionHeading: {
    fontSize: 18,
    fontWeight: 'bold',
    padding: 10,
  },
  button: {
    backgroundColor: '#3498db', // Set your desired color
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white', // Set your desired text color
    fontSize: 16,
    fontWeight: 'bold',
  },
  profilePicture: {
    width: 60,
    height: 60,
    borderRadius: 50,
    backgroundColor: 'whitesmoke',
  },
  line: {
    borderBottomWidth: 1,
    borderBottomColor: 'black', // Set your desired line color
    marginBottom: 10,
  },
});

export default SettingsScreen;
