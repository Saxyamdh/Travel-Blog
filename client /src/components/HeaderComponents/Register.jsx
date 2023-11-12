import { useState } from "react"
import { Auth } from "../../hooks/AuthHooks"
import '../assets/css/login.css'
import { Icon } from '@iconify/react';


export const Register  = (props) => {
    const { error,Register } = Auth()

    const [input,setInput] = useState(
       { FirstName :"",
        LastName : "",
        userName : "",
        email : "",
        password : ""}
    )


    const handleChange (e) => {
        setInput((prev) => ({...prev,[e.target.name]:e.target.value}))
    }

    // const handleAuthToggle = () => {
    //     setIsOn(!isOn);
    //     props.recievedState(isOn)
    //   };

    const handleSubmit = async (e) =>{
        e.preventDefault()
        await Register(input)
        props.recievedstate(isOn)
    }

      return (
            <form className="RegisterForm" >
                <label className="Bars">
                    <label className="NameBars">
                        First Name 
                        <input 
                        type="text" 
                        name="FirstName"
                        onChange={handleChange}
                        value={input.name}
                        />
                    </label>
                    <label className="NameBars">
                        <input 
                        type="text" 
                        name="LastName"
                        onChange={handleChange}
                        value={input.name}
                        />
                    </label>
                </label>
                <label className="Bars">
                    <input 
                    type="email" 
                    name="email"
                    onChange={handleChange}
                    value={input.name}
                    />
                </label>
                <label className="Bars">
                    <input 
                    type="text" 
                    onChange={handleChange}
                    name="UserName"
                    value={input.name}
                    />
                </label>
                <label className="Bars">
                    <input type="password" name="password" onChange={handleChange} value={input.name}/>
                </label>
                <button id="loginButton" type="sumbit">Register</button>
            </form>
      )
}