import React, { Component } from 'react';
import { Text, View } from 'react-native';
import MyTouchable from './MyTouchable';
import Header from './Header';

export default class Main extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { navigation } = this.props;
    return (
      <View>
        <View>
          <Text style={{ color: '#ff0080' }}> Main component </Text>
          <MyTouchable route='Authencation' navigation={navigation} />
          <MyTouchable route='OrderHistory' navigation={navigation} />
          <MyTouchable route='ChangeInfo' navigation={navigation} />
        </View>
      </View>
    );
  }
}
