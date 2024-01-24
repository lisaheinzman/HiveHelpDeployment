import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

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
        <TouchableOpacity style={styles.buttonContainer} onPress={navigateToFavoritedGuides}>
          <Ionicons name="star-outline" size={24} color="black" />
          <Text style={styles.buttonText}>Favorited Guides</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.buttonContainer} onPress={navigateToRecentlyViewedGuides}>
          <Ionicons name="time-outline" size={24} color="black" />
          <Text style={styles.buttonText}>Recently Viewed</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.buttonContainer} onPress={navigateToSettings}>
          <Ionicons name="settings-outline" size={24} color="black" />
          <Text style={styles.buttonText}>Settings</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.buttonContainer} onPress={handleLogout}>
          <Ionicons name="log-out-outline" size={24} color="black" />
          <Text style={styles.buttonText}>Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff4e7',
    color: '#4C3313',
  },
  profileSection: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#ffdba2',
    paddingTop: 60,
    padding: 40,
  },
  profilePicture: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: 'whitesmoke',
  },
  userName: {
    fontSize: 25,
    fontWeight: 'bold',
    padding: 30,
    marginLeft: 20,
  },
  buttonSection: {
    flexDirection: 'column', 
    alignItems: 'flex-start',
    marginTop: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginBottom: 10,
    paddingLeft: 20,
  },
  buttonText: {
    marginLeft: 10,
    fontSize: 20,
  },
});

export default ProfileScreen;
