import { createContext, useContext, useEffect, useState } from "react";
import { getAuth, onAuthStateChanged, User } from "firebase/auth";
import { app } from "../firebase/firebaseSetup";

interface AuthContextType{
    user: User | null;
    loading: boolean;
}

const AuthContext = createContext<AuthContextType>({user: null, loading: true});

export const AuthProvider = ({children}: {children: React.ReactNode}) => {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);
    const auth = getAuth(app);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        });

        return () => unsubscribe();
    }, [auth]);

    return <AuthContext.Provider value = {{user, loading}}>{children}</AuthContext.Provider>
};

export const useAuth = () => useContext(AuthContext);