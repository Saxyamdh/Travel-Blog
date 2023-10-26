/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import { useState } from "react";
import '../assets/css/login.css'
import { Icon } from '@iconify/react';
import { Auth } from "../hooks/AuthHooks";

export const Login = (props) => {
  const [isOn, setIsOn] = useState(true);
  const { error,Login } = Auth()
  const [input, setInput] = useState({
    email: "",
    password: ""
  })

  const handleChange = (e) => {
    setInput((prev) => ({...prev, [e.target.name]: e.target.value}))
  }

  const handleAuthToggle = () => {
    setIsOn(!isOn);
    props.recievedState(isOn)
  };

  const handleSubmit = async (e) => {
      e.preventDefault()
      // alert("Form Submitted")
      await Login(input)
      // props.recievedState(false)
  }

  return (
    <div className="background">
      <motion.div 
      initial={{opacity:0}}
      animate={{opacity:1}}
      transition={{delay:0.4}}
      exit={{opacity:0, transition:{delay:0.2}}}
      className="Login-Form">

        <Icon icon="ph:x-bold" onClick={handleAuthToggle} className="closeLogin" />
            <form className="LoginForm" onSubmit={handleSubmit}>
              <label className="emailBarLogin">
                Email
                <input 
                type="email" 
                placeholder="email@gmail.com"
                name="email"
                value={input.name}
                onChange={handleChange}
                />
              </label>
              <label className="emailBarLogin">
              Password
              <input 
              type="text" 
              name="password"
              onChange={handleChange}
              placeholder="Password"
              />
              </label>
              <button id="loginButton" type="sumbit">Login</button>
            </form>
            Login With google
      </motion.div>
    </div>
  );
};
