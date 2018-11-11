import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import logIn from './api/logIn';
import Global from './Global';
import saveToken from './api/saveToken';

export default class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };
    }

    signIn(email, password) {
        logIn(email, password)
            .then(res => {
                if (res) {
                    //Alert.alert('SignIn successfully!');
                    saveToken(res.token);
                    Global.onSignIn(res.user);
                    this.props.navigation.goBack();
                } else {
                    Alert.alert('SignIn failed!');
                }
            })
            .catch(err => console.log(err));
    }


    render() {
        const { email, password } = this.state;
        return (
            <View style={styles.wrapper}>
                <TextInput
                    placeholder='Enter your email'
                    style={styles.textInputStyle}
                    value={email}
                    onChangeText={(text) => this.setState({ email: text })}
                />
                <TextInput
                    placeholder='Enter your password'
                    style={styles.textInputStyle}
                    value={password}
                    onChangeText={(text) => this.setState({ password: text })}
                    secureTextEntry
                />
                <TouchableOpacity onPress={() => this.signIn(email, password)}>
                    <View style={styles.button}>
                        <Text style={styles.text}>SIGN IN</Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    textInputStyle: {
        height: 40,
        margin: 10,
        padding: 10,
        borderRadius: 4,
        backgroundColor: 'white',
    },
    button: {
        height: 40,
        margin: 10,
        borderRadius: 4,
        alignItems: 'center',
        padding: 5,
        backgroundColor: 'darkviolet',
        borderColor: 'white',
        borderWidth: 1,
    },
    text: {
        color: 'white',
        fontSize: 20,
    },
    wrapper: {
        backgroundColor: 'darkviolet',
    }
});
