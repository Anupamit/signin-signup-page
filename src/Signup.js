import React, { useState } from 'react'
import './Signup.css'

function Signup() {
    const [username,setUsername]=useState('')
    const [password,setPassword]=useState('')
    const [repassword,setRepassword]=useState('')

    const backToLogin=()=>{
        window.location.href = '/signin'
        console.log('you click for SignIn form');
    }
    const emailAdd=(event)=>{
        console.log(event.target.value);
        setUsername(event.target.value)
    }
    const passWord=(event)=>{
        console.log(event.target.value)
        let pass=event.target.value
        setPassword(pass)
    }
    const rePassword=(event)=>{
        console.log(event.target.value);
        setRepassword(event.target.value);
    }
    const submit=()=>{
        if (username === '') {
            alert('Please fill the username')
        }else if (password === '') {
            alert('Please fill the password')
        }else if (repassword === '') {
            alert('Please fill the Re-password')
        }
        console.log(username,password,repassword);
        // let user = await firebase.auth().createUserWithEmailAndPassword(username,password)
        // await firebase.firestore().collection('users').doc(uid).set({username, password, repassword})
        // console.log('signup done', user);
    }
    const goToSignIn=()=>{
        window.location.href = '/signin'
        console.log('you click for Signin Page');
    }
    return (
        <div>
            <div className='navbar'>
                <header className='header1'>
                    <h1>The Presidents School</h1>
                    <button className='buttonnav' onClick={backToLogin}>Back login</button>
                </header>
            </div>
            <div className='form'>
            <header className='header'>
                <h1>SignUp Form</h1>
            </header>
            <div className='container'>
                <label><b>Email Address</b></label>
                <input placeholder='Enter email' type='email' value={username} onChange={emailAdd} />
                <label><b>Password</b></label>
                <input placeholder='Password' type='password' value={password} onChange={passWord} />
                <label><b>Confirm Password</b></label>
                <input placeholder='Confirm Password' type='password' value={repassword} onChange={rePassword} />
                <button className='button1' onClick={submit}>Signup</button>
            </div>
            <div className='lowerpart'>
                <span>Already have an account? </span>
                <span><button className='frgbtn' onClick={goToSignIn}>Login Here</button></span>
            </div>
        </div>
        </div>
        
    )
}

export default Signup