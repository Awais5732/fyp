import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { login } from '../../../DAL/auth'
import { useContext } from 'react'
import './sign-in.css';
import Store from '../../../store/store';
const SignIn = () => {
    const [input, setInput] = useState({
        email: '',
        password: ''
    })
    const history = useHistory();
    const ctx = useContext(Store)
    const handlesubmuitForm = async (e) => {
        e.preventDefault()
        const postData = {
            ...input, 
            type: 1,
        }
        const resp = await login(postData)
        if (resp.code == 200) {
            localStorage.setItem('token', resp.token)
            localStorage.setItem('user', JSON.stringify(resp.user))
            ctx.setToken(localStorage.getItem('token'))
            history.push('/')
        }
        console.log(resp);
    }
    const handleChange = (e) => {
        let name = e.target.name
        let value = e.target.value
        setInput({ ...input, [name]: value })
    }
    return (
        <div className="Sign-In-contanier">
            <div className='sign-in-sub-contanier'>
                <h1>Welcome To Home Fix</h1>
                <p>Get started!</p>
                <form onSubmit={handlesubmuitForm} className='sign-In-form-contanier'>
                    <div><input value={input.email} onChange={handleChange} name='email' type="email" placeholder='Enter Your Email'></input> </div>
                    <div><input name='password' value={input.password} onChange={handleChange} type="password" placeholder='Enter Your Password'></input></div>
                    <button className='form-submit-btn'>Submit</button>
                </form>
            </div>
        </div>
    )
}
export default SignIn