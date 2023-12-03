import React from 'react';
// import Avatar from '../img/avatar.png'

const Login = () => {
    return (
        <div className='formContainer'>
            <div className='formWrapper'>
                <span className='logo'>Chat app</span>
                <span className='title'>Register</span>
                <form action="">
                    <input type="email" placeholder='email'/>
                    <input type="password" placeholder='password'/>
                    <input style={{display: "none"}} type="file" id='file'/>
                    <button>Sign in</button>
                </form>
                <p>You don't have an account? Register</p>
            </div>
        </div>
    )
}

export default Login