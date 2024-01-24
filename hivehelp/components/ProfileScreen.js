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
  };

  return (
    <View style={styles.container}>
      <View style={styles.profileSection}>
        <Image source={'./assets/bee_icon.jpg'} style={styles.profilePicture} />
        <Text style={styles.userName}>John Doe</Text>
      </View>

      <View style={styles.buttonSection}>
        <View style={styles.buttonContainer}>
          <Button title="Favorited Guides" onPress={navigateToFavoritedGuides} />
        </View>
        <View style={styles.buttonContainer}>
          <Button title="Recently Viewed" onPress={navigateToRecentlyViewedGuides} />
        </View>
        <View style={styles.buttonContainer}>
          <Button title="Settings" onPress={navigateToSettings} />
        </View>
        <View style={styles.buttonContainer}>
          <Button title="Logout" onPress={handleLogout} />
        </View>
      </View>
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
    backgroundColor: 'yellow',
  },
  profilePicture: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: 'lightgrey',
  },
  userName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  buttonSection: {
    flexDirection: 'column', // Change to column
    alignItems: 'flex-start', // Align items to the start (left)
    marginTop: 20,
  },
  buttonContainer: {
    padding: 10,
    width: '60%', 
    marginBottom: 10, 
    justifyContent: 'flex-end',
  },
});

export default ProfileScreen;
