import React, { Component } from 'react';
import { View, Text, Image, Dimensions, StyleSheet, TouchableOpacity } from 'react-native';
import GridView from 'react-native-super-grid';

const { width } = Dimensions.get('window');

const localhost = '192.168.1.105';
const imageUrl = `http://${localhost}/AppBanHangServer/images/product/`;
export default class TopProducts extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        // const sp1 = require('../assets/temp/sp1.jpeg');
        // const sp2 = require('../assets/temp/sp2.jpeg');
        // const sp3 = require('../assets/temp/sp3.jpeg');
        // const sp4 = require('../assets/temp/sp4.jpeg');
        // const sp5 = require('../assets/temp/sp5.jpeg');

      //  const { navigation } = this.props;
        return (
            <View style={styles.wrapper}>
                <Text style={styles.textStyle}>
                    TOP PRODUCTS
            </Text>
                <GridView
                    itemDimension={130}
                    items={this.props.topProducts}
                    renderItem={(item) => (
                        <TouchableOpacity
                            key={item.id}
                            onPress={() => this.props.navigation.navigate('ProductDetails')}
                        >
                        { console.log(imageUrl + item.images[0])}
                            <View style={styles.wrapper2}>
                                <Image
                                    source={{ uri: imageUrl + item.images[0] }}
                                    style={styles.imageStyle}
                                />
                                <Text style={styles.productName}>{item.name}</Text>
                                <Text style={styles.productPrice}>{item.price}$</Text>
                            </View>
                        </TouchableOpacity>
                    )}
                />
            </View>
        );
    }
}

//361x452
const imageWidth = (width - 60) / 2;
const imageHeight = (imageWidth / 361) * 452;

const styles = StyleSheet.create({
    wrapper: {
        shadowColor: '#2E272B',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2,
        borderRadius: 6,
        padding: 10,
        margin: 5,
        backgroundColor: 'white'
    },
    wrapper2: {
        shadowColor: '#2E272B', // for ios
        shadowOffset: { width: 0, height: 3 }, //for ios
        shadowOpacity: 0.2,
        borderRadius: 0,
        padding: 0,
        margin: 0,
        backgroundColor: 'white',
        elevation: 8 // shadow for android
    },
    imageStyle: {
        width: imageWidth,
        height: imageHeight,
        alignSelf: 'center',
        //resizeMode: 'cover',
    },
    textStyle: {
        color: 'gray',
        marginBottom: 10,
        fontSize: 20
    },
    productName: {
        fontSize: 13,
        color: 'gray',
        marginLeft: 10,
    },
    productPrice: {
        fontSize: 16,
        color: 'gray',
        marginLeft: 10,
    }

});