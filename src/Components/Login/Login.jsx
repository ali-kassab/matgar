import React from 'react'
import '../Login/Login.css'

export default function Login() {

    return <>
        <div className='Loginbg'>
            <div className='LoginItem'>
                <div ><img src={require('../../images/image.png')} alt="logo" /></div>
                <div > <input className='form-control my-4 ' type="email" />
                </div>
                <div >
                    <input className='form-control mb-4' type="password" />
                </div>
                <button>Login</button>

                <p>Dont have any account?</p>
                <button className='regester'><a href="contact us">Regester</a></button>
            </div>
        </div>

    </>
}
