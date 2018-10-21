import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';
import Collection from './Collection';
import Header from './Header';
import Category from './Category';
import TopProducts from './TopProducts';


export default class HomeView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: [],
    };
  }

  componentDidMount() {
    fetch('http://192.168.1.105/AppBanHangServer')
      .then(res => res.json())
      .then(resJSON => {
        this.setState({ type: resJSON.type });
      })
      .catch(error => console.log(error));
  }


  render() {
    return (

      <View style={{ flex: 1, backgroundColor: 'darkgray' }}>
        <Header navigation={this.props.navigation} />
        <ScrollView>
          <Collection />
          <Category navigation={this.props.navigation} type={this.state.type} />
          <TopProducts navigation={this.props.navigation} />

        </ScrollView>
      </View>


    );
  }
}
