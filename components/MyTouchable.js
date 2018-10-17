
import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export default class MyTouchable extends Component {
      render() {
            return (
                  <TouchableOpacity
                        onPress={() => {
                              this.props.navigation.navigate(this.props.route);
                        }}
                  >
                        <View
                              style={{
                                    marginTop: 20,
                                    width: 200,
                                    padding: 10,
                                    borderRadius: 4,
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    backgroundColor: 'darkviolet'
                              }}
                        >
                              <Text style={{ color: 'white' }}>Go to {this.props.route}</Text>
                        </View>
                  </TouchableOpacity>
            );
      }
}
