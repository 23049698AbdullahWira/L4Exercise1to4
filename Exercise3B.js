import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

export default function App() {
    return (
        <View style={[styles.parent]}>
            <Text style={[styles.child, styles.child1Color]}>Child 1</Text>
            <Text style={[styles.child, styles.child2Color]}>Child 2</Text>
            <Text style={[styles.child, styles.child3Color]}>Child 3</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    parent: {
        flexDirection: 'column',
        backgroundColor: '#F5fcff',
        borderColor: '#0099AA',
        borderWidth: 5,
        marginTop: 30,
        flex: 1,
    },
    child: {
        fontSize: 24,
        textAlign: 'center',
        borderWidth: 2,
        flex:1,
    },
    child1Color: {
        backgroundColor: 'red',
    },
    child2Color: {
        backgroundColor: 'blue',
    },
    child3Color: {
        backgroundColor: 'green',
    }
});
