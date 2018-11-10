import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
//import FloatingLabel from 'react-native-floating-labels';
import register from './api/register';

export default class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            password: '',
            rePassword: '',
            phone: '',
        };
    }

    onSuccess() {
        Alert.alert(
            'Notice',
            'Sign up Successfully!',
            [
                { text: 'OK', onPress: () => this.props.gotoSignIn() }
            ],
            { cancelable: false }
        );
    }
    onFail() {
        Alert.alert(
            'Notice',
            'Email has been used by other',
            [
                { text: 'OK', onPress: () => this.removeEmail() }
            ],
            { cancelable: false }
        );
    }

    removeEmail() {
        this.setState({
            name: '',
            email: '',
            password: '',
            rePassword: '',
            phone: '',
            });
    }

    registerUser(email, name, password, phone) {
        register(email, name, password, phone)
            //.then(res => (res === 'THANH_CONG' ? this.onSuccess() : this.onFail()));
            .then(res => {
                if (res === 'THANH_CONG') return this.onSuccess();
                this.onFail();
            });
    }

    render() {
        const { name, email, password, rePassword, phone } = this.state;
        return (
            <View style={styles.wrapper}>
                {/* <FloatingLabel
                    style={styles.textInputStyle}
                    value={name}
                    onChangeText={(text) => this.setState({ name: text })}
                >
                    Name
                </FloatingLabel> */}
                <TextInput
                    placeholder='Enter your name'
                    style={styles.textInputStyle}
                    value={name}
                    onChangeText={(text) => this.setState({ name: text })}
                />
                <TextInput
                    placeholder='Enter your email'
                    style={styles.textInputStyle}
                    value={email}
                    onChangeText={(text) => this.setState({ email: text })}
                />
                <TextInput
                    placeholder='Enter your phone number'
                    style={styles.textInputStyle}
                    value={phone}
                    onChangeText={(text) => this.setState({ phone: text })}
                />
                <TextInput
                    placeholder='Enter your password'
                    style={styles.textInputStyle}
                    value={password}
                    onChangeText={(text) => this.setState({ password: text })}
                />
                <TextInput
                    placeholder='Re-enter your password'
                    style={styles.textInputStyle}
                    value={rePassword}
                    onChangeText={(text) => this.setState({ rePassword: text })}
                />
                <TouchableOpacity
                    onPress={() => this.registerUser(email, name, password, phone)}
                >
                    <View style={styles.button}>
                        <Text style={styles.text}>SIGN UP</Text>
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
