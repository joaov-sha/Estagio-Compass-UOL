import AppTitle from "../components/appTitle/AppTitle";
import CallToAction from "../components/callToAction/CallToAction";
import LoginForm from "../components/loginForm/LoginForm";
import css from './Login.module.css';

function Login() {
    const isLoginPage = true; // Controle para trocar entre login e cadastro

    return (
        <div className={css.body}>
            <AppTitle />
            <LoginForm />
            <CallToAction
                address={isLoginPage ? "/signup" : "/signin"}
                text={isLoginPage ? "Don't have an account?" : "Already have an account?"}
                linkText={isLoginPage ? "Sign Up" : "Sign In"}
            />
        </div>
    );
}

export default Login;
