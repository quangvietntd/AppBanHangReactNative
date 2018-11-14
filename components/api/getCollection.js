import { localhost } from '../localhost';

const getCollection = (page) => (
    fetch(`http://${localhost}/AppBanHangServer/get_collection.php?page=${page}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
        },
    })
        .then(res => res.json())
        .catch(() => [])
);
export default getCollection;
