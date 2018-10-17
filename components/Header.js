import React, { Component } from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, StyleSheet } from 'react-native';

// const screen = Dimensions.get('window');

export default class Header extends Component {
      constructor(props) {
            super(props);
            this.state = {
            };
      }

      render() {
            const { view1, view2, icon, text } = styles;
            return (
                  <View
                        style={view1}
                  >
                        <View style={view2}>
                              <TouchableOpacity>
                                    <Image
                                          style={icon}
                                          source={require('../assets/appIcon/ic_menu.png')}
                                    />
                              </TouchableOpacity>

                              <Text
                                    style={text}
                              > Wearing a Dress </Text>
                              <Image
                                    style={icon}
                                    source={require('../assets/appIcon/ic_logo.png')}
                              />
                        </View>
                        <TextInput
                              style={{ backgroundColor: 'white', borderColor: 'gray', borderRadius: 6, borderWidth: 1, height: 40, padding: 10 }}
                              placeholder='What do you want to buy?'
                        />

                  </View>
            );
      }
}

const styles = StyleSheet.create({
      view1 : { height: 90, padding: 10, backgroundColor: 'darkviolet' },
      view2 : { flex: 1, flexDirection: 'row', justifyContent: 'space-between' },
      icon : { width: 25, height: 25 },
      text : { fontSize: 18, fontWeight: 'bold', color: 'white' },

      
});