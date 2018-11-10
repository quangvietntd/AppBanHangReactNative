import { localhost } from '../localhost';

const logIn = (email, password) => (
    fetch(`http://${localhost}/AppBanHangServer/login.php`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
        },
        body: JSON.stringify({ email, password })
    })
    .then(res => res.json())
    .catch(err => console.log(err))
);

export default logIn;
