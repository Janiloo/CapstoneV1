import React from 'react';
import { View, Text, Button, StyleSheet, Dimensions } from 'react-native';

const LogInRegister = (props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.heading}>React Navigation</Text>
            <Text style={styles.text}>This is Log in and Registration</Text>
            <View style={styles.buttonContainer}>
                <Button title="LogIn" onPress={() => props.navigation.navigate("LogIn")} style={styles.button} />
                <View style={styles.space} />
                <Button title="Register" onPress={() => props.navigation.navigate("Register")} style={styles.button} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    heading: {
        fontSize: 30,
        color: 'black',
        textAlign: 'center',
    },
    text: {
        fontSize: 28,
        color: 'black',
    },
    buttonContainer: {
        position: 'absolute',
        bottom: 20,
        left: 20,
        right: 20,
        alignItems: 'stretch',
    },
    button: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        fontSize: 16,
    },
    space: {
        height: 20,
    },
});

export default LogInRegister;
