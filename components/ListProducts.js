import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Header from './Header';

export default class ListProducts extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View>
                <Header navigation={this.props.navigation} />
                <Text> ListProducts </Text>
                <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                    <Text>Back</Text>
                </TouchableOpacity>
            </View>
        );
    }
}
