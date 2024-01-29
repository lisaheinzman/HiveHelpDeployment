import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Modal, TextInput, Button } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import profilePicture from '../assets/bee_icon.jpg';

const SettingsScreen = () => {
  const navigation = useNavigation();
  const [updateEmailModalVisible, setUpdateEmailModalVisible] = useState(false);
  const [updatePasswordModalVisible, setUpdatePasswordModalVisible] = useState(false);
  const [deleteAccountModalVisible, setDeleteAccountModalVisible] = useState(false);
  const [newEmail, setNewEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [isValidPassword, setIsValidPassword] = useState(true);

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
    // Add logic for deleting the account
    console.log('Deleting Account...');
    closeDeleteAccountModal();
  };

  const navigateToProfile = () => {
    navigation.navigate('Profile');
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

      {renderUpdateEmailModal()}
      {renderUpdatePasswordModal()}
      {renderDeleteAccountModal()}

      {/* ... Other sections ... */}
    </View>
  );
};

const styles = StyleSheet.create({
  // ... Other styles ...

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
});

export default SettingsScreen;
