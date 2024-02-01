/* eslint-disable react/prop-types */
import { useContext, useEffect } from "react"
import { AuthContext} from "./AuthContext"
import {  useNavigate } from "react-router-dom"



export const PrivateRoutes = ( {children} ) => {
    const  state  = useContext(AuthContext)
    const navigate = useNavigate()


    useEffect(() => {
        if (state.token === null) {
            navigate('/')
            alert('Please login to access the route')
        }
        if (state.token !== null){
            navigate('/')
        }
    }, [state.token, navigate])

    return <> { children } </>
}