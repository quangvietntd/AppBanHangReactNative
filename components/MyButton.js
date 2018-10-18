import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default class MyButton extends Component {
    render() {
        return (
            <TouchableOpacity onPress={() => this.props.navigation.navigate(this.props.route)}>
                <View style={styles.container}>
                    <Text style={styles.textStyle}>{this.props.label}</Text>
                </View>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: 40,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomWidth: 1,
        borderBottomColor: 'lightgray',
    },
    textStyle: {
        fontSize: 18,
        color: 'gray'
    },
});
