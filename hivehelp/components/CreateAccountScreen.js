import React from 'react';
import { TouchableOpacity, View, Image, Text, StyleSheet, Dimensions, TextInput  } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import BackgroundImage from '../assets/CreateAccountBackground.png';
import { useState } from 'react';
import uuid from 'uuid-random'

// Navigation
const CreateAccountScreen = () => {
  const navigation = useNavigation();
  const goToHomePage = () => {
    navigation.navigate('TabNavigator')
  }

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [confirmEmail, setConfirmEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = () => {
    const id = uuid();
    // Send data to server
    console.log("fetching server data");
    fetch('http://172.26.160.1:3000/items', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id, name, email, password }),
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      console.log('Success:', data);
      // Handle success (e.g., navigate to home screen)
      goToHomePage();
    })
    .catch((error) => {
      console.error('Error:', error);
      // Handle error
    });
  }



  return (
    <View style={styles.ultimatecontainer}>
    <View style={styles.pageContainer}>
    <Image source={BackgroundImage} style={styles.image} />
        <View style={styles.container}>
          <Text style= {styles.text}>Name*</Text>
          <View style={styles.textContainer}>
              <View style={[styles.column, { alignItems: 'center' }]}>
              <TextInput style={[styles.input, {width: 95}]}
              value={name}
              onChangeText={setName}/>
              </View>
            </View>
            <Text style= {styles.text}>Email*</Text>
            <TextInput style={styles.input}  onChangeText={setEmail}/>
            <Text style= {styles.text}>Confirm Email*</Text>
            <TextInput style={styles.input} onChangeText={setConfirmEmail}/>
            <Text style= {styles.text}>Create Password*</Text>
            <TextInput style={styles.input} onChangeText={setPassword}/>
            <Text style= {styles.text}>Confirm Password*</Text>
            <TextInput style={styles.input} onChangeText={setConfirmPassword}/>
            <TouchableOpacity style = {[styles.button, { alignSelf: 'center' }, { paddingTop: 10 }]} onPress={handleSubmit}>
                    <Text>    Sign In</Text>
                  </TouchableOpacity>
        </View>
        <View style= { [{ alignSelf: 'flex-start' }, { paddingBottom: 8 }, { paddingLeft: 70 }]}>
        <TouchableOpacity style= {styles.button} onPress={goToHomePage}>
                    <Text>  Click Here</Text>
        </TouchableOpacity>
        </View>
    </View>
    </View>
  )
}

// Gets size of current device's scren
const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  ultimatecontainer: {
    flex: 1
  },
  pageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: 80
  },
  image: {
    width: width, // Set the width to the width of the screen
    height: height, // Set the height to the height of the screen
    resizeMode: 'cover',// Adjust the resizeMode as needed
    position: 'absolute'
  },
  input: {
    height: 40,
    width: 200,
    margin: 12,
    borderRadius: 10,
    backgroundColor: 'white',
    padding: 10
  },
  textContainer: {
   // height: '40%',
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 2,
    borderRadius: 30
  },
  button: {
    height: 40,
    width: 100,
    borderRadius: 10,
    backgroundColor: 'white',
    borderWidth: 1,
    padding: 10
  },
  text: {
    alignItems: 'flex-start' // Align text to the left
    // Add any other text styles as needed (font size, color, etc.)
  },
  column: {
    flex: 1,
    justifyContent: 'space-between',
    margin: 1
  }
})

export default CreateAccountScreen;