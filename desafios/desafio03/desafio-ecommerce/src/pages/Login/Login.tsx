import AppTitle from "../../components/LoginScreen/AppTitle/AppTitle"
import LoginForm from "../../components/LoginScreen/LoginForm/LoginForm"

import './LoginPage.module.css';

function Login(){
    return(
        <div>
            <AppTitle></AppTitle>
            <LoginForm></LoginForm>
        </div>
    )
}

export default Login