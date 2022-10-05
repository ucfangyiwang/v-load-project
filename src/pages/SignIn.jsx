import{useState} from 'react'
import React from 'react';
import {Link} from 'react-router-dom';

function SignIn(){
  
    const [formData,steformData]=useState({
        email:'',
        password:'',
    })
    const{email,password}=formData
    const onChange =(e) =>{
        steformData((prevState)=>({
            ...prevState,
            [e.target.id]:e.target.value,
        }))
    }
    return(
        <div>
           <header className='flex justify-center align-center text-3xl pt-36'>
            <p className='pageheader'>welcome back!</p>
           </header>
         <div className='py-16  flex justify-center align-center'>
           <form className='w-72 '>
           <input type="email" className='emilInput input input-bordered w-full max-w-xs' placeholder='e-mail' id='email' value={email} onChange={onChange}/>
          <div className='passwordInputDiv'>
            <input type='password'className="passwordInput input input-bordered w-full max-w-xs"  placeholder='Password' id='password' value={password}
            onChange={onChange}/>
          </div>
          <div className='pl-2 pt-4'>
          <Link to ='/forgetpassword' >
            forget your password
          </Link>
          </div>
          <div className='pl-2 py-4'>
          <Link to ='/signup' >
           Sign up
          </Link>
          </div>
          <button className='signinbar btn gap-2'>
                 Sign in
          </button>
           </form>
           </div>
        </div>
       
    )
    }
    export default SignIn