import { localhost } from '../localhost';

const getProductByType = (typeId, page) => (
    fetch(`http://${localhost}/AppBanHangServer/product_by_type.php?id_type=${typeId}&page=${page}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
        },
    })
        .then(res => res.json())
        .catch(err => console.log(err))
);

export default getProductByType;
