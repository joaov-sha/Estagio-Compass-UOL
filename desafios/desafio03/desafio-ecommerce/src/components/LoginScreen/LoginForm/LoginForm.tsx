import FeatherIcon from 'feather-icons-react';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { FormEvent, useState } from "react";
import { app } from "../../../firebase/firebaseSetup";
import CallToAction from "../CallToAction/CallToAction";
import css from './Form.module.css';
import GoogleSignInButton from '../GoogleSignInButton/GoogleSignInButton';
import { useNavigate, Link } from 'react-router-dom';

function LoginForm() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isRegistering, setIsRegistering] = useState<boolean>(false);

  const auth = getAuth(app);
  const navigate = useNavigate();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      if (isRegistering) {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        console.log("Usuário cadastrado: ", userCredential.user);
        navigate("/login");
      } else {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        console.log("Usuário logou com sucesso: ", userCredential.user);
        navigate("/home");
      }
    } catch (error) {
      console.error("Erro na autenticação: ", error);
    }
  };
  
    return (
      <form onSubmit={handleSubmit} className={css.form}>
        <fieldset className={css.fieldset}>
          <div className={css.inputGroup}>
            <FeatherIcon icon="mail" className={css.icon} />
            <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className={css.input} required />
          </div>
          <div className={css.inputGroup}>
            <FeatherIcon icon="lock" className={css.icon} />
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className={css.input} required />
          </div>
          <Link to="#"> Forgot password? </Link>
        </fieldset>
        <fieldset>    
          <button type="submit" className={css.submitButton}>
            {isRegistering ? "Sign Up" : "Sign In"}
          </button>
          <GoogleSignInButton/>
        </fieldset>
        <CallToAction isRegistering={isRegistering} setIsRegistering={setIsRegistering} />
      </form>
    );
  }

  export default LoginForm;
