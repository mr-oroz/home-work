import { useState } from "react";
const Input = () => {
    const [value, setValue] = useState('')
    const [text, setText] = useState('')

    const handleClick = () => {
        setText(value)
        setValue('')
    }
    return (
        <div className="input">
            <input
                onChange={(e) => setValue(e.target.value)}
                type="text"
                value={value} />
                <button onClick={handleClick}>click</button>
                <p>{text}</p>
        </div>
    )
}

export default Input;