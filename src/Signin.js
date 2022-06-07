import React, { useState } from 'react'
import './Signin.css'

function Signin () {
    const [username,setUsername]=useState('')
    const [password,setPassword]=useState('')

    const backHome=()=>{
        window.location.href = '/'
        console.log('you click for Home');
    }
    const userName=(event)=>{
        console.log(event.target.value);
        setUsername(event.target.value)
    }
    const passWord=(event)=>{
        console.log(event.target.value);
        setPassword(event.target.value)
    }
    const submit=()=>{
        if (username === '') {
            alert('Please fill the username')
        }else if (password === '') {
            alert('Please fill the Password')
        }
        console.log(username,password);
        // await firebase.auth().signInWithEmailAndPassword(username, password)
        window.location.href = 'profile'
        console.log('you have sign in');
    }
    const forgotPwd=()=>{
        console.log('you have click forgot password');
        if (username === '') {
            alert('Please fill the email id')
        }else{
            // await firebase.auth().sendPasswordResetEmail(setUsername)
            alert('An email is sent to you for reset password')
        }
    }
    const registerSignup=()=>{
        window.location.href = '/signup'
        console.log('you click for Signup Page');
    }
    return (
        <div>
            <div className='navbar'>
                <header className='header1'>
                    <h1>The Presidents School</h1>
                    <button className='buttonnav' onClick={backHome}>Back Home</button>
                </header>
            </div>

            <div className='form'>
            <header className='header'>
                <h1>SignIn Form</h1>
            </header>
            <div className='container'>
                <label><b>Username</b></label>
                <input placeholder='Email' type='email' value={username} onChange={userName}/>
                <label><b>Password</b></label>
                <input placeholder='Password' type='password' value={password} onChange={passWord} />
                <button className='button1' onClick={submit}>Signin</button>
                {/* <span><a href={forgotPwd}>Forgot</a> Password</span> */}
                <span><button className='frgbtn' onClick={forgotPwd}>Forgot Password</button></span>
            </div>
            <div className='lowerpart'>
                <span>Don't have an account? </span>
                <span ><button className='frgbtn' onClick={registerSignup}>Register Here</button> </span>
            </div>
        </div>
        </div>
    )
}

export default Signin