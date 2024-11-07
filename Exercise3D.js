import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

export default function App() {
    return (
        <View style={[styles.parent]}>
            <Text style={[styles.child, styles.child1Color, {flex: 1,}]}>Child 1</Text>
            <Text style={[styles.child, styles.child2Color, {flex: 2,}]}>Child 2</Text>
            <Text style={[styles.child, styles.child3Color, {flex: 3,}]}>Child 3</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    parent: {
        flexDirection: 'row',
        backgroundColor: '#F5fcff',
        borderColor: '#0099AA',
        borderWidth: 5,
        marginTop: 30,
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
