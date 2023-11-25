import { history } from '../../history'

const Logout = () => {
        localStorage.removeItem('u');
        history.push('/');
        window.location.reload();
    }

export default Logout