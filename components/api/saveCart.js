import { AsyncStorage } from 'react-native';

const saveCart = async (arrCart) => {
    try {
        await AsyncStorage.setItem('@MyCart', JSON.stringify(arrCart));
    } catch (error) {
        console.log('Loi khi luu Cart');
        console.log(error);
    }
};

export default saveCart;
