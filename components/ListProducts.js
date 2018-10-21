import React, { Component } from 'react';
import {
    View, Image, Text, StyleSheet,
    ScrollView, TouchableOpacity
} from 'react-native';
import Header from './Header';
//import Category from './Category';

export default class ListProducts extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        const { iconStyle, categoryName, header, productContainer,
            productImage, productInfo, lastRowProductInfo,
            nameProduct, priceProduct, materialProduct, colorProduct,
            showDetails, colorCircle,
        } = styles;
        return (
            <View>
                <Header navigation={this.props.navigation} />
                <View>
                    <View style={header}>
                        <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                            <Image
                                style={iconStyle}
                                source={require('../assets/appIcon/backList.png')}
                            />
                        </TouchableOpacity>
                        <Text style={categoryName}> Party Dress</Text>
                        <View style={{ width: 30 }} />
                    </View>
                    <ScrollView>
                        <View style={productContainer}>
                            <Image
                                style={productImage}
                                source={require('../assets/temp/sp1.jpeg')}
                            />
                            <View style={productInfo}>
                                <Text style={nameProduct}>Lace Sleece Si</Text>
                                <Text style={priceProduct}>171$</Text>
                                <Text style={materialProduct}>Material Silk</Text>
                                <View style={lastRowProductInfo}>
                                    <Text style={colorProduct}>Color RoyalBlue</Text>
                                    <View style={colorCircle} />
                                    <TouchableOpacity onPress={() => this.props.navigation.navigate('ProductDetails')}>
                                        <Text style={showDetails}>SHOW DETAILS</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                        <View style={productContainer}>
                            <Image
                                style={productImage}
                                source={require('../assets/temp/sp1.jpeg')}
                            />
                            <View style={productInfo}>
                                <Text style={nameProduct}>Lace Sleece Si</Text>
                                <Text style={priceProduct}>171$</Text>
                                <Text style={materialProduct}>Material Silk</Text>
                                <View style={lastRowProductInfo}>
                                    <Text style={colorProduct}>Color RoyalBlue</Text>
                                    <View style={colorCircle} />
                                    <TouchableOpacity>
                                        <Text style={showDetails}>SHOW DETAILS</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                        <View style={productContainer}>
                            <Image
                                style={productImage}
                                source={require('../assets/temp/sp1.jpeg')}
                            />
                            <View style={productInfo}>
                                <Text style={nameProduct}>Lace Sleece Si</Text>
                                <Text style={priceProduct}>171$</Text>
                                <Text style={materialProduct}>Material Silk</Text>
                                <View style={lastRowProductInfo}>
                                    <Text style={colorProduct}>Color RoyalBlue</Text>
                                    <View style={colorCircle} />
                                    <TouchableOpacity>
                                        <Text style={showDetails}>SHOW DETAILS</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                        <View style={productContainer}>
                            <Image
                                style={productImage}
                                source={require('../assets/temp/sp1.jpeg')}
                            />
                            <View style={productInfo}>
                                <Text style={nameProduct}>Lace Sleece Si</Text>
                                <Text style={priceProduct}>171$</Text>
                                <Text style={materialProduct}>Material Silk</Text>
                                <View style={lastRowProductInfo}>
                                    <Text style={colorProduct}>Color RoyalBlue</Text>
                                    <View style={colorCircle} />
                                    <TouchableOpacity>
                                        <Text style={showDetails}>SHOW DETAILS</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                        <View style={productContainer}>
                            <Image
                                style={productImage}
                                source={require('../assets/temp/sp1.jpeg')}
                            />
                            <View style={productInfo}>
                                <Text style={nameProduct}>Lace Sleece Si</Text>
                                <Text style={priceProduct}>171$</Text>
                                <Text style={materialProduct}>Material Silk</Text>
                                <View style={lastRowProductInfo}>
                                    <Text style={colorProduct}>Color RoyalBlue</Text>
                                    <View style={colorCircle} />
                                    <TouchableOpacity>
                                        <Text style={showDetails}>SHOW DETAILS</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                        <View style={productContainer}>
                            <Image
                                style={productImage}
                                source={require('../assets/temp/sp1.jpeg')}
                            />
                            <View style={productInfo}>
                                <Text style={nameProduct}>Lace Sleece Si</Text>
                                <Text style={priceProduct}>171$</Text>
                                <Text style={materialProduct}>Material Silk</Text>
                                <View style={lastRowProductInfo}>
                                    <Text style={colorProduct}>Color RoyalBlue</Text>
                                    <View style={colorCircle} />
                                    <TouchableOpacity>
                                        <Text style={showDetails}>SHOW DETAILS</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                        <View style={productContainer}>
                            <Image
                                style={productImage}
                                source={require('../assets/temp/sp1.jpeg')}
                            />
                            <View style={productInfo}>
                                <Text style={nameProduct}>Lace Sleece Si</Text>
                                <Text style={priceProduct}>171$</Text>
                                <Text style={materialProduct}>Material Silk</Text>
                                <View style={lastRowProductInfo}>
                                    <Text style={colorProduct}>Color RoyalBlue</Text>
                                    <View style={colorCircle} />
                                    <TouchableOpacity>
                                        <Text style={showDetails}>SHOW DETAILS</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                        <View style={productContainer}>
                            <Image
                                style={productImage}
                                source={require('../assets/temp/sp1.jpeg')}
                            />
                            <View style={productInfo}>
                                <Text style={nameProduct}>Lace Sleece Si</Text>
                                <Text style={priceProduct}>171$</Text>
                                <Text style={materialProduct}>Material Silk</Text>
                                <View style={lastRowProductInfo}>
                                    <Text style={colorProduct}>Color RoyalBlue</Text>
                                    <View style={colorCircle} />
                                    <TouchableOpacity>
                                        <Text style={showDetails}>SHOW DETAILS</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </ScrollView>
                </View>

                {/* <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                    <Text>Back</Text>
                </TouchableOpacity> */}

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
