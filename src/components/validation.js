import { useState } from "react";
const Validation = () => {
    const [login, setLogin] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [foundLogin, setFoundLogin] = useState(false)
    const [foundEmail, setFoundEmail] = useState(false)
    const [foundPassword, setFoundPassword] = useState(false)
    const [errorLogin, setErrorLogin] = useState('')
    const [errorPassword, setErrorPassword] = useState('')
    const [errorEmail, setErrorEmail] = useState('')
    const handleClick = () => {
        if (login === '') {
            setErrorLogin('login popolnit')
            setFoundLogin(true)
        } else {
            setErrorLogin('')
            setFoundLogin(false)
        }
        if (password === '') {
            setFoundPassword(true)
            setErrorPassword('password popolnit')
        } else {
            setFoundPassword(false)
            setErrorPassword('')
        }
        if (email === '') {
            setFoundEmail(true)
            setErrorEmail('email popolnit')
        } else {
            setErrorEmail('')
            setFoundEmail(false)
        }
    }
    return (
        <div>
            <input
                value={login}
                onChange={(e) => setLogin(e.target.value)}
                type="text"
                placeholder="login" />
            <p style={{ color: 'red' }}>{foundLogin ? errorLogin : ''}</p>
            <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="email" />
            <p style={{ color: 'red' }}>{foundEmail ? errorEmail : ''}</p>
            <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="password" />
            <p style={{ color: 'red' }}>{foundPassword ? errorPassword : ''}</p>
            <button onClick={handleClick}>click</button>
        </div>
    )
}

export default Validation;