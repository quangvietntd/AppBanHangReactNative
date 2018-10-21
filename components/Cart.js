import React, { Component } from 'react';
import {
  View, Text, TouchableOpacity, ScrollView,
  Dimensions, StyleSheet, Image
} from 'react-native';

import Header from './Header';
import sp1 from '../assets/temp/sp1.jpeg';

function toTitleCase(str) {
  return str.replace(/\w\S*/g, txt => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
}

class Cart extends Component {
  render() {
    const { main, checkoutButton, checkoutTitle, wrapper,
      product, mainRight, productController,
      txtName, txtPrice, productImage, numberOfProduct,
      txtShowDetail, showDetailContainer } = styles;
    return (
      <View style={wrapper}>
        <Header navigation={this.props.navigation} />
        <ScrollView style={main}>
          <View style={product}>
            <Image source={sp1} style={productImage} />
            <View style={[mainRight]}>
              <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
                <Text style={txtName}>{toTitleCase('black of the')}</Text>
                <TouchableOpacity>
                  <Text style={{ fontFamily: 'Avenir', color: '#969696' }}>X</Text>
                </TouchableOpacity>
              </View>
              <View>
                <Text style={txtPrice}>{100}$</Text>
              </View>
              <View style={productController}>
                <View style={numberOfProduct}>
                  <TouchableOpacity>
                    <Text>+</Text>
                  </TouchableOpacity>
                  <Text>{3}</Text>
                  <TouchableOpacity>
                    <Text>-</Text>
                  </TouchableOpacity>
                </View>
                <TouchableOpacity 
                  style={showDetailContainer}
                  onPress={() => this.props.navigation.navigate('ProductDetails')}
                >
                  <Text style={txtShowDetail}>SHOW DETAILS</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={product}>
            <Image source={sp1} style={productImage} />
            <View style={[mainRight]}>
              <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
                <Text style={txtName}>{toTitleCase('black of the')}</Text>
                <TouchableOpacity>
                  <Text style={{ fontFamily: 'Avenir', color: '#969696' }}>X</Text>
                </TouchableOpacity>
              </View>
              <View>
                <Text style={txtPrice}>{100}$</Text>
              </View>
              <View style={productController}>
                <View style={numberOfProduct}>
                  <TouchableOpacity>
                    <Text>+</Text>
                  </TouchableOpacity>
                  <Text>{3}</Text>
                  <TouchableOpacity>
                    <Text>-</Text>
                  </TouchableOpacity>
                </View>
                <TouchableOpacity style={showDetailContainer}>
                  <Text style={txtShowDetail}>SHOW DETAILS</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={product}>
            <Image source={sp1} style={productImage} />
            <View style={[mainRight]}>
              <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
                <Text style={txtName}>{toTitleCase('black of the')}</Text>
                <TouchableOpacity>
                  <Text style={{ fontFamily: 'Avenir', color: '#969696' }}>X</Text>
                </TouchableOpacity>
              </View>
              <View>
                <Text style={txtPrice}>{100}$</Text>
              </View>
              <View style={productController}>
                <View style={numberOfProduct}>
                  <TouchableOpacity>
                    <Text>+</Text>
                  </TouchableOpacity>
                  <Text>{3}</Text>
                  <TouchableOpacity>
                    <Text>-</Text>
                  </TouchableOpacity>
                </View>
                <TouchableOpacity style={showDetailContainer}>
                  <Text style={txtShowDetail}>SHOW DETAILS</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={product}>
            <Image source={sp1} style={productImage} />
            <View style={[mainRight]}>
              <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
                <Text style={txtName}>{toTitleCase('black of the')}</Text>
                <TouchableOpacity>
                  <Text style={{ fontFamily: 'Avenir', color: '#969696' }}>X</Text>
                </TouchableOpacity>
              </View>
              <View>
                <Text style={txtPrice}>{100}$</Text>
              </View>
              <View style={productController}>
                <View style={numberOfProduct}>
                  <TouchableOpacity>
                    <Text>+</Text>
                  </TouchableOpacity>
                  <Text>{3}</Text>
                  <TouchableOpacity>
                    <Text>-</Text>
                  </TouchableOpacity>
                </View>
                <TouchableOpacity style={showDetailContainer}>
                  <Text style={txtShowDetail}>SHOW DETAILS</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>
        <TouchableOpacity style={checkoutButton}>
          <Text style={checkoutTitle}>TOTAL {1000}$ CHECKOUT NOW</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const { width } = Dimensions.get('window');
const imageWidth = width / 4;
const imageHeight = (imageWidth * 452) / 361;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#DFDFDF'
  },
  checkoutButton: {
    height: 50,
    margin: 10,
    marginTop: 0,
    backgroundColor: 'darkviolet',
    borderRadius: 2,
    alignItems: 'center',
    justifyContent: 'center'
  },
  main: {
    width, backgroundColor: '#DFDFDF'
  },
  checkoutTitle: {
    color: '#FFF',
    fontSize: 15,
    fontWeight: 'bold',
    fontFamily: 'Avenir'
  },
  product: {
    flexDirection: 'row',
    margin: 10,
    padding: 10,
    backgroundColor: '#FFFFFF',
    borderRadius: 2,
    shadowColor: '#3B5458',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2
  },
  productImage: {
    width: imageWidth,
    height: imageHeight,
    flex: 1,
    resizeMode: 'center'
  },
  mainRight: {
    flex: 3,
    justifyContent: 'space-between'
  },
  productController: {
    flexDirection: 'row'
  },
  numberOfProduct: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  txtName: {
    paddingLeft: 20,
    color: '#A7A7A7',
    fontSize: 20,
    fontWeight: '400',
    fontFamily: 'Avenir'
  },
  txtPrice: {
    paddingLeft: 20,
    color: '#C21C70',
    fontSize: 20,
    fontWeight: '400',
    fontFamily: 'Avenir'
  },
  txtShowDetail: {
    color: '#C21C70',
    fontSize: 10,
    fontWeight: '400',
    fontFamily: 'Avenir',
    textAlign: 'right',
  },
  showDetailContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end'
  }
});

export default Cart;
