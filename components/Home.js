import { createStackNavigator } from 'react-navigation';
import HomeView from './HomeView';
import ProductDetails from './ProductDetails';
import ListProducts from './ListProducts';

const stackRouteConfigs = {
  ProductDetails: {
    screen: ProductDetails,
  },
  HomeView: {
    screen: HomeView,
  },
  ListProducts: {
    screen: ListProducts,
  },
};
const stackNavigatorConfig = {
  initialRouteName: 'HomeView',
  headerMode: 'none',
};
const Home = createStackNavigator(stackRouteConfigs, stackNavigatorConfig);
export default Home;
