import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

export default function App() {
    return (
        <View style={[styles.parent]}>
            <Text style={[styles.child, styles.square1, ]}>Square 1</Text>
            <Text style={[styles.child, styles.square2, ]}>Square 2</Text>
            <Text style={[styles.child, styles.square3, ]}>Square 3</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    parent: {
        backgroundColor: 'whitesmoke'  ,
        marginTop: 30,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    child: {
        width: 80,
        height: 80,
        textAlign: 'center',
        textAlignVertical: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
    },
    square1: {
        backgroundColor: 'blue',
    },
    square2: {
        backgroundColor: 'green',
    },
    square3: {
        backgroundColor: 'red',
    },
});
