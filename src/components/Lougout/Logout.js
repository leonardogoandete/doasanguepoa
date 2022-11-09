import { history } from '../../history'

const Logout = () => {  
        localStorage.setItem('u', {"token":null})
        history.push('/') 
    }

export default Logout