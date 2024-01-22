// screens/ProfileScreen.js
import React from 'react';
import { View, Text, Image, StyleSheet, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ProfileScreen = () => {
  const navigation = useNavigation();

  const navigateToFavoritedGuides = () => {
    console.log('Navigate to Favorited Guides');
  };

  const navigateToRecentlyViewedGuides = () => {
    console.log('Navigate to Recently Viewed Guides');
  };

  const navigateToSettings = () => {
    console.log('go to settings')
    navigation.navigate('Settings');
  };

  const handleLogout = () => {
    console.log('Logout');
    // Implement your logout logic here
  };

  return (
    <View style={styles.container}>
      <View style={styles.profileSection}>
        <Image source={'./assets/bee_icon.jpg'} style={styles.profilePicture} />
        <Text style={styles.userName}>John Doe</Text>
      </View>

      <View style={styles.buttonSection}>
        <Button title="Favorited Guides" onPress={navigateToFavoritedGuides} />
        <Button title="Recently Viewed" onPress={navigateToRecentlyViewedGuides} />
        <Button title="Settings" onPress={navigateToSettings} />
        <Button title="Logout" onPress={handleLogout} />
      </View>

      {/* Add the rest of your profile content below */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  profileSection: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  profilePicture: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  userName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  buttonSection: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
});

export default ProfileScreen;
