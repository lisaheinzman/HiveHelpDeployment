import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { personalData } from './PersonalGuidesData';

const personalGuides = () => {
    const [self, setSelf] = useState(personalData)

    const [expandedGuide, setExpandedGuide] = useState(null)
    
    const handlePress = (index) => {
        setExpandedGuide(index === expandedGuide ? null : index)
    }

    const renderSections = (sections) => {
       return sections.map((sections, index) => (
        <View key={index}>
            <Text>{sections.heading}</Text>
            <Text>{sections.content}</Text>
        </View>
       ))
    }

    const renderItem = ({ item, index }) => {
        const isExpanded = index === expandedGuide

        return(
            <TouchableOpacity onPress={() => handlePress(index)}>
                <View>
                    <Text style={styles.titles}>{item.title}</Text>
                    {isExpanded && (
                        <View style={styles.content}>
                            {renderSections(item.sections)}
                        </View>
                    )}
                </View>
            </TouchableOpacity>
        )
    }

    
  return(
        <View>
            <Text>Personal Guides</Text>
            <FlatList 
            data={self}
            renderItem={renderItem} 
            keyExtractor={(item, index) => index.toString()}
            />
        </View>
    )
}

const styles = StyleSheet.create({

})


export default personalGuides;