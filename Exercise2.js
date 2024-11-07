import {StyleSheet, Text, View} from "react-native";
import React from "react";

export default function App() {
    return (
        <View>
            <View style={[styles.greenBox]}>
                <Text style={[styles.boxTest, styles.title]}>Who we are</Text>
            </View>
            <View style={[styles.greenBox]}>
                <Text style={[styles.boxTest, styles.title]}>Our People</Text>
            </View>
            <View style={[styles.greenBox]}>
                <Text style={[styles.boxTest, styles.title]}>Our Campus</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    greenBox: {
        width: 100,
        height: 100,
        backgroundColor: 'green',
        borderWidth: 1,
        borderColor: 'black',
        marginTop: 30,
    },
    boxTest: {
        textAlign: 'center',
        color: 'white',
    },
    title: {
        fontWeight: 'bold',
    },
});
