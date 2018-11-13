import { localhost } from '../localhost';

const checkout = (token, arrayDetail) => (
    fetch(`http://${localhost}/AppBanHangServer/cart.php`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
        },
        body: JSON.stringify({ token, arrayDetail })
    })
        .then(res => res.text())
        .catch(err => console.log(err))
);

export default checkout;
