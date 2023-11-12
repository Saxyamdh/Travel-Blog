/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Icon } from '@iconify/react';
import { Auth } from "../../hooks/AuthHooks";
import img from "../../assets/images/login.svg"

export const Login = (props) => {
  const [isOn, setIsOn] = useState(true);
  const { Login } = Auth()
  const [input, setInput] = useState({
    email: "",
    password: ""
  })
  const [register,setRegister] = useState(false)
  const formRef = useRef(null)

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (formRef.current && !formRef.current.contains(e.target)) {
        handleAuth();
      }
    };
  
    let timeoutId;
  
    timeoutId = setTimeout(() => {
      document.addEventListener("click", handleClickOutside);
    }, 1000);
    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId); 
      }
      document.removeEventListener("click", handleClickOutside);
    };
  }, []); 
  
  const handleChange = (e) => {
    setInput((prev) => ({...prev, [e.target.name]: e.target.value}))
  }

  const handleAuth = () => {
    setIsOn(false);
    props.recievedState(isOn)
  };

  const handleSubmit = async (e) => {
      e.preventDefault()
      // alert("Form Submitted")
      await Login(input)
      props.recievedState(false)
  }

  return (
    <div className="background">
      <motion.div 
      initial={{opacity:0}}
      animate={{opacity:1}}
      transition={{delay:0.4}}
      exit={{opacity:0, transition:{delay:0.2}}}
      className="Login-Form"
      ref={formRef}>
        <Icon icon="ph:x-bold" onClick={handleAuth} className="closeLogin" />
            <form className="LoginForm" onSubmit={handleSubmit}>
            <span className="Registerid">Don&apos;t have an account? SignUp</span>
              <label className="emailBarLogin">
                Email:
                <input 
                type="email" 
                placeholder="email@gmail.com"
                name="email"
                value={input.name}
                onChange={handleChange}
                className="bar"
                />
              </label>
              <label className="emailBarLogin">
              Password:
              <input 
              type="text" 
              name="password"
              onChange={handleChange}
              placeholder="Password"
              className="bar"
              />
              </label>
              <button id="loginButton" type="sumbit">Login</button>
              Login With google<br />
              Login with Facebook
            </form>
            <img src={img} alt="image-login" className="loginimage"/>
      </motion.div>
    </div>
  );
};
