import { createStackNavigator } from 'react-navigation';
import HomeView from './HomeView';
import ProductDetails from './ProductDetails';
import ListProducts from './ListProducts';
import ListProductsInCollection from './ListProductsInCollection';

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
  ListProductsInCollection: {
    screen: ListProductsInCollection,
  },
};
const stackNavigatorConfig = {
  initialRouteName: 'HomeView',
  headerMode: 'none',
};
const Home = createStackNavigator(stackRouteConfigs, stackNavigatorConfig);
export default Home;
