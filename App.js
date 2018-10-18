/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import { Image, Dimensions } from 'react-native';
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
import CustomDrawerContentComponent from './components/CustomDrawerContentComponent';
//import NavigationService from './components/NavigationService';


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
        return (<Image
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
        return (<Image
          source={icon}
          style={{ width: 25, height: 25, }}
        />
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
  initialRoute: 'Main',
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
  headerMode: 'none',

};

const StackNavigator = createStackNavigator(stackRouteConfigs, stackNavigatorCofig);
//export default stackNavigator;
export default class App extends React.Component {
  render() {
    return (
      <StackNavigator />
    );
  }
}
