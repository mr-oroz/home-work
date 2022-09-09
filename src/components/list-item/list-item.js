import React, { useState, useEffect } from 'react';

const ListItem = ({ index, todo, removeItem }) => {
    const [value, setValue] = useState('')
    
    useEffect(() => {
        if(todo) {
            setValue(todo)
        }
    }, [todo])
    
    return (
        <div className='list-item'>
            <span>{index + 1}</span>
            <input
                value={value}
                onChange={e => setValue(e.target.value)}
                type="text" />
            <button onClick={removeItem}>x</button>
        </div>
    )
}

export default ListItem;