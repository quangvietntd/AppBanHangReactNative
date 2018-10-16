/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import { createStackNavigator } from 'react-navigation';
import Authencation from './components/Authencation';
import ChangeInfo from './components/ChangeInfo';
import Main from './components/Main';
import OrderHistory from './components/OrderHistory';


const App = createStackNavigator({
  Main: {
    screen: Main,
    navigationOptions: {
      headerTitle: 'Main'
    },
  },
  Authencation: {
    screen: Authencation,
    navigationOptions: {
      headerTitle: 'Authencation'
    },
  },
  ChangeInfo: {
    screen: ChangeInfo,
    navigationOptions: {
      headerTitle: 'ChangeInfo'
    },
  },
  OrderHistory: {
    screen: OrderHistory,
    navigationOptions: {
      headerTitle: 'OrderHistory'
    },
  },
}, {
  initialRouteName: 'Main'
});
export default App;

