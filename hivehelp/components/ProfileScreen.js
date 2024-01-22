// screens/ProfileScreen.js
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const ProfileScreen = () => {
  // Replace the placeholder data with your actual user data
  const user = {
    name: 'John Doe',
  };

  return (
    <View style={styles.container}>
      <Image source={'./assets/bee_icon.jpg'} style={styles.profilePicture} />
      <Text style={styles.userName}>{user.name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  profilePicture: {
    width: 150,
    height: 150,
    borderRadius: 75, // Half of the width and height to create a circular shape
    marginBottom: 20,
  },
  userName: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default ProfileScreen;
