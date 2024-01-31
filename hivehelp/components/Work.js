import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { workData } from './WorkGuidesData';

const workGuides = () => {
    const [work, setWork] = useState(workData)

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
            <Text>Work Guides</Text>
            <FlatList 
            data={work}
            renderItem={renderItem} 
            keyExtractor={(item, index) => index.toString()}
            />
        </View>
    )
};

const styles = StyleSheet.create({

})

export default workGuides;