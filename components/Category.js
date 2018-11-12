import React, { Component } from 'react';
import {
    View, Text, Dimensions, StyleSheet, ImageBackground, TouchableOpacity
} from 'react-native';
import Swiper from 'react-native-swiper';
import { localhost } from './localhost';

const { width } = Dimensions.get('window');
const imageUrl = `http://${localhost}/AppBanHangServer/images/type/`;

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

                <Swiper width={imageWidth} height={imageHeight} autoplay >
                    {this.props.type.map(e => (
                        <TouchableOpacity
                            key={e.id}
                            onPress={() => this.props.navigation.navigate('ListProducts', { category: e })}
                        >
                            <ImageBackground
                                source={{ uri: imageUrl + e.image }}
                                style={styles.imageStyle}

                            >
                                <Text style={styles.textStyle2}>{e.name}</Text>
                            </ImageBackground>
                        </TouchableOpacity>

                    )
                    )}


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
