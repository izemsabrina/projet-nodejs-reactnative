import { createContext,useState,useEffect} from "react" 
export const ProfilContext = createContext() ; 

export function ProfilContextProvider (props){ 
    const[jwt,setJWT]=useState("")

    return <ProfilContext.Provider value={{jwt,setJWT}}>
        {props.children}
    </ProfilContext.Provider>

}


