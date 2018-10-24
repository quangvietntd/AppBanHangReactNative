/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import { Image, Dimensions, Text, View } from 'react-native';
import React from 'react';

//import { createStackNavigator } from 'react-navigation';
//import Authencation from './components/Authencation';
//import ChangeInfo from './components/ChangeInfo';
//import Main from './components/Main';
//import OrderHistory from './components/OrderHistory';
import {
  createBottomTabNavigator,
  createDrawerNavigator,
  createStackNavigator
} from 'react-navigation';
import Home from './components/Home';
import Cart from './components/Cart';
import Search from './components/Search';
import Contact from './components/Contact';
import OrderHistory from './components/OrderHistory';
import ChangeInfo from './components/ChangeInfo';
import Authencation from './components/Authencation';
//import ProductDetails from './components/ProductDetails';
//import Header from './components/Header';
import CustomDrawerContentComponent from './components/CustomDrawerContentComponent';
//import NavigationService from './components/NavigationService';
import Global from './components/Global';
import saveCart from './components/api/saveCart';
import getCart from './components/api/getCart';


const { width } = Dimensions.get('window');


const routeConfigs = {
  Home: {
    screen: Home,
    navigationOptions: {
      tabBarLabel: 'Home',
      tabBarIcon: ({ focused }) => {
        const icon1 = require('./assets/appIcon/home.png');
        const icon2 = require('./assets/appIcon/home0.png');

        const icon = focused ? icon1 : icon2;
        return (
          <Image
            source={icon}
            style={{ width: 25, height: 25, }}
          />
        );
      }
    },
  },
  Cart: {
    screen: Cart,
    navigationOptions: {
      tabBarLabel: 'Cart',
      tabBarIcon: ({ focused }) => {
        const icon1 = require('./assets/appIcon/cart.png');
        const icon2 = require('./assets/appIcon/cart0.png');

        const icon = focused ? icon1 : icon2;
        return (
          <View style={{ flex: 1, flexDirection: 'row' }}>
            <Image
              source={icon}
              style={{ width: 30, height: 30, alignSelf: 'flex-end' }}
            />
            <View style={{ backgroundColor: 'red', width: 16, height: 16, borderRadius: 8, alignItems: 'center', justifyContent: 'center' }}>
              <Text style={{ color: 'white', fontSize: 10, fontWeight: 'bold' }}>{Global.productsInCart.length}</Text>
            </View>
          </View>
        );
      }
    },
  },
  Search: {
    screen: Search,
    navigationOptions: {
      tabBarLabel: 'Search',
      tabBarIcon: ({ focused }) => {
        const icon1 = require('./assets/appIcon/search.png');
        const icon2 = require('./assets/appIcon/search0.png');

        const icon = focused ? icon1 : icon2;
        return (<Image
          source={icon}
          style={{ width: 25, height: 25, }}
        />
        );
      }
    },
  },
  Contact: {
    screen: Contact,
    navigationOptions: {
      tabBarLabel: 'Contact',
      tabBarIcon: ({ focused }) => {
        const icon1 = require('./assets/appIcon/contact.png');
        const icon2 = require('./assets/appIcon/contact0.png');

        const icon = focused ? icon1 : icon2;
        return (<Image
          source={icon}
          style={{ width: 25, height: 25, }}
        />
        );
      }
    },
  },


};

const bottomTabNavigatorConfig = {
  initialRouteName: 'Home',
  tabBarOptions: {
    activeTintColor: 'green',
    inactiveBackgroundColor: '',
    inactiveTintColor: 'gray',
  }
};

const TabNavigator = createBottomTabNavigator(routeConfigs, bottomTabNavigatorConfig);
//---------------------------------------------------------------
const drawerRouteConfigs = {
  Home: {
    screen: TabNavigator,
  },
  OrderHistory: {
    screen: OrderHistory,
  },
  ChangeInfo: {
    screen: ChangeInfo,
  },
  SignIn: {
    screen: Authencation,
  }
};

const drawerNavigatorConfig = {
  initialRouteName: 'Home',
  drawerWidth: width / 2,
  drawerPosition: 'left',
  contentComponent: CustomDrawerContentComponent,
  headerMode: 'screen',
  drawerBackgroundColor: 'white',
  useNativeAnimations: 'true',
  contentOptions: {
    activeTintColor: 'red',
  },
};

const DrawerNavigator = createDrawerNavigator(drawerRouteConfigs, drawerNavigatorConfig);
//---------------------------------------------
const stackRouteConfigs = {
  DrawerNavigator: {
    screen: DrawerNavigator
  }
};

const stackNavigatorCofig = {
  initialRouteName: 'DrawerNavigator',
  headerMode: 'none'
};

const StackNavigator = createStackNavigator(stackRouteConfigs, stackNavigatorCofig);
//export default stackNavigator;


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      arrCart: [],
      refresh: false,
    };
    Global.addProductToCart = this.addProductToCart.bind(this);
    Global.increaseQuantity = this.increaseQuantity.bind(this);
    Global.decreaseQuantity = this.decreaseQuantity.bind(this);
    Global.removeProduct = this.removeProduct.bind(this);
  }

  componentWillMount() {
    getCart().then(arrCart => this.setState({ arrCart }
      , () => this.updateProductsInCart()
    ));
  }

  addProductToCart(product) {
    const check = this.state.arrCart.findIndex(e => e.product.id === product.id);
    if (check !== -1) { // this product is exist in cart
      const newCart = this.state.arrCart;
      newCart.splice(check, 1, { product, quantity: newCart[check].quantity + 1 });
      this.setState({ arrCart: newCart },
        () => this.updateProductsInCart()
      );
    } else {
      this.setState({
        arrCart: this.state.arrCart.concat({ product, quantity: 1 }),
      }, () => this.updateProductsInCart());
    }
  }

  updateProductsInCart() {
    Global.productsInCart = this.state.arrCart;
    saveCart(this.state.arrCart);
  }

  increaseQuantity(productId) {
    const newArrCart = this.state.arrCart.map(e => {
      if (e.product.id !== productId) return e;
      return { product: e.product, quantity: e.quantity + 1 };
      // return (e.product.id !== productId) ? e : { product: e.product, quantity: e.quantity + 1 };
    });
    this.setState({ arrCart: newArrCart },
      () => this.updateProductsInCart()
    );
  }

  decreaseQuantity(productId) {
    const newArrCart = this.state.arrCart.map(e => {
      return (e.product.id !== productId) ? e : { product: e.product, quantity: e.quantity > 1 ? (e.quantity - 1) : 1 };
    });
    this.setState({ arrCart: newArrCart },
      () => this.updateProductsInCart()
    );
  }

  removeProduct(productId) {
    const newCart = this.state.arrCart.filter(e => e.product.id !== productId);
    this.setState({ arrCart: newCart },
      () => this.updateProductsInCart()
    );
  }

  // cach khac:
  // removeProduct(productId) {
  //   const start = this.state.arrCart.findIndex(e => e.product.id === productId);
  //   const newCart = this.state.arrCart;
  //   newCart.splice(start, 1);
  //   this.setState({ arrCart: newCart },
  //     () => this.updateProductsInCart()  
  //   );
  // }

  render() {
    return (
      <StackNavigator />
    );
  }
}
