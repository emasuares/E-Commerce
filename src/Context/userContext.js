import { createContext,useState } from "react";

export const UserContext =createContext()

 
export const UserContextProvider =({children})=>{
    const [user,setUser]=useState(null)

    const LogIn =()=>{

    }

    const LogOut =()=>{


    }

    const SignUp =()=>{



    }
    return (
        <UserContext.Provider value={{user,LogIn,LogOut,SignUp}}>
            {children}
        </UserContext.Provider>

    )


}

