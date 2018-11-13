import React, { Component } from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, StyleSheet } from 'react-native';
import Global from './Global';
import search from './api/search';
//import NavigationService from './NavigationService';
//import { withNavigation } from 'react-navigation';


// const screen = Dimensions.get('window');

class Header extends Component {


    onSearch(text) {
        search(text)
            .then(res => Global.setListData(res))
            .catch(() => console.log('no data'));
    }

    render() {
        const { view1, view2, icon, label } = styles;
        return (
            <View
                style={view1}
            >
                <View style={view2}>
                    <TouchableOpacity
                        onPress={() =>
                            //  NavigationService.openDrawer()
                            this.props.navigation.toggleDrawer()
                        }
                    >
                        <Image
                            style={icon}
                            source={require('../assets/appIcon/ic_menu.png')}
                        />
                    </TouchableOpacity>

                    <Text
                        style={label}
                    > Wearing a Dress </Text>
                    <Image
                        style={icon}
                        source={require('../assets/appIcon/ic_logo.png')}
                    />
                </View>
                <TextInput
                    style={{ backgroundColor: 'white', borderColor: 'gray', borderRadius: 6, borderWidth: 1, height: 40, padding: 10 }}
                    placeholder='What do you want to buy?'
                    onFocus={() => this.props.navigation.navigate('Search')}
                    onChangeText={(text) => this.onSearch(text)}
                />

            </View>
        );
    }
}

//export default withNavigation(Header);
export default Header;


const styles = StyleSheet.create({
    view1: { height: 90, padding: 10, backgroundColor: 'darkviolet' },
    view2: { flex: 1, flexDirection: 'row', justifyContent: 'space-between' },
    icon: { width: 25, height: 25 },
    label: { fontSize: 18, fontWeight: 'bold', color: 'white' },


});