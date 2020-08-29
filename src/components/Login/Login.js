import React, {useState} from 'react'
import './Login.css'
import { useStateValue } from '../../context/StateProvider'
import {Link, useHistory} from 'react-router-dom'

import { auth } from '../../firebaseConfig'

const Login = () => {
    const history = useHistory()

    const [{user}, dispatch] = useStateValue()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    const login = e => {
        e.preventDefault()

        auth.signInWithEmailAndPassword(email, password)
            .then(
                auth => {
                    history.push('/')
                })
            .catch(e => alert(e.message))
    }

    const register = e => {
        e.preventDefault()

        auth.createUserWithEmailAndPassword(email, password)
            .then(
                auth => {
                    history.push('/')
                }
            )
    }

    return (
        <div className="login">
            <Link to='/'>
                <img 
                    className='login__logo'
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" 
                    alt=""
                />
            </Link>
            
            <div className='login__container'>
                <h1>Sign In</h1>
                <form>
                    <h5>E-mail</h5>
                    <input 
                        value={email} 
                        onChange={e => setEmail(e.target.value)} 
                        type='email' 
                    />
                    <h5>Password</h5>
                    <input 
                        value={password}
                         onChange={e => setPassword(e.target.value)} type='password' 
                    />
                    <button onClick={login} type='submit' className='login__signInButton'>Sign In</button>
                </form>
                <p>By signing in, you agree to Mmazon's Conditions of privacy and stuff...</p>
                <button onClick={register} className='login__signUpButton'>Create your amazon account</button>
            </div>
        </div>
    )
}

export default Login
