/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import { Image } from 'react-native';
import React from 'react';

//import { createStackNavigator } from 'react-navigation';
//import Authencation from './components/Authencation';
//import ChangeInfo from './components/ChangeInfo';
import Main from './components/Main';
//import OrderHistory from './components/OrderHistory';

import { createBottomTabNavigator } from 'react-navigation';
import Home from './components/Home';
import Cart from './components/Cart';
import Search from './components/Search';
import Contact from './components/Contact';


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

const App = createBottomTabNavigator(routeConfigs, bottomTabNavigatorConfig);
export default App;



// const App = createStackNavigator({
//   Main: {
//     screen: Main,
//     navigationOptions: {
//       headerTitle: 'Main'
//     },
//   },
//   Authencation: {
//     screen: Authencation,
//     navigationOptions: {
//       headerTitle: 'Authencation'
//     },
//   },
//   ChangeInfo: {
//     screen: ChangeInfo,
//     navigationOptions: {
//       headerTitle: 'ChangeInfo'
//     },
//   },
//   OrderHistory: {
//     screen: OrderHistory,
//     navigationOptions: {
//       headerTitle: 'OrderHistory'
//     },
//   },
// }, {
//     initialRouteName: 'Main',
//     headerMode: 'none',
//   });
// export default App;


