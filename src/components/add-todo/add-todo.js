import React, {useState} from "react";

const AddTodo = ({addTodo}) => {
    const [value, setValue] = useState('');
    
    const onAddTodo =() => {
        addTodo(value)
        setValue('')
    }
    return (
        <div>
            <input
                value={value}
                onChange={e => setValue(e.target.value)}
                placeholder="напишите"
                type="text" />
            <button onClick={onAddTodo}>Добавить</button>
        </div>
    )
}

export default AddTodo;