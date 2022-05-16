import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

interface props {
    text: string;
}

const Task = ({ text }: props) => {

    return (
        <View style={styles.item}>
            <View style={styles.left}>
                <View style={styles.box}></View>
                <Text style={styles.taskText}>{text}</Text>
            </View>
            <View style={styles.circle}></View>
        </View>
    )
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: '#FFF',
        padding: 15,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    left: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
    },
    box: {
        width: 24,
        height: 24,
        backgroundColor: '#55BCF6',
        opacity: 0.4,
        borderRadius: 5,
        marginRight: 15,
    },
    taskText: {
        maxWidth: '80%',
    },
    circle: {
        width: 12,
        height: 12,
        borderRadius: 6,
        borderColor: '#55BCF6',
        borderWidth: 2,
    },
});

export default Task;