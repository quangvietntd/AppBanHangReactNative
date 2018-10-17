import React, { Component } from 'react';
import { View, Text, Dimensions, StyleSheet, ImageBackground } from 'react-native';
import Swiper from 'react-native-swiper';

const { width } = Dimensions.get('window');

export default class Category extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={styles.wrapper}>
                <Text style={styles.textStyle}>
                    LIST OF CATEGORY
                </Text>
                <Swiper width={imageWidth} height={imageHeight} autoplay={true} >
                    <ImageBackground
                        source={require('../assets/temp/fit.jpg')}
                        style={styles.imageStyle}
                    >
                        <Text style={styles.textStyle2}>Fit Dress</Text>
                    </ImageBackground>
                    <ImageBackground
                        source={require('../assets/temp/little.jpg')}
                        style={styles.imageStyle}
                    >
                        <Text style={styles.textStyle2}>Little Dress</Text>
                    </ImageBackground>
                    <ImageBackground
                        source={require('../assets/temp/maxi.jpg')}
                        style={styles.imageStyle}
                    >
                        <Text style={styles.textStyle2}>Maxi Dress</Text>
                    </ImageBackground>
                    <ImageBackground
                        source={require('../assets/temp/midi.jpg')}
                        style={styles.imageStyle}
                    >
                        <Text style={styles.textStyle2}>Midi Dress</Text>
                    </ImageBackground>
                    <ImageBackground
                        source={require('../assets/temp/mini.jpg')}
                        style={styles.imageStyle}
                    >
                        <Text style={styles.textStyle2}>Mini Dress</Text>
                    </ImageBackground>
                    <ImageBackground
                        source={require('../assets/temp/party.jpg')}
                        style={styles.imageStyle}
                    >
                        <Text style={styles.textStyle2}>Party Dress</Text>
                    </ImageBackground>
                </Swiper>
            </View>


        );
    }
}

//933 x 465
const imageWidth = width - 30;
const imageHeight = (imageWidth / 933) * 465;
//const imageHeight = width / 2;

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
    imageStyle: {
        width: imageWidth,
        height: imageHeight,
        alignSelf: 'center',
        justifyContent: 'center',

    },
    textStyle: {
        color: 'gray',
        marginBottom: 10,
        fontSize: 20
    },
    textStyle2: {
        color: 'gray',
        fontSize: 20,
        alignSelf: 'center',
        
        
    }

});
