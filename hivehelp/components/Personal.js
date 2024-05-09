import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Modal, Button, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation hook
import { personalData } from './PersonalGuidesData';
import { Theme } from './Theme';
import { useTheme } from './ThemeProvider';
import { supabase } from '../supabase';

const Personal = () => {
    const { colorScheme } = useTheme();

    const [data, setSelf] = useState(personalData);
    const navigation = useNavigation(); // Get navigation object using useNavigation hook
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);
  
    const handlePress = (item) => {
      setSelectedItem(item);
      setModalVisible(true);
    };
  
    const closeModal = () => {
      setModalVisible(false);
      setSelectedItem(null);
    };
    const user = supabase.auth.getUser();
    
    // returns list content os selected title
    const renderSections = (sections) => {
        return sections.map((section, index) => (
            <View key={index}>
                <Text style={[styles.sectionHeading, {color: colorScheme.text}]}>
                    {section.heading}
                </Text>
                <Text style={[styles.sectionContent, { color: colorScheme.text }]}>
                    {section.content}
                </Text>
            </View>
        ));
    };

    // Returns list of titles
    return (
        <View style={styles.container}>
             <View style={{ alignSelf: 'flex-start' }}>
          <Button title="<" onPress={() => navigation.goBack()}></Button>
          </View>
            <Text style={[styles.heading, { color: colorScheme.text}]}>
                Personal Guides
            </Text>
          {data.map((item, index) => (
            <TouchableOpacity key={index} onPress={() => handlePress(item)}>
              <View style={styles.itemContainer}>
                <Text style={[styles.title, { color: colorScheme.text }]}>
                  {item.title}
                </Text>
              </View>
            </TouchableOpacity>
          ))}
          {/* Modal */}
          <Modal
            animationType="slide"
            visible={modalVisible}
            onRequestClose={closeModal}
          >
            <View style={styles.modalContainer}>
              <View style={styles.modalContent}>
                {selectedItem && (
                  <>
                  {/* Close Button */}
                  <View style={{ alignSelf: 'flex-end' }}>
                    <Button title="X" onPress={closeModal} />
                  </View>
                  <ScrollView style={styles.scrollContainer}>
                    <Text style={[styles.title, { color: colorScheme.text }]}>
                      {selectedItem.title}
                    </Text>
                    {renderSections(selectedItem.sections)}
                    </ScrollView>
                  </>
                )}
              </View>
            </View>
          </Modal>
        </View>
      );
    };
    

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 35,
    },
    heading: {
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 10,
        marginTop: 40,
        padding: 10,
    },
    modalContainer: {
        flex: 1,
     //   justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)'
      },
      modalContent: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
        width: '80%',
      },
    itemContainer: {
        marginBottom: 10,
        marginTop: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 25,
        fontWeight: 'bold',
        marginBottom: 5,
        textAlign: 'center',
    },
    expandedContent: {
        marginLeft: 10,
    },
    sectionHeading: {
        fontWeight: 'bold',
        marginBottom: 3,
        fontSize: 20,
    },
    sectionContent: {
        marginBottom: 10,
    },
    backButton: {
        justifyConten: 'center',
        marginBottom: 80,
        padding: 10,
        padding: 10,
        borderRadius: 10, // Back button background color

    },
    backButtonText: {
        textAlign: 'center'
    },
    xButton: {
        alignSelf: 'flex-end'
    }
});

export default Personal;
