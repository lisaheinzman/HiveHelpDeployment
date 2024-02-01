import React from 'react';
import { TouchableOpacity, View, Image, Text, StyleSheet, Dimensions, TextInput  } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ExampleImage from '../assets/CreateAccountBackground.png';

// Navigation
const CreateAccountScreen = () => {
  const navigation = useNavigation();
  const goToHomePage = () => {
    navigation.navigate('TabNavigator')
  }

  return (
    <View style={styles.ultimatecontainer}>
    <View style={styles.pageContainer}>
    <Image source={ExampleImage} style={styles.image} />
        <View style={styles.container}>
          <Text style= {styles.text}>Name*</Text>
          <View style={styles.textContainer}>
              <View style={[styles.column, { alignItems: 'center' }]}>
              <TextInput style={[styles.input, {width: 95}]}/>
              </View>
              <View style={[styles.column, { alignItems: 'center' }]}>
              <TextInput style ={[styles.input, { width: 95 }]}/>
              </View>
            </View>
            <Text style= {styles.text}>Email*</Text>
            <TextInput style={styles.input}/>
            <Text style= {styles.text}>Confirm Email*</Text>
            <TextInput style={styles.input}/>
            <Text style= {styles.text}>Create Password*</Text>
            <TextInput style={styles.input}/>
            <Text style= {styles.text}>Confirm Password*</Text>
            <TextInput style={styles.input}/>
            <TouchableOpacity style = {[styles.button, { alignSelf: 'center' }, { paddingTop: 10 }]} onPress={goToHomePage}>
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