import { localhost } from '../localhost';

const checkLogin = (token) => (
    fetch(`http://${localhost}/AppBanHangServer/check_login.php`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
        },
        body: JSON.stringify({ token })
    })
    .then(res => res.json())
    .catch(() => 'TOKEN_KHONG_HOP_LE')
);

export default checkLogin;
