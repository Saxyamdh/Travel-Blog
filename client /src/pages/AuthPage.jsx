/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Icon } from '@iconify/react';
import { Auth } from "../hooks/AuthHooks";
import { useNavigate } from "react-router-dom";
import img from "../assets/images/login.svg"
import "../assets/css/Login.scss"

export const Login = () => {
    const [input,setInput] =useState({
        email : "",
        password: ""
    })
    const register = useNavigate()
    const { Login,error } = Auth()

    const handleChange = (e) => {
        setInput((prev) => ({...prev, [e.target.name]:e.target.value}))
    }

    const handleSubmit = async (e) => {
        try{
        e.preventDefault()
        await Login(input,error);
        register('/')
        }catch(error){
            alert(error.response.data.errorMessage)
        }
    }

    return <div className="Login-Page">
        <div className="form">
               <form className="Login-Form" onSubmit={handleSubmit}>
                        <label htmlFor="email-label">
                        {/* Email: */}
                        <input 
                        type="email" 
                        placeholder="email@gmail.com"
                        name="email"
                        value={input.name}
                        onChange={handleChange}
                        className="bar"
                        />
                        </label>
                        <label htmlFor="email-label">
                        {/* Password: */}
                        <input 
                        type="password" 
                        placeholder="password"
                        name="password"
                        value={input.name}
                        onChange={handleChange}
                        className="bar"
                        />
                        </label>
                        <button type="submit" className="login-button" >LOG IN</button>
               </form>
               <p>Don&apos;t have an Account? <u onClick={() => register("/auth/register")}>Create One</u></p>
        </div>
        <div className="Image">
        <img src={img} alt="image-login" className="loginimage" onClick={() => register('/')}/>
        </div>
    </div>
}