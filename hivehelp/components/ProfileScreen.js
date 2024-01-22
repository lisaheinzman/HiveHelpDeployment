import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

const ProfileScreen = () => {
  // Replace the placeholder data with your actual user data
  const user = {
    name: 'John Doe',
  };

  // Sample data for favorited and recently viewed guides
  const favoritedGuides = ['Guide A', 'Guide B', 'Guide C'];
  const recentlyViewedGuides = ['Guide X', 'Guide Y', 'Guide Z'];

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
      <View style={styles.profileSection}>
        <Image source={'./assets/bee_icon.jpg'} style={styles.profilePicture} />
        <Text style={styles.userName}>{user.name}</Text>
        </View>
      

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Favorited Guides</Text>
        {favoritedGuides.map((guide, index) => (
          <Text key={index} style={styles.guideItem}>
            {guide}
          </Text>
        ))}
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Recently Viewed Guides</Text>
        {recentlyViewedGuides.map((guide, index) => (
          <Text key={index} style={styles.guideItem}>
            {guide}
          </Text>
        ))}
      </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
  },
  profileSection: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  profilePicture: {
    width: 150,
    height: 150,
    borderRadius: 75, // Half of the width and height to create a circular shape
  },
  userName: {
    paddingLeft: 20,
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  section: {
    marginHorizontal: 20,
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  guideItem: {
    fontSize: 16,
    marginBottom: 5,
  },
});

export default ProfileScreen;