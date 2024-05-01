import { ReactNode, createContext, useContext, useState } from "react";

// Define the type for AuthContext
type AuthContextType = {
    authUser: any; // Change `any` to the type of your authUser if it's known
    setAuthUser: React.Dispatch<React.SetStateAction<any>>; // Change `any` accordingly
};

const AuthContext = createContext<AuthContextType | null>(null);

// Define the context provider component
interface AuthContextProviderProps {
    children: ReactNode;
}
const AuthContextProvider: React.FC<AuthContextProviderProps> = ({ children }) => {

    const [authUser, setAuthUser] = useState(() => {
        const storedAuthUser = localStorage.getItem("chat-app");
        if (storedAuthUser) {
          return JSON.parse(storedAuthUser);
        }
        return null;
      });
      
    return (
        <AuthContext.Provider value={{ authUser, setAuthUser }}>
            {children}
        </AuthContext.Provider>
    );
};

const useAuthContext = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuthContext must be used within an AuthContextProvider");
    }
    return context;
};

export { useAuthContext, AuthContextProvider };
