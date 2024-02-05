/* eslint-disable no-unused-vars */
import { useContext, useState } from "react"
import { AuthContext } from "../context&routes/AuthContext"
import axios from 'axios'
import { json, useNavigate } from "react-router-dom"



export const Auth = () => {
    const { dispatch } = useContext(AuthContext)
    const navigate = useNavigate()
    const [error,setError] = useState(null)
    const Login = async (input,error ={}) => {
            const response = await axios.post("http://127.0.0.1:3000/auth/login", {
                email:input.email,
                password:input.password
            })
            if(response.status === 200){
                const {data} =response
                dispatch({type: "LOGIN", payload:data})
            }
            
    }

    const Register = async (input, error = {}) =>{
            //when doing it in cloud put the dotconfig in the url
            const response = await axios.post("http://127.0.0.1:3000/auth/register",{
                firstName:input.firstName,
                lastName:input.lastName,
                age:input.age,
                gender: input.gender,
                userName:input.userName,
                email:input.email,
                password:input.password
            })
            if(response.status === 200){
                const {data} =response
            }
        }
    const Verification = async (input,error = {}) => {
        try{
            const response =  await axios.post("http://127.0.0.1:3000/auth/register/verify",{
                VerificationCode : input
            })
            if(response.status === 200){
                const {data} = response
                dispatch({type: "LOGIN", payload:data})
            }
        }catch(error){
            console.log("Verification Error",error)
        }
    }


    const LogOut = async () => {
        dispatch({type: "LOGOUT"})
    }

    return {Login,LogOut,Register,Verification}

}