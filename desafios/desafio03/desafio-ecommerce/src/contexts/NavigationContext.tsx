import { createContext, useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

interface NavigationContextType{
    goBack: () => void;
}

const NavigationContext = createContext<NavigationContextType | undefined >(undefined);

export function NavigationProvider({ children }: { children : React.ReactNode }) {
    const [history, setHistory] = useState<string[]>([]);
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        setHistory((prevHistory) => {
            if(prevHistory[prevHistory.length -1] !== location.pathname){
                return[...prevHistory, location.pathname];
            }
            return prevHistory;
        });
    }), [location.pathname];

    const goBack = () => {
        if(history.length > 1){
            const newHistory = [...history];
            newHistory.pop();
            const lastPage = newHistory[newHistory.length -1];
            setHistory(newHistory);
            navigate(lastPage);
        }else{
            navigate("/home");
        }
    }

    return(
        <NavigationContext.Provider value={{goBack}}>
            {children}
        </NavigationContext.Provider>
    );
}

export function useNavigation(){
    const context = useContext(NavigationContext);
    if(!context){
        throw new Error("useNavigation must be used within a NavigationProvider");
    }
    return context;
}