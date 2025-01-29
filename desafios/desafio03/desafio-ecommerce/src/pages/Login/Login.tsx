import AppTitle from "../../components/LoginScreen/AppTitle/AppTitle"
import CallToAction from "../../components/LoginScreen/CallToAction/CallToAction"
import LoginForm from "../../components/LoginScreen/LoginForm/LoginForm"

import css from './LoginPage.module.css';

function Login(){
    return(
        <div className={css.body}>
            <AppTitle></AppTitle>
            <LoginForm></LoginForm>
            <CallToAction></CallToAction>
        </div>
    )
}

export default Login