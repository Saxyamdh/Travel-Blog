/* eslint-disable no-unused-vars */
import { useContext, useState } from "react"
import { useAuth } from "../context&routes/AuthContext"
import axios from 'axios'


export const Auth = () => {
    const [error,setError] = useState(null)
    // const { dispatch } = useContext(useAuth)

    const Login = async (input) => {
        setError(null)

        try {
            const response = await axios.post("http://127.0.0.1:3000/login", {
                email:input.email,
                password:input.password
            })
            console.log(response)
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
        }catch (error){
            console.log(error)
            setError(error)
        }
    }

    return {error,Login}

}