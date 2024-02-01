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
    });
    const [verificationCode,setVerificationCode] = useState("")
    const [currentStep,setCurrentStep] = useState(1);
    const login = useNavigate()
    const {Register,Verification,error} = Auth()


    const handleChange = (e) => {
        setInput((prev) => ({...prev,[e.target.name]:e.target.value})) ;
    }

    const handleRadioChange = (e) => {
        setInput((prev) => ({ ...prev, gender: e.target.value }));
      };


    const handleSubmit = async () => {
      try{
        await Register(input, error);
        setCurrentStep(currentStep+1);
      
    }catch(error){
    alert(error.response.data.errorMessage) 
    }     
    }


    const handleVerification = async () => {
        try{
            await Verification(verificationCode, error);
            setCurrentStep(currentStep+1);
          
        }catch(error){
        alert(error.response.data.errorMessage) 
        } 
    }


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
                    value="Male"
                    checked={input.gender === "Male"}
                    onChange={handleRadioChange}
                    />
                    Male
                    </label>
                    <label>
                    <input
                    type="radio"
                    name="gender"
                    value="Female"
                    checked={input.gender === "Female"}
                    onChange={handleRadioChange}
                    />
                    Female
                    </label>
                    <label>
                    <input
                    type="radio"
                    name="gender"
                    value="Others"
                    checked={input.gender === "Others"}
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
                <button onClick={handleSubmit} >Next</button>
                </div>
            </div>
            case 3:
                return <div className='Register-form'>
                <h2>Email sent at {input.email}</h2>
                <input 
                type="text" 
                placeholder='   #####'
                name='verificationCode'
                value={verificationCode}
                onChange={(e) => setVerificationCode(e.target.value)}
                className='bar'
                />
                <div className='buttons'>
                <button onClick={() => setCurrentStep(currentStep-1)}>Previous</button>
                <button onClick={handleVerification}>Submit</button>
                </div>
            </div>

            case 4 :    
            return <div className='Register-form'>
                <button onClick={() => login('/')}>Skip</button>
            </div>
        }
            
    }   




    return <div className='Login-page'>
         <div className='Image'>
            <img src={img} alt="image-login" className="loginimage" onClick={() => login("/")}/>
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