import AppTitle from "../../components/LoginScreen/AppTitle/AppTitle"
import LoginForm from "../../components/LoginScreen/LoginForm/LoginForm"
import css from './SignUpPage.module.css';

function SignUp(){
    return(
        <div className={css.body}>
            <AppTitle></AppTitle>
            <LoginForm></LoginForm>
        </div>
    )
}

export default SignUp