import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation hook
import { personalData } from './PersonalGuidesData';
import { Theme } from './Theme';

const Personal = () => {
    const [self, setSelf] = useState(personalData);
    const [expandedGuide, setExpandedGuide] = useState(null);
    const navigation = useNavigation(); // Get navigation object using useNavigation hook

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
                Personal Guides
            </Text>
            <FlatList
                data={self}
                renderItem={renderItem}
                keyExtractor={(item, index) => index.toString()}
            />
            <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
                <Text style={styles.backButtonText}>Back</Text>
            </TouchableOpacity>
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
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 10,
        marginTop: 40,
    },
    itemContainer: {
        marginBottom: 10,
        marginTop: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 25,
        fontWeight: 'bold',
        marginBottom: 5,
        color: Theme.lightA.secondaryRich,
        textAlign: 'center',
    },
    expandedContent: {
        marginLeft: 10,
    },
    sectionHeading: {
        fontWeight: 'bold',
        marginBottom: 3,
        color: Theme.lightA.text,
        fontSize: 20,
    },
    sectionContent: {
        marginBottom: 10,
    },
    backButton: {
        justifyConten: 'center',
        marginBottom: 80,
        padding: 10,
        backgroundColor: Theme.lightA.secondaryRich,
        padding: 10,
        borderRadius: 10, // Back button background color

    },
    backButtonText: {
        color: '#000', // Back button text color
        textAlign: 'center'
    },
});

export default Personal;
