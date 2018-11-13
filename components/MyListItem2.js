import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';

export default class MyListItem2 extends Component {
    render() {
        const { data } = this.props;
        return (
            <View style={styles.orderRow}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={{ color: '#9A9A9A', fontWeight: 'bold' }}>Order id:</Text>
                    <Text style={{ color: '#2ABB9C' }}>{data.id}</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={{ color: '#9A9A9A', fontWeight: 'bold' }}>OrderTime:</Text>
                    <Text style={{ color: '#C21C70' }}>{data.date_order}</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={{ color: '#9A9A9A', fontWeight: 'bold' }}>Status:</Text>
                    <Text style={{ color: '#2ABB9C' }}>{data.status}</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={{ color: '#9A9A9A', fontWeight: 'bold' }}>Total:</Text>
                    <Text style={{ color: '#C21C70', fontWeight: 'bold' }}>{data.total}$</Text>
                </View>
            </View>
        );
    }
}

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
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