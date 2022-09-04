import { useState } from "react";
const FormControl = () => {
    const [text, setText] = useState('')
    const [value, setValue] = useState('')
    const [found, setFound] = useState(false)
    const onSubmit = (e) => {
        e.preventDefault()
        if(value === '') {
            // alert('warning')
            setFound(true)
        } else {
            setFound(false)
            setText(value)
            setValue('')
        }
    }
    return (
        <form onSubmit={onSubmit}>
            <input
                style={{
                    backgroundColor: found === true? 'red' : ''
                }}
                onChange={(e) => setValue(e.target.value)}
                value={value}
                type="text" />
            <button type="submit">click</button>
            <p>{text}</p>
        </form>
    )
}

export default FormControl;