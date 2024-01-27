/* eslint-disable no-unused-vars */
import { useState } from 'react'
import { Progress } from './Progress';
import img from '../../assets/images/login.svg'
import '../../assets/css/Register.scss'
import { useNavigate } from 'react-router-dom';
import { Auth } from '../../hooks/AuthHooks';
export const Register = () => {
    const [input,setInput] = useState({
        firstName:"",
        lastName: "" ,
        age: "",
        gender: "",
        userName: "",
        email: "" ,
        password: "",
        verificationCode: "",
    });
    const [currentStep,setCurrentStep] = useState(1);
    const login = useNavigate()
    console.log(input.gender)
    const {error,Register,Verification} = Auth()
    const handleChange = (e) => {
        setInput((prev) => ({...prev,[e.target.name]:e.target.value})) ;
    }

    const handleRadioChange = (e) => {
        setInput((prev) => ({ ...prev, gender: e.target.value }));
      };

    const renderStepContent = () => {
        switch(currentStep){
            case 1:
                return <div className='Register-form'>
                    <input 
                    type="text" 
                    placeholder='First Name'
                    name='firstName'
                    value={input.firstName}
                    onChange={handleChange}
                    className='bar'
                    />
                    <input 
                    type="text" 
                    placeholder='Last Name'
                    name='lastName'
                    value={input.lastName}
                    onChange={handleChange}
                    className='bar'
                    />
                    <div className='Gender'>
                    <input 
                    type="text" 
                    placeholder='age'
                    name='age'
                    value={input.age}
                    onChange={handleChange}
                    className='bar'
                    />
                    <label>
                    Gender:
                    </label>
                    <label>
                     <input
                     type="radio"
                    name="gender"
                    value="male"
                    checked={input.gender === "male"}
                    onChange={handleRadioChange}
                    />
                    Male
                    </label>
                    <label>
                    <input
                    type="radio"
                    name="gender"
                    value="female"
                    checked={input.gender === "female"}
                    onChange={handleRadioChange}
                    />
                    Female
                    </label>
                    <label>
                    <input
                    type="radio"
                    name="gender"
                    value="others"
                    checked={input.gender === "others"}
                    onChange={handleRadioChange}
                    />
                    Others
                    </label>
                    </div>
                    <button onClick={() => setCurrentStep(currentStep+1)}>Next</button>
        
            </div>
            case 2:
                return <div className='Register-form'>
                <input 
                type="text" 
                placeholder='userName'
                name='userName'
                value={input.userName}
                onChange={handleChange}
                className='bar'
                />
                 <input 
                type="email" 
                placeholder='email@gmail.com'
                name='email'
                value={input.email}
                onChange={handleChange}
                className='bar'
                />
                 <input 
                type="password" 
                placeholder='Password'
                name='password'
                value={input.password}
                onChange={handleChange}
                className='bar'
                />
                <div className='buttons'>
                <button onClick={() => setCurrentStep(currentStep-1)}>Previous</button>
                <button onClick={() => setCurrentStep(currentStep+1)}>Next</button>
                </div>
            </div>
            case 3:
                return <div className='Register-form'>
                <h2>Email sent at {input.email}</h2>
                <input 
                type="text" 
                placeholder='   #####'
                name='verificationCode'
                value={input.verificationCode}
                onChange={handleChange}
                className='bar'
                />
                <div className='buttons'>
                <button onClick={() => setCurrentStep(currentStep-1)}>Previous</button>
                <button onClick={() => setCurrentStep(currentStep+1)}>Submit</button>
                </div>
            </div>
        }
    }

    return <div className='Login-page'>
         <div className='Image'>
            <img src={img} alt="image-login" className="loginimage"/>
           </div>
           <div className='form'>
           <h1>Create Your Account</h1>
           <Progress count={currentStep}/>
           {renderStepContent()}
           <p>Already have an Account? <u onClick={() => login("/auth/login")}>Sign In</u></p>
           </div>

        </div>
    ;
}