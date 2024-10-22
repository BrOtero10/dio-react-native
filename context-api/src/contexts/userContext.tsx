import { createContext, useState } from "react"

// Tipagem
interface UserContextProps {
    loginName: string;
    save: (user:string) => void;

}

// Contexto
export const UserContext = createContext<UserContextProps | undefined>(undefined)

// Provider
export function UserContextProvider({ children }: any) {
    const [loginName, setLoginName] = useState<string>("");

    const contextValues : UserContextProps = { 
        loginName: loginName,
        save: saveLoginUserToCache,
    }

    function saveLoginUserToCache(user:string) {
        if(user !== "") setLoginName(user)
    }
    
    return (
        <UserContext.Provider value={contextValues}>
            { children }
        </UserContext.Provider>
    )
}