import React from 'react';
import { TouchableOpacity, View, Image, Text, StyleSheet, Dimensions, TextInput} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ExampleImage from '../assets/SignInBackground.png';

const SignInScreen = () => {
  const navigation = useNavigation();

  const goToHomePage = () => {
    navigation.navigate('TabNavigator'); // 'Template' should match the name of the stack or screen you want to navigate to
  };
  const goToCreateAccount = () => {
    navigation.navigate('CreateAccount'); // 'Template' should match the name of the stack or screen you want to navigate to
  };
  return (
    <View style={styles.ultimatecontainer}>
    <View style={styles.pageContainer}>
        <Image source={ExampleImage} style={styles.image} />
        <View style={styles.container}>
          <Text>Sign In</Text>
          <TextInput style={styles.input} placeholder="Enter Email"/>
          <TextInput style={styles.input} placeholder="Password"/>
          <View style={[styles.textContainer, {paddingTop: 15}]}>
              <View style={[styles.column]}>
              <TouchableOpacity onPress={goToHomePage}>
                    <Text>Forgot</Text>
                    <Text>Password</Text>
                  </TouchableOpacity>
              </View>
              <View style={[styles.column, {alignItems: 'flex-end'}]}>
                  <TouchableOpacity style ={styles.button} onPress={goToHomePage}>
                    <Text>    Sign In</Text>
                  </TouchableOpacity>
              </View>
            </View>
        </View>
        <View style= { [{alignSelf: 'flex-end'}, {paddingBottom: 8}, {paddingRight: 70}]}> 
        <TouchableOpacity style= {styles.button} onPress={goToCreateAccount}>
                    <Text>  Click Here</Text>
        </TouchableOpacity>
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
    paddingTop: 170
  },
  image: {
    flex: 1,
    width: width, // Set the width to the width of the screen
    height: height + 20, // Set the height to the height of the screen
    resizeMode: 'cover',
    position: 'absolute'
  },
  button: {
    height: 40,
    width: 100,
    borderRadius: 10,
    backgroundColor: 'white',
    borderWidth: 1,
    padding: 10
  },
  input: {
    height: 40,
    width: 250,
    margin: 12,
    borderRadius: 10,
    backgroundColor: 'white',
    padding: 10
  },
  textContainer: {
    height: '40%',
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 2,
    borderRadius: 30
  },
  column: {
    flex: 1,
    justifyContent: 'space-between',
    margin: 1
  }
})

export default SignInScreen;
