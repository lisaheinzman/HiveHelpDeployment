import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { schoolData } from './SchoolGuideData';
import { Theme } from './Theme.js';

const School = () => {
    const [school, setSchool] = useState(schoolData);
    const [expandedGuide, setExpandedGuide] = useState(null);

    const handlePress = (index) => {
        setExpandedGuide(index === expandedGuide ? null : index);
    };

    const renderSections = (sections) => {
        return sections.map((section, index) => (
            <View key={index}>
                <Text style={[styles.sectionHeading, { color: Theme.lightA.secondaryRich }]}>
                    {section.heading}
                </Text>
                <Text style={[styles.sectionContent, { color: Theme.lightA.text }]}>
                    {section.content}
                </Text>
            </View>
        ));
    };

    const renderItem = ({ item, index }) => {
        const isExpanded = index === expandedGuide;

        return (
            <TouchableOpacity onPress={() => handlePress(index)}>
                <View style={styles.itemContainer}>
                    <Text style={[styles.title, { color: Theme.lightA.secondaryRich }]}>
                        {item.title}
                    </Text>
                    {isExpanded && (
                        <View style={styles.expandedContent}>
                            {renderSections(item.sections)}
                        </View>
                    )}
                </View>
            </TouchableOpacity>
        );
    };

    return (
        <View style={styles.container}>
            <Text style={[styles.heading, { color: Theme.lightA.primary }]}>
                School Guides
            </Text>
            <FlatList
                data={school}
                renderItem={renderItem}
                keyExtractor={(item, index) => index.toString()}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Theme.lightA.background,
        padding: 35,

    },
    heading: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
        marginTop: 30,
    },
    itemContainer: {
        marginBottom: 10,
        marginTop: 15,
        justifyContent: "center",
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
        text: Theme.lightA.secondaryRich,
        textAlign: "center"
    },
    expandedContent: {
        marginLeft: 10,
    },
    sectionHeading: {
        fontWeight: 'bold',
        marginBottom: 3,
        text: Theme.lightA.text
    },
    sectionContent: {
        marginBottom: 10,
    },
});

export default School;
