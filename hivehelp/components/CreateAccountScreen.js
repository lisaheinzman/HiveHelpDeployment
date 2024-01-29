import React from 'react';
import { TouchableOpacity, View, Image, Text, StyleSheet, Dimensions, TextInput  } from 'react-native';
import ExampleImage from '../assets/createAccount.png';

const CreateAccountScreen = () => {
  return (
    <View style={styles.ultimatecontainer}>
    <View style={styles.pageContainer}>
        <View style={styles.container}>
          <Text style= {styles.text}>Name*</Text>
          <TextInput style={styles.input} placeholder="Enter Email"/>
          <TextInput style={styles.input} placeholder="Password"/>
          <View style={styles.textContainer}>
              <View style={[styles.column]}>
                 <Text>Forgot Password?</Text>
              </View>
              <View style={[styles.column, {alignItems: 'flex-end'}]}>
                  <TouchableOpacity>
                    <Text>Sign In</Text>
                  </TouchableOpacity>
              </View>
            </View>
        </View>
    </View>
    </View>
  )
}
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
    alignItems: 'center',
    paddingTop: 80
  },
  image: {
    width: width, // Set the width to the width of the screen
    height: height, // Set the height to the height of the screen
    resizeMode: 'cover'// Adjust the resizeMode as needed
  },
  input: {
    height: 40,
    width: 200,
    margin: 12,
    borderRadius: 10,
    backgroundColor: 'white',
    borderWidth: 1,
    padding: 10
  },
  textContainer: {
    height: '40%',
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 2,
    borderRadius: 30
  },
  text: {
    textAlign: 'left', // Align text to the left
    // Add any other text styles as needed (font size, color, etc.)
  },
  column: {
    flex: 1,
    justifyContent: 'space-between',
    margin: 1
  }
})

export default CreateAccountScreen;