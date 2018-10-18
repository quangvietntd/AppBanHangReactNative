import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export default class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.wrapper}>
        <TextInput placeholder='Enter your email' style={styles.textInputStyle} />
        <TextInput placeholder='Enter your password' style={styles.textInputStyle} />
        <TouchableOpacity>
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
