import React, { useState } from "react";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "../../../firebase/firebaseSetup";
import GoogleSignInButton from '../GoogleSignInButton/GoogleSignInButton';
import css from './Form.module.css';
import FeatherIcon from 'feather-icons-react';

function LoginForm(){

    const autenticacao = () => {
        const[email, setEmail] = useState("");
        const[password, setPassword] = useState("");
        const[isRegistering, setIsRegistering] = useState("false");

        const auth = getAuth(app);

        const handleSubmit = async (e) => {
            e.preventDefault();
            try{
                if(isRegistering){
                    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
                    console.log("Usuário cadastrado com sucesso: ", userCredential.user);
                }else{
                    const userCredential = await signInWithEmailAndPassword(auth, email, password);
                    console.log("Usuário logou com sucesso: ", userCredential.user);
                }
            }catch (error){
                console.error("Erro na autenticação: ", error);
            }
        }
    }

    return(
        <form onSubmit={handleSubmit}>
            <fieldset className={css.fieldset}>
                <div>
                    <FeatherIcon icon="mail" className={css.icon}/>
                    <input type="email" name="" id="" placeholder="Email"/>
                </div>
                <div>
                    <FeatherIcon icon="lock" className={css.icon}/>
                    <input type="password" name="" id="" placeholder="Password"/>
                </div>
                <a href="">Forgot Password</a>
            </fieldset>
            <fieldset>
                <button type="submit">Sign In</button>
                <GoogleSignInButton></GoogleSignInButton>
            </fieldset>
        </form>
    )
}

export default LoginForm