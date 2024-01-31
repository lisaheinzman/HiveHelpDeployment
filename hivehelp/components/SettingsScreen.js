import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Modal, TextInput, Button, Switch } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import profilePicture from '../assets/bee_icon.jpg';

import lightMode1 from '../assets/light_mode_1.png';
import lightMode2 from '../assets/light_mode_2.png';
import darkMode1 from '../assets/dark_mode_1.png';
import darkMode2 from '../assets/dark_mode_2.png';
import { Theme } from './Theme';
import {setColorScheme, colorScheme, useTheme} from './ThemeProvider';

const SettingsScreen = () => {
  const { colorScheme, changeColorScheme } = useTheme();
  const navigation = useNavigation();

  const [updateEmailModalVisible, setUpdateEmailModalVisible] = useState(false);
  const [newEmail, setNewEmail] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(true);

  const [updatePasswordModalVisible, setUpdatePasswordModalVisible] = useState(false);
  const [newPassword, setNewPassword] = useState('');
  const [isValidPassword, setIsValidPassword] = useState(true);

  const [deleteAccountModalVisible, setDeleteAccountModalVisible] = useState(false);

  const [notifications, setNotifications] = useState(true);

  const [colorThemeModalVisible, setColorThemeModalVisible] = useState(false);
  const [selectedColorTheme, setSelectedColorTheme] = useState('Light'); // Default theme

  const [selectedColorModeImage, setSelectedColorModeImage] = useState(null);

  const openUpdateEmailModal = () => {
    setNewEmail('');
    setUpdateEmailModalVisible(true);
  };

  const closeUpdateEmailModal = () => {
    setUpdateEmailModalVisible(false);
    setIsValidEmail(true);
  };

  const openUpdatePasswordModal = () => {
    setNewPassword('');
    setUpdatePasswordModalVisible(true);
  };

  const closeUpdatePasswordModal = () => {
    setUpdatePasswordModalVisible(false);
    setIsValidPassword(true);
  };

  const openDeleteAccountModal = () => {
    setDeleteAccountModalVisible(true);
  };

  const closeDeleteAccountModal = () => {
    setDeleteAccountModalVisible(false);
  };

  const openColorThemeModal = () => {
    setColorThemeModalVisible(true);
  };

  const closeColorThemeModal = () => {
    setColorThemeModalVisible(false);
  };

  const handleUpdateEmail = () => {
    if (isValidEmail) {
      console.log('New Email:', newEmail);
      closeUpdateEmailModal();
    }
  };

  const handleUpdatePassword = () => {
    if (isValidPassword) {
      console.log('New Password:', newPassword);
      closeUpdatePasswordModal();
    }
  };

  const handleDeleteAccount = () => {
    console.log('Deleting Account...');
    closeDeleteAccountModal();
    navigation.navigate('SignIn');
  };

  const handleColorThemeChange = (theme) => {
    setSelectedColorTheme(theme);
  };

  const handleColorThemeConfirm = () => {
    console.log('Selected Color Theme:', selectedColorModeImage);
    changeColorScheme(Theme[selectedColorModeImage]);
    closeColorThemeModal();
  };

  const toggleNotifications = () => {
    setNotifications((prev) => !prev);
  };

  const navigateToProfile = () => {
    navigation.navigate('Profile');
  };

  const handleColorModeImageSelect = (image) => {
    setSelectedColorModeImage(image);
  };

  const renderImagesForColorTheme = () => {
    if (selectedColorTheme === 'Light') {
      return (
        <View style={styles.imageContainer}>
          <TouchableOpacity
            style={[
              styles.themeImageContainer,
              selectedColorModeImage === 'lightA' && styles.selectedImage,
            ]}
            onPress={() => handleColorModeImageSelect('lightA')}
          >
            <Image source={lightMode1} style={[styles.themeImage, selectedColorModeImage === 'lightA' && styles.selectedImage]} />
            <Text>Light Mode 1</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.themeImageContainer,
              selectedColorModeImage === 'lightB' && styles.selectedImage,
            ]}
            onPress={() => handleColorModeImageSelect('lightB')}
          >
            <Image source={lightMode2} style={[styles.themeImage, selectedColorModeImage === 'lightB' && styles.selectedImage]} />
            <Text>Light Mode 2</Text>
          </TouchableOpacity>
        </View>
      );
    } else if (selectedColorTheme === 'Dark') {
      return (
        <View style={styles.imageContainer}>
          <TouchableOpacity
            style={[
              styles.themeImageContainer,
              selectedColorModeImage === 'darkA' && styles.selectedImage,
            ]}
            onPress={() => handleColorModeImageSelect('darkA')}
          >
            <Image source={darkMode1} style={[styles.themeImage, selectedColorModeImage === 'darkA' && styles.selectedImage]} />
            <Text>Dark Mode 1</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.themeImageContainer,
              selectedColorModeImage === 'darkB' && styles.selectedImage,
            ]}
            onPress={() => handleColorModeImageSelect('darkB')}
          >
            <Image source={darkMode2} style={[styles.themeImage, selectedColorModeImage === 'darkB' && styles.selectedImage]} />
            <Text>Dark Mode 2</Text>
          </TouchableOpacity>
        </View>
      );
    }
    return null;
  };

  const renderUpdateEmailModal = () => (
    <Modal visible={updateEmailModalVisible} animationType="slide" transparent={true}>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>Update Email</Text>
          <Text style={styles.currentEmailText}>Current Email: user@example.com</Text>
          <TextInput
            style={[styles.input, !isValidEmail && styles.invalidInput]}
            placeholder="Enter new email"
            value={newEmail}
            onChangeText={(text) => {
              setNewEmail(text);
              setIsValidEmail(true);
            }}
          />
          {!isValidEmail && <Text style={styles.errorText}>Please enter a valid email address</Text>}
          <View style={styles.buttonContainer}>
            <Button title="Cancel" onPress={closeUpdateEmailModal} color="#999" />
            <Button title="Update" onPress={handleUpdateEmail} />
          </View>
        </View>
      </View>
    </Modal>
  );

  const renderUpdatePasswordModal = () => (
    <Modal visible={updatePasswordModalVisible} animationType="slide" transparent={true}>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>Update Password</Text>
          <TextInput
            style={[styles.input, !isValidPassword && styles.invalidInput]}
            placeholder="Enter new password"
            secureTextEntry={true}
            value={newPassword}
            onChangeText={(text) => {
              setNewPassword(text);
              setIsValidPassword(true);
            }}
          />
          {!isValidPassword && <Text style={styles.errorText}>Password must be at least 6 characters</Text>}
          <View style={styles.buttonContainer}>
            <Button title="Cancel" onPress={closeUpdatePasswordModal} color="#999" />
            <Button title="Update" onPress={handleUpdatePassword} />
          </View>
        </View>
      </View>
    </Modal>
  );

  const renderDeleteAccountModal = () => (
    <Modal visible={deleteAccountModalVisible} animationType="slide" transparent={true}>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>Delete Account</Text>
          <Text style={styles.confirmText}>Are you sure you want to delete your account?</Text>
          <View style={styles.buttonContainer}>
            <Button title="Cancel" onPress={closeDeleteAccountModal} color="#999" />
            <Button title="Delete" onPress={handleDeleteAccount} />
          </View>
        </View>
      </View>
    </Modal>
  );

  return (
    <View style={[styles.container, { backgroundColor: colorScheme.background }]}>
      <TouchableOpacity onPress={navigateToProfile} style={styles.profileButton}>
        <Image source={profilePicture} style={styles.profilePicture} />
      </TouchableOpacity>

      <View style={styles.header}>
        <Text style={styles.heading}>Settings</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionHeading}>Account</Text>
        <View style={styles.line} />
        <TouchableOpacity style={styles.button} onPress={openUpdateEmailModal}>
          <Text style={styles.buttonText}>Update Email</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={openUpdatePasswordModal}>
          <Text style={styles.buttonText}>Update Password</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={openDeleteAccountModal}>
          <Text style={styles.buttonText}>Delete Account</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionHeading}>Color Theme</Text>
        <View style={styles.line} />
        <TouchableOpacity style={styles.button} onPress={openColorThemeModal}>
          <Text style={styles.buttonText}>Change Color Theme</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionHeading}>Notifications</Text>
        <View style={styles.line} />
        <View style={styles.switchContainer}>
          <Text style={styles.switchLabel}>Push Notifications</Text>
          <Switch value={notifications} onValueChange={toggleNotifications} />
        </View>
      </View>

      {renderUpdateEmailModal()}
      {renderUpdatePasswordModal()}
      {renderDeleteAccountModal()}
      <Modal visible={colorThemeModalVisible} animationType="slide" transparent={true}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Color Theme</Text>
            <View style={styles.colorThemeContainer}>
              <TouchableOpacity
                style={[
                  styles.colorThemeOption,
                  selectedColorTheme === 'Light' && { borderColor: '#3498db' },
                ]}
                onPress={() => handleColorThemeChange('Light')}
              >
                <Text>Light</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.colorThemeOption,
                  selectedColorTheme === 'Dark' && { borderColor: '#3498db' },
                ]}
                onPress={() => handleColorThemeChange('Dark')}
              >
                <Text>Dark</Text>
              </TouchableOpacity>

            </View>
            {renderImagesForColorTheme()}
            <View style={styles.buttonContainer}>
              <Button title="Cancel" onPress={closeColorThemeModal} color="#999" />
              <Button title="Confirm" onPress={handleColorThemeConfirm} />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  profileButton: {
    width: 60,
    height: 60,
    borderRadius: 50,
    overflow: 'hidden',
    position: 'relative',
    top: 10,
    left: 10,
  },
  profilePicture: {
    width: 60,
    height: 60,
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  heading: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  section: {
    marginBottom: 20,
  },
  sectionHeading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  line: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#3498db',
    padding: 15,
    borderRadius: 5,
    marginBottom: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  currentEmailText: {
    fontSize: 16,
    marginBottom: 10,
  },
  confirmText: {
    fontSize: 16,
    marginBottom: 10,
    textAlign: 'center',
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  invalidInput: {
    borderColor: 'red',
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  colorThemeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  colorThemeOption: {
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    margin: 15,
  },
  switchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  switchLabel: {
    fontSize: 16,
  },
  imageContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginTop: 10,
    paddingBottom: 20,
  },
  themeImage: {
    width: 150,
    height: 50,
    marginBottom: 10,
  },
  themeImageContainer: {
    alignItems: 'center',
  },
  selectedImage: {
    borderColor: '#3498db', 
    borderWidth: 1,
  },
});

export default SettingsScreen;
