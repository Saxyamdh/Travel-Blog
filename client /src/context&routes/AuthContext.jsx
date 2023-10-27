/* eslint-disable react-refresh/only-export-components */
import { createContext,  useEffect, useReducer } from "react";


let initialState = JSON.parse(localStorage.getItem("authState")) || {
    UserName: null,
    token: null
}

export const AuthContext = createContext(initialState)




export const authReducer = (state,action) => {
    switch(action.type){
        case 'LOGIN' :
            return  action.payload
        case 'LOGOUT':
            return  initialState = {
                userName: null,
                token:null
            }
        default :
        return state
    }

}


// eslint-disable-next-line react/prop-types
export const AuthConTextProvider = ( {children} ) => {
    const [ state,dispatch ] = useReducer(authReducer,initialState)
    // const {user} =state
    // const userName = user.UserName
    console.log("Auth COntext: ",state)


    useEffect(() => {
        localStorage.setItem("authState",JSON.stringify(state))
    },[state])


    return <AuthContext.Provider value={{...state,dispatch}}>
        {children}
    </AuthContext.Provider>

}



