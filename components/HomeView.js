import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';
import Collection from './Collection';
import Header from './Header';
import Category from './Category';
import TopProducts from './TopProducts';
import { localhost } from './localhost';
import checkLogin from './api/checkLogin';
import getToken from './api/getToken';
import Global from './Global';

export default class HomeView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            type: [],
            topProducts: [],
        };
    }

    componentDidMount() {
        fetch(`http://${localhost}/AppBanHangServer`)
            .then(res => res.json())
            .then(resJSON => {
                this.setState({
                    type: resJSON.type,
                    topProducts: resJSON.product,
                });
            })
            .catch(error => console.log(error));

        getToken()
            .then(token => checkLogin(token))
            .then(res => {
                if (res === 'TOKEN_KHONG_HOP_LE') {
                    return;
                }
                Global.onSignIn(res.user);
            })
            .catch(err => console.log(err));
    }

    render() {
        return (

            <View style={{ flex: 1, backgroundColor: 'darkgray' }}>
                <Header navigation={this.props.navigation} />
                <ScrollView>
                    <Collection />
                    <Category navigation={this.props.navigation} type={this.state.type} />
                    <TopProducts navigation={this.props.navigation} topProducts={this.state.topProducts} />

                </ScrollView>
            </View>


        );
    }
}
