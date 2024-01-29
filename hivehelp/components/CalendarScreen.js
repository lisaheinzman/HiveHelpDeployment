import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CalendarPicker from 'react-native-calendar-picker';

const CalendarScreen = () => {
  const [selectedStartDate, setSelectedStartDate] = useState(null);

  const onDateChange = (date) => {
    setSelectedStartDate(date);
  };

  const startDate = selectedStartDate ? selectedStartDate.toString() : '';

  const markedDates = { 0: 0 };
  
  
  

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Calendar</Text>
      <CalendarPicker
        onDateChange={onDateChange}
        markedDates={markedDates}
        customDatesStyles= {customDatesStyles}
        width={400}
        height={400}
        
      />
      <Text>
        {startDate }</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: "15%",
    alignItems: 'center',
  },
  heading: {
    fontSize: 30,
    marginBottom: 20,
  }

});

export default CalendarScreen;
