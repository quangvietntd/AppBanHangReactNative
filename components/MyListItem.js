import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { localhost } from './localhost';


const imageUrl = `http://${localhost}/AppBanHangServer/images/product/`;

export default class MyListItem extends Component {
    render() {
        const { productContainer, productImage, productInfo, nameProduct,
            priceProduct, materialProduct, lastRowProductInfo, colorProduct, colorCircle,
            showDetails
        } = styles;
        const { name, price, color, material, images } = this.props.data;
       
        return (
            <View style={productContainer}>
                <Image
                    style={productImage}
                    source={{ uri: imageUrl + images[0] }}
                />
                <View style={productInfo}>

                    <Text style={nameProduct}>{name}</Text>
                    <Text style={priceProduct}>{price}$</Text>
                    <Text style={materialProduct}>Material {material}</Text>
                    <View style={lastRowProductInfo}>
                        <Text style={colorProduct}>Color {color}</Text>
                        <View style={{ ...colorCircle, backgroundColor: color.toLowerCase() }} />
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('ProductDetails', { product: this.props.data })}>
                            <Text style={showDetails}>SHOW DETAILS</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    iconStyle: {
        width: 30,
        height: 30,
    },
    categoryName: {
        fontSize: 25,
        color: 'darkviolet'
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 5,
    },
    productContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        padding: 10,
        paddingVertical: 15,
        borderTopColor: '#F0F0F0',
        borderBottomColor: '#FFF',
        borderLeftColor: '#FFF',
        borderRightColor: '#FFF',
        borderWidth: 1
    },
    productImage: {
        flex: 30,
        width: 361 * 0.25,
        height: 452 * 0.25,
        resizeMode: 'center',
    },
    productInfo: {
        flex: 70,
        marginLeft: 20,
        justifyContent: 'space-between',

    },
    lastRowProductInfo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    nameProduct: {
        fontSize: 20,
        color: 'gray'
    },
    priceProduct: {
        fontSize: 16,
        color: 'darkviolet'
    },
    materialProduct: {
        fontSize: 14,
        color: 'black'
    },
    colorProduct: {
        fontSize: 14,
        color: 'black'
    },
    colorCircle: {
        width: 20,
        height: 20,
        borderRadius: 10,
        backgroundColor: 'cyan',
    },
    showDetails: {
        color: 'darkviolet',
        fontSize: 12,
    }
});
