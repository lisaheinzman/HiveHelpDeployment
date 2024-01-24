import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CalendarPicker from 'react-native-calendar-picker';

const CalendarScreen = () => {
  const [selectedStartDate, setSelectedStartDate] = useState(null);

  const onDateChange = (date) => {
    setSelectedStartDate(date);
  };

  const startDate = selectedStartDate ? selectedStartDate.toString() : '';

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Calendar Screen</Text>
      <CalendarPicker
        onDateChange={onDateChange}
        width={400} // Adjust the width based on your design
        height={400} // Adjust the height based on your design
      />
      <Text>SELECTED DATE: {startDate}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    fontSize: 24,
    marginBottom: 16,
  },
});

export default CalendarScreen;

