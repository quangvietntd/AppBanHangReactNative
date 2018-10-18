import React, { Component } from 'react';
import { View, Text, Image, Dimensions, StyleSheet } from 'react-native';
import GridView from 'react-native-super-grid';

const { width } = Dimensions.get('window');

export default class TopProducts extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const sp1 = require('../assets/temp/sp1.jpeg');
    const sp2 = require('../assets/temp/sp2.jpeg');
    const sp3 = require('../assets/temp/sp3.jpeg');
    const sp4 = require('../assets/temp/sp4.jpeg');
    const sp5 = require('../assets/temp/sp5.jpeg');
    return (
        <View style={styles.wrapper}>
            <Text style={styles.textStyle}>
                TOP PRODUCTS
            </Text>
            <GridView
                itemDimension={130}
                items={[sp1, sp2, sp3, sp4, sp5]}
                renderItem={(item) => (
                        <View style={styles.wrapper2}>
                            <Image 
                                source={item}
                                style={styles.imageStyle}
                            />
                            <Text style={styles.productName}>Product name</Text>
                            <Text style={styles.productPrice}>400$</Text>
                        </View>
                    
                    )  
                }   
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
    },
    textStyle: {
        color: 'gray',
        marginBottom: 10,
        fontSize: 20
    },
    productName: {
        fontSize: 18,
        color: 'gray',
        marginLeft: 10,
    },
    productPrice: {
        fontSize: 16,
        color: 'gray',
        marginLeft: 10,
    }

});