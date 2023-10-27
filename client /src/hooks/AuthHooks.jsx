/* eslint-disable no-unused-vars */
import { useContext, useState } from "react"
import { AuthContext } from "../context&routes/AuthContext"
import axios from 'axios'
import { json } from "react-router-dom"



export const Auth = () => {
    const [error,setError] = useState(null)
    const { dispatch } = useContext(AuthContext)

    const Login = async (input) => {
        setError(null)

        try {
            const response = await axios.post("http://127.0.0.1:3000/login", {
                email:input.email,
                password:input.password
            })
            if(response.status === 200){
                const {data} =response
                dispatch({type: "LOGIN", payload:data})
            }
            
        }catch (error){
            console.log("Error",error)
            setError(error)
        }
        
    }

    const Register = async (input) =>{
        setError(null)

        try{
            const response = await axios.post("http://127.0.0.1:3000/register",{
                FirstName:input.FirstName,
                LastName:input.LastName,
                email:input.email,
                userName:input.userName,
                password:input.password
            })
            if(response.status === 200){
                const {data} =response
                dispatch({type: "LOGIN", payload:data})
            }
        }catch (error){
            console.log(error)
            setError(error)
        }
    }



    const LogOut = async () => {
        dispatch({type: "LOGOUT"})
    }

    return {error,Login,LogOut}

}