"use client"
import {  createContext, useEffect, useState } from "react";
export const ThemContext = createContext(null)
const ContextProvider = ({children})=>{
    const [Light, setLight] = useState("dark");
    // useEffect(()=>{
    //     localStorage.setItem("light",Light)
    // },[Light])
    return(
        <ThemContext.Provider value={{Light, setLight}}>
            {children}
        </ThemContext.Provider>
    )
}
export default ContextProvider