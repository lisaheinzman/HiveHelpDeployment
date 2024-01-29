import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Modal, TextInput, Button } from 'react-native';
import CalendarPicker from 'react-native-calendar-picker';
import { AntDesign } from '@expo/vector-icons'; 
import { Theme } from './Theme.js'; 
import { useNavigation } from '@react-navigation/native';

const CalendarScreen = () => {
  const navigation = useNavigation();
  const [selectedStartDate, setSelectedStartDate] = useState(null);
  const [showAddDate, setShowAddDate] = useState(false);
  const [newDateName, setNewDateName] = useState('');
  const [newDateNotes, setNewDateNotes] = useState('');
  const [dates, setDates] = useState([]);

  const onDateChange = (date) => {
    setSelectedStartDate(date);
  };

  const startDate = selectedStartDate ? selectedStartDate.toString() : '';

  const markedDates = { [startDate]: { selected: true, marked: true, selectedColor: Theme.lightA.primary } };

  const handleDatePress = () => {
    const endDate = new Date(selectedStartDate);
    endDate.setDate(selectedStartDate.getDate() + 1);

    const dateDetails = {
      name: 'Sample Event',
      notes: 'Event details go here',
      startDate: selectedStartDate.toString(),
      endDate: endDate.toString(),
    };

    navigation.navigate('DateDetails', { date: dateDetails });
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
        onDateChange={onDateChange}
        markedDates={markedDates}
        width={400}
        height={400}
      />
      {showAddDate && (
        <View style={styles.modalContainer}>
          <Text>Create Event</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Event Name"
            value={newDateName}
            onChangeText={(text) => setNewDateName(text)}
          />
          <TextInput
            style={styles.textInput}
            placeholder="Event Notes"
            value={newDateNotes}
            onChangeText={(text) => setNewDateNotes(text)}
          />
          <Button title="Add" onPress={addEvent} />
          <Button title="Cancel" onPress={() => setShowAddDate(false)} />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: '15%',
    backgroundColor: Theme.lightA.background,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    padding: 20,
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
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }, 
  textInput: {
    color: Theme.lightA.text, 
    padding: 7, 
    borderWidth: 1, 
    backgroundColor: 'white', 
    borderStyle: 'solid',
    borderRadius: 10,
    margin: 3, 
  }

});

export default CalendarScreen;
