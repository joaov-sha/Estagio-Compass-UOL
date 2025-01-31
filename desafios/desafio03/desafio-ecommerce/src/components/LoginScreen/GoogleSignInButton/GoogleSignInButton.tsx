import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { app } from "../../../firebase/firebaseSetup";
import css from "./GoogleButton.module.css";
import googleLogo from "../../../assets/googleLogo.svg";

const GoogleSignInButton = () => {
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      console.log("Usuário logado com Google: ", result.user);
    } catch (error) {
      console.error("Erro no login com Google: ", error);
    }
  };

  return (
    <button onClick={handleGoogleLogin} className={css.googleButton}>
      <img src={googleLogo} alt="Google Logo" className={css.googleLogo} />
      <p>
        Sign in with Google
      </p>
    </button>
  );
};

export default GoogleSignInButton;
