import React from 'react'
import './Home.css';
function Home() {
    const login=()=>{
        window.location.href = '/signin'
        console.log('you open the sign in page');
    }
    return (
        <div>
            <div className='navbar'>
                <header className='header1'>
                    <h1>The Presidents School</h1>
                    <button className='buttonnav' onClick={login}>Login</button>
                </header>
            </div>
            <div>
                <h1 className='knowmessage'>You are on Home Page</h1>
            </div>
        </div>
    )
}

export default Home