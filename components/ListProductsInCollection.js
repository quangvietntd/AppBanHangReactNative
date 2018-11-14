import React, { Component } from 'react';
import {
    View, Image, Text, StyleSheet,
    FlatList, TouchableOpacity, RefreshControl
} from 'react-native';
import Toast from 'react-native-simple-toast';
import Header from './Header';
import MyListItem from './MyListItem';
import getCollection from './api/getCollection';


export default class ListProductsInCollection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            refreshing: false,
            page: 1,
        };
    }

    componentDidMount() {
        getCollection(this.state.page)
            .then(res => this.setState({ data: res }))
            .catch(err => console.log(err));
    }

    loadMore = () => {
        this.setState({ page: this.state.page + 1 }, () => {
            getCollection(this.state.page)
                .then(res => {
                    this.setState({ data: this.state.data.concat(res) });
                    console.log(res);
                })
                .catch((err) => {
                    console.log(err);
                    Toast.show('No data', Toast.LONG);
                });
        });
    }

    render() {
        const { iconStyle, categoryName, header, wrapper, cardStyle
        } = styles;
        return (
            <View style={wrapper}>
                <Header navigation={this.props.navigation} />
                <View style={cardStyle}>
                    <View style={header}>
                        <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                            <Image
                                style={iconStyle}
                                source={require('../assets/appIcon/backList.png')}
                            />
                        </TouchableOpacity>
                        <Text style={categoryName}> SPRING COLLECTION</Text>
                        <View style={{ width: 30 }} />
                    </View>
                    <FlatList
                        data={this.state.data}
                        keyExtractor={(item) => item.id}
                        renderItem={({ item }) => ( // tai sao them dau ngoac {}???
                            <MyListItem
                                id={item.id}
                                data={item}
                                navigation={this.props.navigation}
                            />
                        )}
                        onEndReachedThreshold={0.1}
                        onEndReached={() => this.loadMore()}
                    />
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
    wrapper: {
        flex: 1,
        backgroundColor: '#D6D6D6',
    },
    cardStyle: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        //  borderRadius: 5,
        marginHorizontal: 5,
        marginVertical: 5
    },
});
