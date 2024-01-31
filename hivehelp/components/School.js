import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Modal, Button } from 'react-native';
import { schoolData } from './SchoolGuideData';


const schoolGuides = () => {

    const [school, setSchool] = useState(schoolData)
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
                    <Text style={styles.title}>{item.title}</Text>
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
            <Text style={styles.title}>School Guides</Text>
            <FlatList 
            data={school}
            renderItem={renderItem} 
            keyExtractor={(item, index) => index.toString()}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
        paddingTop: 80,
      },
      title: {
        fontSize: 30,
        //fontWeight: 'bold',
        marginBottom: 10,
        textAlign: 'center'
      },
      text: {
        marginBottom: 20,
      },
      card: {
        padding: 20,
        marginBottom: 20,
        borderRadius: 10,
        textAlign: 'center'
      },
      guideTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 8,
        textAlign: 'center',
      },
      buttons: {
        padding: 10,
        borderRadius: 5,
        marginTop: 10,
      },
      buttonText: {
        textAlign: 'center',
      }
})

export default schoolGuides;
