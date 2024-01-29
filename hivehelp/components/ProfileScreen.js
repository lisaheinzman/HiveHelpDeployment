import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Modal, TextInput, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import profilePicture from '../assets/bee_icon.jpg'

import HexagonIcon from '../assets/hexagonicon';

const ProfileScreen = () => {
  const navigation = useNavigation();

  const [editModalVisible, setEditModalVisible] = useState(false);
  const [newName, setNewName] = useState('');

  const navigateToFavoritedGuides = () => {
    console.log('Navigate to Favorited Guides');
  };

  const navigateToRecentlyViewedGuides = () => {
    console.log('Navigate to Recently Viewed Guides');
  };

  const navigateToSettings = () => {
    console.log('go to settings');
    navigation.navigate('Settings');
  };

  const handleLogout = () => {
    console.log('Logout');
    navigation.navigate('SignIn');
  };

  const handleEditPress = () => {
    setEditModalVisible(true);
    setNewName(''); // Reset the input field
  };

  const handleCancelEdit = () => {
    setEditModalVisible(false);
  };

  const handleSaveEdit = () => {
    // Implement logic to save changes (e.g., update profile picture and name)
    setEditModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.profileSection}>
        <HexagonIcon size={100} color="#f7f7f7" /> {/* Adjust size and color based on your design */}
        <Image source={profilePicture} style={styles.profilePicture} />
        <Text style={styles.userName}>New User</Text>
        <TouchableOpacity onPress={handleEditPress} style={styles.editButton}>
          <Ionicons name="create-outline" size={30} color="black" />
        </TouchableOpacity>
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

      {/* Edit Profile Modal */}
      <Modal visible={editModalVisible} animationType="slide">
        <View style={styles.modalContainer}>
          <TextInput
            placeholder="Enter new name"
            style={styles.input}
            value={newName}
            onChangeText={(text) => setNewName(text)}
          />
          <View style={styles.modalButtonsContainer}>
            <Button title="Cancel" onPress={handleCancelEdit} />
            <Button title="Save" onPress={handleSaveEdit} />
          </View>
        </View>
      </Modal>
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
    position: 'relative',
  },
  profilePicture: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: 'grey',
    position: 'absolute',
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
    padding: 10,
    borderBottomWidth: 1,
  },
  buttonText: {
    marginLeft: 10,
    fontSize: 20,
  },
  editButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    borderBottomWidth: 1,
    marginBottom: 20,
    padding: 10,
    width: '80%',
    fontSize: 18,
  },
  modalButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '80%',
  },
});

export default ProfileScreen;
