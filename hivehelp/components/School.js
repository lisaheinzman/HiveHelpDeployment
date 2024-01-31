import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
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
            <Text>School Guides</Text>
            <FlatList 
            data={school}
            renderItem={renderItem} 
            keyExtractor={(item, index) => index.toString()}
            />
        </View>
    )
}

const styles = StyleSheet.create({

})

export default schoolGuides;


/*=> (
    <TouchableOpacity onPress={() => handlePress(item)}>
<Text style={styles.titles}>{item.title}</Text>
</TouchableOpacity>
)*/