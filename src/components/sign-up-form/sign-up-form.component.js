import { useState } from "react"
import { createAuthUserWithEmailAndPassword,createUserDocumentFromAuth } from "../../utils/firebase/firebase.util"
import './sign-up-form.styles.scss'
import Button from "../button/button.component"



import FormInput from "../form-input/form-input.component"
const defaultFormFields={
    displayName: '',
    email: '',
    password: '',
    confirmPassword:''
}

const SignUpForm=()=>{
    const [formFields,setFormFields]=useState(defaultFormFields)
    const {displayName,email,password,confirmPassword}=formFields;
   
    const resetFormFields=()=>{
        setFormFields(defaultFormFields)

    }

    const handleSubmit=async(event)=>{
        event.preventDefault();

        if(password != confirmPassword){
            alert("passord does not match")
            return;
        }

        try{
            const {user}=await createAuthUserWithEmailAndPassword(email,password);
        
        await createUserDocumentFromAuth(user,{displayName});
        resetFormFields();

        }catch(error){
            if(error.code==='auth/email-already-in-use'){
                alert('cannot create user,email already in use');
            }else{
                console.log('user encountered error',error)
            }
        }

    }

    const handleChange=(event)=>{
const {name,value}=event.target;
setFormFields({...formFields,[name]:value})
    }


    return (
        <div className="sign-up-container">
            <h2>Don't have an account?</h2>
            <span>Sign Up with your email and password</span>
            <form onSubmit={handleSubmit}>
                <label>Display Name</label>
                <FormInput 
                label='Display Name'
                type='text' 
                required 
                onChange={handleChange}
                 name='displayName' 
                 value={displayName}/>
                
                <label>Email</label>
                <FormInput 
                label='email'
                type='email' 
                 required 
                 onChange={handleChange} 
                 name='Email' 
                 value={email}/>
                <label>Password</label>
                <FormInput 
                label='Password'
                type='password' 
                required 
                onChange={handleChange} 
                name='password' 
                value={password}/>
                <label>Confirm Password</label>
                <FormInput 
                label='ConfirmPassword'
                type='password' 
                required 
                onChange={handleChange} 
                name='confirmPassword' 
                value={confirmPassword}/>
                <Button type='submit'>Sign Up</Button>
            </form>
        </div>
    )
}

export default SignUpForm