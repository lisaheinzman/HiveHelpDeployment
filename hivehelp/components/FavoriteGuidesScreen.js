import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

// Assume you have a data structure representing favorited guides
const favoritedGuidesData = [
  { id: '1', title: 'Guide 1' },
  { id: '2', title: 'Guide 2' },
  // Add more favorited guides as needed
];

const FavoriteGuidesScreen = () => {
  const [favoritedGuides, setFavoritedGuides] = useState(favoritedGuidesData);

  return (
    <View style={styles.container}>
      {favoritedGuides.length === 0 ? (
        <Text style={styles.emptyText}>
          You haven't favorited any guides, go check them out!
        </Text>
      ) : (
        <FlatList
          data={favoritedGuides}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.guideItem}>
              <Text>{item.title}</Text>
              {/* Add more guide details or actions as needed */}
            </View>
          )}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  emptyText: {
    textAlign: 'center',
    fontSize: 18,
    color: '#777',
  },
  guideItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
});

export default FavoriteGuidesScreen;
