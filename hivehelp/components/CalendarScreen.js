import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Modal, TextInput, Button } from 'react-native';
import { Calendar } from 'react-native-calendars';
import { AntDesign } from '@expo/vector-icons'; 
import { Theme } from './Theme.js'; 
import { CurrentRenderContext } from '@react-navigation/native';

const CalendarScreen = () => {
  // Get the current date in the format 'YYYY-MM-DD'
  const currentDate = new Date().toISOString().split('T')[0];

  const [showModal, setShowModal] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);

  const [events, setEvents] = useState([]); 
  const [showAddEvent, setShowAddEvent] = useState(false); 
  const [newEventTitle, setNewEventTitle] = useState("");
  const [newEventDescription, setNewEventDescription] = useState("");

  // Event details for different dates
    const eventDetailsJSON = {
      [currentDate]: {
        title: "Today",
        description: 'Have a wonderful day!!',
      },
      '2024-02-04': {
        title: 'Special Event',
        description: 'This is a special event on February 4th.',
      },
      '2024-02-06': {
        title: 'Red Dot Event',
        description: 'This event has a red dot on February 6th.',
      },
    };

    useEffect(() => {
      setEvents(eventDetailsJSON);
    }, [currentDate]);
  
  // Marked dates with event details
  const markedDates = {
    [currentDate]: { selected: true, marked: true, details: eventDetailsJSON[currentDate] },
    '2024-02-04': { marked: true, dotColor: Theme.lightA.primaryRich, details: eventDetailsJSON['2024-02-04'] },
    '2024-02-06': { marked: true, dotColor: 'red', details: eventDetailsJSON['2024-02-06'] }, // Remove activeOpacity
  };  

  const addTask = () => {
    if (newEventTitle.trim() !== "" ) {
      const newEvent = {
        name: newEventTitle,
        description: newEventDescription,
      };
      setEvents([...events, newEvent]);
      setNewEventTitle("");
      setNewEventDescription("");
      setShowAddEvent(false);
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text
          style={styles.heading}
          marginLeft= {10}
        >Calendar</Text>
        <TouchableOpacity
          style={styles.plusButton}
          onPress={() => setShowAddEvent(!showAddEvent)}
        >
          <View style={styles.hexagonInner} />
          <View style={styles.hexagonBefore} />
          <View style={styles.hexagonAfter} />
          <AntDesign
            name="plus"
            size={24}
            color="black"
            style={styles.plusIcon}
          />
        </TouchableOpacity>
      </View>
          {/* Calendar component with marked dates and onDayPress handler */}
          <Calendar
            markedDates={markedDates}
            style={styles.Calendar}
            onDayPress={(day) => {
              const selectedDateDetails = markedDates[day.dateString]?.details;
              if (selectedDateDetails) {
                console.log('Selected date details:', selectedDateDetails);
                setSelectedDate(day.dateString); // Set the selected date
                setShowModal(true);
              }
        }}
      />
      
      {/* Add event */}
      {showAddEvent && (
        <View style={styles.addEventSection}>
          <Text style={styles.heading}> Create Event</Text>
          <Text> Event Title</Text>
          <TextInput
            style={styles.textInput}
            padding= {5}
            placeholder="Enter Title"
            value={newEventTitle}
            onChangeText={setNewEventTitle}
          />
          <Text>Notes</Text>
          <TextInput
            style={styles.textInput}
            paddingLeft={5}
            paddingTop={5}
            paddingBottom= {40}
            placeholder="Enter Notes"
            value={newEventDescription}
            onChangeText={setNewEventDescription}
          />
          {/* Use TouchableOpacity directly here */}
          <TouchableOpacity onPress={addTask} style={styles.addButton}>
            <Text>Add</Text>
          </TouchableOpacity>
        </View>
      )}

          {/* Modal component for displaying event details */}
          <Modal
            animationType="none"
            transparent={true}
            visible={showModal}
            onRequestClose={() => {
              setShowModal(false);
            }}
          >
            <View style={styles.modalContainer}>
              <Text>Event Details:</Text>
              <Text>Title: {markedDates[selectedDate]?.details?.title}</Text>
              <Text>Description: {markedDates[selectedDate]?.details?.description}</Text>
              <Button title="Close" onPress={() => setShowModal(false)} />
            </View>
          </Modal>
        </View>
      );
   }


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: Theme.lightA.background
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: Theme.lightA.secondary, 
    textAlign: 'center',
    width: '100%',
    paddingTop: 50,
    paddingBottom: 20,
    paddingHorizontal: 10, 
  },
  heading: {
    fontSize: 30,
    paddingBottom: 10,
    
  },
  plusButton: {
    width: 50,
    height: 29,
    position: 'relative',
  },
  hexagonInner: {
    width: '100%',
    height: '100%',
    backgroundColor: Theme.lightA.tertiary,
  },
  hexagonAfter: {
    position: 'absolute',
    bottom: -13,
    left: 0,
    width: 0,
    height: 0,
    borderStyle: 'solid',
    borderLeftWidth: 25,
    borderLeftColor: 'transparent',
    borderRightWidth: 25,
    borderRightColor: 'transparent',
    borderTopWidth: 13,
    borderTopColor: Theme.lightA.tertiary,
  },
  hexagonBefore: {
    position: 'absolute',
    top: -13,
    left: 0,
    width: 0,
    height: 0,
    borderStyle: 'solid',
    borderLeftWidth: 25,
    borderLeftColor: 'transparent',
    borderRightWidth: 25,
    borderRightColor: 'transparent',
    borderBottomWidth: 13,
    borderBottomColor: Theme.lightA.tertiary,
    
  },
  plusIcon: {
    position: 'absolute',
    top: 3,
    left: 14,
  },
  modalContainer: {
    flex: 1,
    marginTop: '20%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  Calendar: {
    borderStyle: 'solid', 
    borderWidth: 1, 
    borderRadius: 10, 
    marginTop: -15, 
    width: 370,
    height: 'auto',
  },
  addEventSection: {
    marginTop: 20, 
    marginBottom: 20, 
    width: 200, 
    marginLeft: 0
  },
  textInput: {
    borderWidth: 1,
    borderRadius: 8,
    marginVertical: 10, 
    backgroundColor: 'white', 
    color: Theme.lightA.text, 
  }, 
  addButton: {
    alignItems: 'center', // Fix the typo here
    backgroundColor: Theme.lightA.tertiaryRich,
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  
});

export default CalendarScreen;
