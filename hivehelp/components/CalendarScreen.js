/* import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Modal, TextInput, Button } from 'react-native';
import CalendarPicker from 'react-native-calendar-picker';
import { AntDesign } from '@expo/vector-icons'; 
import { Theme } from './Theme.js'; 
import eventsData from './EventList.json';
import { useNavigation } from '@react-navigation/native';

const CalendarScreen = () => {

  const navigation = useNavigation();

  // Define the function to extract marked dates from events
  const getMarkedDatesFromEvents = () => {
    const markedDates = {};
    eventsData.events.forEach((event) => {
      markedDates[event.date] = {
        marked: true,
        dotColor: Theme.lightA.primary, // Customize dot color as needed
      };
    });
    return markedDates;
  };

  const markedDates = getMarkedDatesFromEvents();
  const [selectedStartDate, setSelectedStartDate] = useState(null);
  const [showAddDate, setShowAddDate] = useState(false);
  const [newDateName, setNewDateName] = useState('');
  const [newDateNotes, setNewDateNotes] = useState('');
  const [dates, setDates] = useState([]);

  const onDateChange = (date) => {
    setSelectedStartDate(date);
  };

  const addEvent = () => {
    if (newDateName.trim() !== '') {
      const newDate = {
        name: newDateName,
        notes: newDateNotes,
        completed: false,
      };
      setDates([...dates, newDate]);
      setNewDateName('');
      setNewDateNotes('');
      setShowAddDate(false);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.heading}>Calendar</Text>
        <TouchableOpacity
          style={styles.addEventButton}
          onPress={() => setShowAddDate(true)}
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
      <CalendarPicker
        styles={styles.calendarMonth}
        onDateChange={onDateChange}
        markedDates={markedDates}
        width={400}
        height={400}
      />
      {showAddDate && (
        <View style={styles.modalContainer}>
          <Text>Create Event</Text>
          <Text>Event Title</Text>
          <TextInput
            width={200}
            height={40}
            style={styles.textInput}
            placeholder="Enter Title"
            value={newDateName}
            onChangeText={(text) => setNewDateName(text)}
          />
          <Text>Enter Notes</Text>
          <TextInput
            width={200}
            height={100}
            style={styles.textInput}
            placeholder="Enter Notes"
            value={newDateNotes}
            onChangeText={(text) => setNewDateNotes(text)}
          />
          <Button 
            style={styles.button}
            title="Add"
            onPress={addEvent}
          />
          <Button
            style={styles.button}
            title="Cancel"
            onPress={() => setShowAddDate(false)}
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, 
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: Theme.lightA.secondary , 
    textAlign: 'center',
    width: '100%',
    paddingTop: 50,
    paddingBottom: 20,
    paddingHorizontal: 10
  },
  heading: {
    fontSize: 30,
  },
  addEventButton: {
    width: 50,
    height: 29,
    position: 'relative',
  },
  hexagonInner: {
    width: '100%',
    height: '100%',
    backgroundColor: Theme.lightA.primary,
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
    borderTopColor: Theme.lightA.primary,
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
    borderBottomColor: Theme.lightA.primary,
  },
  plusIcon: {
    position: 'absolute',
    top: 3,
    left: 14,
  },
  modalContainer: {
    flex: 1 ,
    justifyContent: 'center',
    alignItems: 'center',
  }, 
  textInput: {
    textAlign: 'left',
    textAlignVertical: 'top',
    color: Theme.lightA.text,
    borderWidth: 1,
    backgroundColor: 'white',
    borderStyle: 'solid',
    borderRadius: 10,
    margin: 3,
  }, 
  button: {
    fontSize: 20, 
    backgroundColor: Theme.lightA.tertiaryRich, 
    borderWidth: 1, 
  }, 
  calendarMonth: {
  }

});

export default CalendarScreen;
*/
/*
import React, {useState} from 'react';
import {Calendar, LocaleConfig} from 'react-native-calendars';

const CalendarScreen = () => {
  const [selected, setSelected] = useState('');

  return (
    <Calendar
      onDayPress={day => {
        setSelected(day.dateString);
      }}
      markedDates={{
        [selected]: {selected: true, disableTouchEvent: true, selectedDotColor: 'orange'}
      }}
    />
  );
};

export default CalendarScreen;
*/
