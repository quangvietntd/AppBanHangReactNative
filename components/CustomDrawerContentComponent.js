import React, { Component } from 'react';
import { View, Text, ScrollView, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import MyButton from './MyButton';
import Global from './Global';
import removeToken from './api/removeToken';

export default class CustomDrawerContentComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLogedIn: false,
            username: '',
        };
        Global.onSignIn = this.onSignIn.bind(this);
    }

    onSignIn(user) {
        this.setState({ username: user.name, isLogedIn: true });
    }

    onSignOut() {
        removeToken()
        .then(() => this.setState({ username: '', isLogedIn: false }));
    }

    render() {
        // const { navigate } = this.props.navigation;
        const logOutJSX = (
            <ScrollView>
                <SafeAreaView>
                    <View style={styles.wrapper}>
                        <Image
                            source={require('../assets/temp/profile.png')}
                            style={styles.imageStyle}
                        />
                    </View>
                    <View style={{ marginTop: 10, marginBottom: 100, alignItems: 'center' }}>
                        <Text style={styles.textStyle}>{this.state.username}</Text>
                    </View>
                    <MyButton navigation={this.props.navigation} route='OrderHistory' label='Order History' />
                    <MyButton navigation={this.props.navigation} route='ChangeInfo' label='Change Info' />
                    <TouchableOpacity onPress={() => this.onSignOut()}>
                        <View style={styles.container}>
                            <Text style={styles.textStyle}>Sign Out</Text>
                        </View>
                    </TouchableOpacity>

                </SafeAreaView>
            </ScrollView>
        );
        const loginJSX = (
            <ScrollView>
                <SafeAreaView>
                    <View style={styles.wrapper}>
                        <Image
                            source={require('../assets/temp/profile.png')}
                            style={styles.imageStyle}
                        />
                    </View>
                    <View style={{ marginBottom: 100 }} />
                    <MyButton navigation={this.props.navigation} route='SignIn' label='Sign In' />
                </SafeAreaView>
            </ScrollView>
        );

        return this.state.isLogedIn ? logOutJSX : loginJSX;
    }
}

const styles = StyleSheet.create({
    wrapper: {
        alignItems: 'center',
        backgroundColor: 'darkviolet',
    },
    container: {
        flex: 1,
        height: 40,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textStyle: {
        fontSize: 18,
        color: 'gray'
    },
    imageStyle: {
        width: 100,
        height: 100,
        borderRadius: 50,
    },
    line: {
        height: 1,
        backgroundColor: 'lightgray',
    }

});
