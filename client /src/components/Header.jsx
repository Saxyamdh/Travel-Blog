import { useContext, useState } from "react";
import { Login } from "./HeaderComponents/Login";
import { motion,AnimatePresence } from "framer-motion";
import { Auth } from "../hooks/AuthHooks";
import '../assets/css/Header.scss'
import Logo from '../assets/images/Logo.png'
import { Icon } from '@iconify/react';
import { AuthContext } from "../context&routes/AuthContext";
import { useNavigate } from "react-router-dom";




export const Header = () => {
const [state, setState] = useState(false);
const [showProfile,setShowProfile] = useState(false)
const context = useContext(AuthContext)
const navigate = useNavigate()
const authRoute = useNavigate()
  const { LogOut } = Auth()

  const handleAuth = () => {
    setState(!state);
  };
  
  return (
    <div className="Header">
    <img src={Logo} alt="travLog-logo" onClick={() => navigate('/')}/>
    <div className="center">
        <h1 onClick={() => navigate('/')}>Home</h1>
        <h1>Stories</h1>
        <h1 onClick={() => navigate('/blogs')}>Blogs</h1>
        <h1> Travellers </h1>
    </div>
    <Icon id="Profile-button" icon="gg:profile" onClick={() => setShowProfile(!showProfile)}/> 
      <AnimatePresence>
      {showProfile && (
          <motion.div 
          initial={{y:-50, opacity:0.05}}
          animate={{y:0, opacity:1}}
          transition={{delay:0.2, ease: 'easeInOut'}}
          exit={{y:-20, opacity:0.2, transition:{delay:0.2, ease:'easeInOut'}}}
          className={`profile-dropdown ${showProfile ? 'clicked' : ''}`}>
              <button>Profile</button>
              {context.token !== null ? (
              <button onClick={() => LogOut()}>Sign Out</button>
              ):
              (
                <button onClick={() => authRoute("/auth/login")}>Sign In</button>
              )
              }
          </motion.div>
        )}
      {state && <Login recievedState={handleAuth} />}
      </AnimatePresence>
    </div>
  );
};