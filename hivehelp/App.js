
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './components/HomeScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>This is where the screens will be imported to and loaded in a HomeStack to navigate between the pages.</Text>
      <HomeScreen></HomeScreen>
      <Text>above should be the home page</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
