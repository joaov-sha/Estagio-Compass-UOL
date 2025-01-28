import css from './Form.module.css';
function LoginForm(){
    return(
        <>
            <form className={css.form}>
                <fieldset>
                    <input type="email" name="" id="" placeholder='Email'/>
                    <input type="password" name="" id="" placeholder='Password'/>
                    <a href="">Forgot password?</a>
                </fieldset>
                <fieldset>
                    <button>Sign In</button>
                    <button>Google Button Placeholder</button>
                </fieldset>
            </form>
        </>
    )
}
export default LoginForm