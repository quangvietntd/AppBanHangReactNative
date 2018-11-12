import React, { Component } from 'react';
import {
    View, Image, Text, StyleSheet,
    FlatList, TouchableOpacity, RefreshControl
} from 'react-native';
import Header from './Header';
import MyListItem from './MyListItem';
import getProductByType from './api/getProductByType';


export default class ListProducts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            refreshing: false,
            page: 1,
        };
    }

    componentDidMount() {
        const category = this.props.navigation.getParam('category');
        getProductByType(category.id, this.state.page)
            .then(res => this.setState({ data: res }))
            .catch(err => console.log(err));
    }

    onRefresh = () => {
        const category = this.props.navigation.getParam('category');
        this.setState({ refreshing: true, page: this.state.page + 1 }, () => {
            getProductByType(category.id, this.state.page)
                .then(res => {
                    this.setState({ data: res.concat(this.state.data), refreshing: false });
                })
                .catch(() => this.setState({ refreshing: false }));
        });
    }

    render() {
        const { iconStyle, categoryName, header, wrapper, cardStyle
        } = styles;
        const category = this.props.navigation.getParam('category');
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
                        <Text style={categoryName}> {category.name}</Text>
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
                            refreshControl={
                                <RefreshControl
                                    refreshing={this.state.refreshing}
                                    onRefresh={() => this.onRefresh()}
                                />
                            }
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
