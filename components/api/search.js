import { localhost } from '../localhost';

const search = (key) => (
    fetch(`http://${localhost}/AppBanHangServer/search.php?key=${key}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
        }
    })
        .then(res => res.json())
        .catch(() => console.log('No data'))
);

export default search;
