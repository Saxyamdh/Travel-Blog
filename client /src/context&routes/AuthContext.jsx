/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useEffect, useReducer } from "react";


let initialState = JSON.parse(localStorage.getItem("authState")) || {
    userEmail: null,
    userName: null
}

const AuthContext = createContext()


export const useAuth = () => useContext(AuthContext)

export const authReducer = (state,action) => {
    switch(action.type){
        case 'LOGIN' :
            return {user: action.payload}
        case 'LOGOUT':
            return { userEmail: null, userName: null}, initialState = {
                userEmail: null,
                userName: null
            }
        default :
        return state
    }

}

// eslint-disable-next-line react/prop-types
export const AuthConTextProvider = ( {children} ) => {
    const [ state,dispatch ] = useReducer(authReducer,initialState)


    useEffect(() => {
        localStorage.setItem(JSON.stringify(state))
    },[state])


    return <AuthContext.Provider value={{...state,dispatch}}>
        {children}
    </AuthContext.Provider>

}



