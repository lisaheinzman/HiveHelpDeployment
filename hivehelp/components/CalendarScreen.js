import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Modal,
  TextInput,
} from "react-native";
import { Calendar } from "react-native-calendars";
import { AntDesign } from "@expo/vector-icons";
import { CurrentRenderContext } from "@react-navigation/native";
import { useTheme } from "./ThemeProvider.js";

const CalendarScreen = () => {
  const { colorScheme } = useTheme();

  // Get the current date in the format 'YYYY-MM-DD'
  const currentDate = new Date().toISOString().split("T")[0];

  const [showModal, setShowModal] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);

  const [events, setEvents] = useState([]);
  const [showAddEvent, setShowAddEvent] = useState(false);
  const [newEventTitle, setNewEventTitle] = useState("");
  const [newEventDescription, setNewEventDescription] = useState("");
  const [newEventTime, setNewEventTime] = useState("")
  const [newEventDate, setNewEventDate] = useState("");
  const [newEventDotColor, setNewEventDotColor] = useState(
    colorScheme.primaryRich,
  );

  const colorOptions = ["#FF5733", "#33FF57", "#5733FF", "#FFFF33"];

  // Event details for different dates
  const eventDetailsJSON = {
    [currentDate]: {
      title: "Today",
      dateString: [currentDate],
      description: "Have a wonderful day!!",
      time: "12:00 AM",
    },
    "2024-02-04": {
      title: "Special Event",
      dateString: "2024-02-04",
      description: "This is a special event on February 4th.",
      time: "11:00 AM",
    },
    "2024-02-06": {
      title: "Sister's Birthday",
      dateString: "2024-02-04",
      description: "Bring cake and flowers",
      time: "4:00 PM",
    },
  };

  useEffect(() => {
    setEvents(eventDetailsJSON);
  }, [currentDate]);

  // Marked dates with event details
  const markedDates = {
    [currentDate]: {
      selected: true,
      marked: true,
      details: eventDetailsJSON[currentDate],
    },
    "2024-02-04": {
      marked: true,
      dotColor: colorScheme.primaryRich,
      details: eventDetailsJSON["2024-02-04"],
    },
    "2024-02-06": {
      marked: true,
      dotColor: colorScheme.secondaryRich,
      details: eventDetailsJSON["2024-02-06"],
    },
  };

  const addTask = () => {
    if (newEventTitle.trim() !== "") {
      const newEvent = {
        name: newEventTitle,
        description: newEventDescription,
      };
      setEvents([...events, newEvent]);
      setNewEventTitle("");
      setNewEventDescription("");
      setNewEventDate("");
      setNewEventTime("");
      setShowAddEvent(false);
    }
  };

  return (
    <View
      style={[styles.container, { backgroundColor: colorScheme.background }]}
    >
      <View style={[styles.header, { backgroundColor: colorScheme.secondary }]}>
        <Text
          style={[styles.heading, { color: colorScheme.text }]}
          marginLeft={10}
        >
          Calendar
        </Text>
        <TouchableOpacity
          style={styles.plusButton}
          onPress={() => setShowAddEvent(!showAddEvent)}
        >
          <View
            style={[
              styles.hexagonInner,
              { backgroundColor: colorScheme.tertiary },
            ]}
          />
          <View
            style={[
              styles.hexagonBefore,
              { borderBottomColor: colorScheme.tertiary },
            ]}
          />
          <View
            style={[
              styles.hexagonAfter,
              { borderTopColor: colorScheme.tertiary },
            ]}
          />
          <AntDesign
            name="plus"
            size={24}
            color={colorScheme.text}
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
            console.log("Selected date details:", selectedDateDetails);
            setSelectedDate(day.dateString); // Set the selected date
            setShowModal(true);
          }
        }}
      />

      {/* Add event */}
      {showAddEvent && (
        <Modal>
          <View
            style={[
              styles.addEventSection,
              { backgroundColor: colorScheme.background },
            ]}
          >
            <Text
              style={[
                styles.heading,
                { backgroundColor: colorScheme.tertiaryRich },
                { marginBottom: 10 },
              ]}
            >
              {" "}
              Create Event
            </Text>
            <Text> Event Title</Text>
            <TextInput
              style={styles.textInput}
              padding={5}
              placeholder="Enter Title"
              value={newEventTitle}
              onChangeText={setNewEventTitle}
            />
            <Text>Notes</Text>
            <TextInput
              style={styles.textInput}
              paddingLeft={5}
              paddingTop={5}
              paddingBottom={40}
              placeholder="Enter Notes"
              value={newEventDescription}
              onChangeText={setNewEventDescription}
            />
            <Text>Date</Text>
            <TextInput
              style={styles.textInput}
              paddingLeft={5}
              paddingTop={5}
              paddingBottom={10}
              placeholder="MM/DD/YYYY"
              value={newEventDescription}
              onChangeText={setNewEventDate}
            />
            <Text>Time</Text>
            <TextInput
              style={styles.textInput}
              paddingLeft={5}
              paddingTop={5}
              paddingBottom={10}
              placeholder="MM/DD/YYYY"
              value={newEventDescription}
              onChangeText={setNewEventTime}
            />
            <Text>Banner Color</Text>
            <View style={styles.colorOptionsContainer}>
              {colorOptions.map((option, index) => (
                <TouchableOpacity
                  key={index}
                  style={[
                    styles.colorOption,
                    {
                      backgroundColor: option,
                      borderColor:
                        option === newEventDotColor ? "black" : "transparent",
                    },
                  ]}
                  onPress={() => setNewEventDotColor(option)}
                />
              ))}
            </View>

            <View style={styles.eventButtons}>
              <TouchableOpacity
                onPress={() => setShowAddEvent(false)}
                style={[
                  styles.backButton,
                  { backgroundColor: colorScheme.tertiary },
                  { borderBottomWidth: 5 },
                  { borderRightWidth: 5 },
                  { borderColor: colorScheme.tertiaryRich },
                ]}
              >
                <Text>Back</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={addTask}
                style={[
                  styles.addButton,
                  { backgroundColor: colorScheme.tertiary },
                  { borderBottomWidth: 5 },
                  { borderRightWidth: 5 },
                  { borderColor: colorScheme.tertiaryRich },
                ]}
              >
                <Text>Add</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
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
        <View style={[styles.eventDetails]}>
          <Text
            style={[
              styles.eventHeading,
              { backgroundColor: colorScheme.primary },
            ]}
          >
            {markedDates[selectedDate]?.details?.title}
          </Text>
          <Text style={styles.subheading}>Notes</Text>
          <Text>{markedDates[selectedDate]?.details?.description}</Text>
          <Text style={styles.subheading}>Date</Text>
          <Text> {markedDates[selectedDate]?.details?.dateString}</Text>
          <Text style={styles.subheading}>Time</Text>
          <Text> {markedDates[selectedDate]?.details?.time}</Text>

          <View style={styles.eventButtons}>
            <TouchableOpacity
              onPress={() => setShowModal(false)}
              style={[
                styles.backButton,
                { backgroundColor: colorScheme.tertiary },
                { borderBottomWidth: 5 },
                { borderRightWidth: 5 },
                { borderColor: colorScheme.tertiaryRich },
                { marginRight: "50%" },
              ]}
            >
              <Text>Back</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.addButton,
                { backgroundColor: colorScheme.tertiary },
                { borderBottomWidth: 5 },
                { borderRightWidth: 5 },
                { borderColor: colorScheme.tertiaryRich },
              ]}
            >
              <Text>Edit</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    textAlign: "center",
    width: "100%",
    paddingTop: 50,
    paddingBottom: 20,
    paddingHorizontal: 10,
  },
  heading: {
    fontSize: 30,
    paddingBottom: 10,
  },
  subheading: {
    fontSize: 18,
    fontWeight: "bold",
    margin: 5,
  },
  plusButton: {
    width: 50,
    height: 29,
    position: "relative",
  },
  hexagonInner: {
    width: "100%",
    height: "100%",
  },
  hexagonAfter: {
    position: "absolute",
    bottom: -13,
    left: 0,
    width: 0,
    height: 0,
    borderStyle: "solid",
    borderLeftWidth: 25,
    borderLeftColor: "transparent",
    borderRightWidth: 25,
    borderRightColor: "transparent",
    borderTopWidth: 13,
  },
  hexagonBefore: {
    position: "absolute",
    top: -13,
    left: 0,
    width: 0,
    height: 0,
    borderStyle: "solid",
    borderLeftWidth: 25,
    borderLeftColor: "transparent",
    borderRightWidth: 25,
    borderRightColor: "transparent",
    borderBottomWidth: 13,
  },
  plusIcon: {
    position: "absolute",
    top: 3,
    left: 14,
  },
  Calendar: {
    borderStyle: "solid",
    borderWidth: 1,
    borderRadius: 10,
    marginTop: -15,
    width: 370,
    height: "auto",
  },
  addEventSection: {
    padding: 200, 
    paddingHorizontal: 50,
    
    align: "center",
  },
  textInput: {
    borderWidth: 1,
    borderRadius: 8,
    marginVertical: 10,
    backgroundColor: "white",
    color: "black",
  },
  addButton: {
    fontSize: 18,
    marginBottom: 10,
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  backButton: {
    fontSize: 18,
    marginBottom: 10,
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  eventButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  eventDetails: {
    flex: 1,
    marginTop: "80%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 1,
  },
  eventHeading: {
    marginBottom: 10,
    padding: 15,
    fontSize: 30,
  },
  colorOptionsContainer: {
    flexDirection: "row",
    marginTop: 10,
    marginBottom: 20,
  },
  colorOption: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginHorizontal: 5,
    borderWidth: 2,
  },
});

export default CalendarScreen;
