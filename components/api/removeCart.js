import { AsyncStorage } from 'react-native';

const removeCart = async () => {
    try {
        await AsyncStorage.removeItem('@MyCart');
    } catch (error) {
        console.log('Loi khi xoa Cart');
        console.log(error);
    }
};

export default removeCart;
