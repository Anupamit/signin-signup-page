import React from 'react'
import './Profile.css'
function Profile() {
    const logOut=()=> {
        console.log("logout complete");
        // await firebase.auth().signOut()
        window.location.href = '/'
    }
    return (
        <div>
            <div className='navbar'>
                <header className='header1'>
                    <h1>The Presidents School</h1>
                    <button className='buttonnav' onClick={logOut}>Log Out</button>
                </header>
            </div>
            <div>
                <h1 className='knowmessage'>You are loged in here</h1>
            </div>
        </div>
    )
}

export default Profile