import React, { Component } from 'react';
import { StyleSheet, View, Dimensions, FlatList }
    from 'react-native';
import Global from './Global';
import Header from './Header';
import MyListItem from './MyListItem';

class SearchView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
        };
        Global.setListData = this.setListData.bind(this);
    }

    setListData(arrData) {
        this.setState({ data: arrData });
    }

    render() {
        const {
            wrapper
        } = styles;
        return (
            <View style={wrapper} >
                <Header navigation={this.props.navigation} />
                <FlatList
                    data={this.state.data}
                    keyExtractor={item => item.id}
                    renderItem={
                        ({ item }) => (
                            <MyListItem
                                id={item.id}
                                data={item}
                                navigation={this.props.navigation}
                            />
                        )
                    }
                />
            </View>

        );
    }
}

const { width } = Dimensions.get('window');
const imageWidth = width / 4;
const imageHeight = (imageWidth * 452) / 361;

const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: '#F6F6F6',
        flex: 1
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
        fontSize: 15,
        fontWeight: '400',
        fontFamily: 'Avenir'
    },
    txtColor: {
        paddingLeft: 20,
        color: 'black',
        fontSize: 15,
        fontWeight: '400',
        fontFamily: 'Avenir'
    },
    txtMaterial: {
        paddingLeft: 20,
        color: 'black',
        fontSize: 15,
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
        flexDirection: 'row',
        position: 'absolute',
        alignSelf: 'flex-end',
        marginTop: 100
    }
});

export default SearchView;
