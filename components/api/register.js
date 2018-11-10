import { localhost } from '../localhost';

const register = (email, name, password, phone) => (
    fetch(`http://${localhost}/AppBanHangServer/register.php`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
        },
        body: JSON.stringify({ email, name, password, phone })
    })
    .then(res => res.text())
);

export default register;
