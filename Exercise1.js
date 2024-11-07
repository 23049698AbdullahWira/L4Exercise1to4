import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

export default function App() {
    return (
        <View style={{marginTop: 30}}>
            <Text style={{fontSize: 24}}>RP Values</Text>
            <Text style={{color:'green'}}>Excellence</Text>
            <Text style={{backgroundColor:'yellow'}}>Customer Centric</Text>
            <Text style={{fontStyle:'italic'}}>Integrity</Text>
            <Text style={{textAlign:'center'}}>Teamwork</Text>
            <Text style={{backgroundColor:'black', color:'white'}}>Enterprising</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
