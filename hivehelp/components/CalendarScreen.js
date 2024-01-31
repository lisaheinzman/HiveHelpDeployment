import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Modal, TextInput, Button } from 'react-native';
import { Calendar } from 'react-native-calendars';
import { AntDesign } from '@expo/vector-icons'; 
import { Theme } from './Theme.js'; 

const CalendarScreen = () => {
  // Get the current date in the format 'YYYY-MM-DD'
  const currentDate = new Date().toISOString().split('T')[0];

  // State for managing the modal visibility
  const [showModal, setShowModal] = useState(false);

  // State for keeping track of the selected date
  const [selectedDate, setSelectedDate] = useState(null);

  const [eventForm, setEventForm] = useState({ title: '', description: '' });

  const [isEditingEvent, setIsEditingEvent] = useState(false);

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

  // Marked dates with event details
  const markedDates = {
    [currentDate]: { selected: true, marked: true, details: eventDetailsJSON[currentDate] },
    '2024-02-04': { marked: true, dotColor: Theme.lightA.primaryRich, details: eventDetailsJSON['2024-02-04'] },
    '2024-02-06': { marked: true, dotColor: 'red', activeOpacity: 0, details: eventDetailsJSON['2024-02-06'] },
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.heading}> </Text>
            <TouchableOpacity
      style={styles.addEventButton}
      onPress={() => {
        // Reset the event form
        setEventForm({ title: '', description: '' });
        setIsEditingEvent(false); // Set to false when adding a new event
        setShowModal(true);
      }}
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
            setEventForm(selectedDateDetails); // Populate the form with existing details
            setIsEditingEvent(true); // Set to true when editing an existing event
            setShowModal(true);
          }
        }}        
      />

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
{/* Internal Event Form */}
<Modal
        animationType="slide"
        transparent={true}
        visible={showModal}
        onRequestClose={() => setShowModal(false)}
      >
        <View style={styles.eventFormContainer}>
          <TextInput
            placeholder="Event Title"
            value={eventForm.title}
            onChangeText={(text) => setEventForm({ ...eventForm, title: text })}
          />
          <TextInput
            placeholder="Event Description"
            value={eventForm.description}
            onChangeText={(text) => setEventForm({ ...eventForm, description: text })}
          />
          <Button
            title="Save Event"
            onPress={() => {
              // Handle saving the event details
              console.log('Saved Event:', eventForm);
              // You can add logic to update the markedDates state or perform other actions
              setShowModal(false);
            }}
          />
        </View>
      </Modal>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'top',
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
    paddingHorizontal: 10
  },
  heading: {
    fontSize: 30,
    paddingBottom: 10
  },
  addEventButton: {
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
  eventFormContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CalendarScreen;
