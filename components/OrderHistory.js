import React, { Component } from 'react';
import {
    View, TouchableOpacity, Text, Image, StyleSheet, Dimensions, FlatList
} from 'react-native';
import getOrderHistory from './api/getOrderHistory';
import getToken from './api/getToken';
import backSpecial from '../assets/appIcon/backs.png';
import MyListItem2 from './MyListItem2';

export default class OrderHistory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        };
    }

    componentDidMount() {
        getToken()
            .then(token => getOrderHistory(token))
            .then(res => this.setState({ data: res }))
            .catch(err => console.log(err));
    }

    render() {
        const { wrapper, header, headerTitle, backIconStyle, body } = styles;
        return (
            <View style={wrapper}>
                <View style={header}>
                    <View />
                    <Text style={headerTitle}>Order History</Text>
                    <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                        <Image source={backSpecial} style={backIconStyle} />
                    </TouchableOpacity>
                </View>
                <View style={body}>
                    <FlatList
                        data={this.state.data}
                        keyExtractor={(item) => item.id}
                        renderItem={({ item }) => (
                            <MyListItem2
                                id={item.id}
                                data={item}
                            />
                        )}

                    />
                </View>
            </View>
        );
    }
}

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
    wrapper: { flex: 1, backgroundColor: '#fff' },
    header: { flex: 1, backgroundColor: 'darkviolet', alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row', paddingHorizontal: 10 },// eslint-disable-line
    headerTitle: { fontFamily: 'Avenir', color: '#fff', fontSize: 20 },
    backIconStyle: { width: 30, height: 30 },
    body: { flex: 10, backgroundColor: '#F6F6F6' },
    orderRow: {
        height: width / 3,
        backgroundColor: '#FFF',
        margin: 10,
        shadowOffset: { width: 2, height: 2 },
        shadowColor: '#DFDFDF',
        shadowOpacity: 0.2,
        padding: 10,
        borderRadius: 2,
        justifyContent: 'space-around'
    }
});
