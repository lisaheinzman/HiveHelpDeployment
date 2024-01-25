import React from 'react';
import { View, Image, Text, StyleSheet, Dimensions  } from 'react-native';
import ExampleImage from '../assets/SignInBackground.png';

const SignInScreen = () => {
  return (
    <View style={styles.container}>
        <Image source={ExampleImage} style={styles.image} />
    </View>
  )
}
const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
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
  }
})

export default SignInScreen;
