import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from "../../../firebase/firebaseSetup";

function GoogleSignInButton(){

    const auth = getAuth(app);
    const provider = new GoogleAuthProvider;

    const handleGoogleSignIn = async () => {
        try{
            const result = await signInWithPopup(auth, provider);
            const user = result.user;
            console.log("Usuário logado: " , user);
        }catch(error){
            console.error("Erro no login com Google: ", error);
        }
    };

    return (
        <button onClick={handleGoogleSignIn} className="flex items-center px-4 py-2 bg-white border rounded-lg shadow hover:shadow-md">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png" alt="Google Logo" className="w-5 h-5 mr-2" />
            Sign in with Google
        </button>
    );
}

export default GoogleSignInButton;