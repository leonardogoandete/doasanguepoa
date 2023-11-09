import { history } from '../../history'

const Logout = () => {  
        localStorage.setItem('u', {"token":null});
        history.push('/');
        window.location.reload();
    }

export default Logout