import { createContext, useContext, useState } from "react";

export const DataContext = createContext(cull);

const DataProvider =({children})=>{
    const [user,setUser]=useState({username:'',email:''})

    return(
        <DataContext.Provider value={{
            user,
            setUser
        }}>{children}</DataContext.Provider>

        
    )
}

export default DataProvider;