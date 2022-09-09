import { useState } from "react";
const Input = () => {
    const [value, setValue] = useState('')
    const [errorMessage, setErrorMessage] = useState('')
    const [found, setFound] = useState(false);

    const handleClick = () => {
        if(value === '') {
            setErrorMessage('error login')
            setFound(true)
        } else {
            setErrorMessage('')
            setFound(false)
        }
    }
    return (
        <div className="input">
            <input
                placeholder="login"
                onChange={(e) => setValue(e.target.value)}
                type="text"
                value={value} />
                <button onClick={handleClick}>click</button>
                <p style={{color: 'red'}}>{found ? errorMessage : ''}</p>
        </div>
    )
}

export default Input;