import React from 'react';
import ListItem from '../list-item/list-item';

const List = ({ todos, removeItem }) => {
    console.log(todos)
    return (
        <div className='list'>
            {todos.map((elem, index) => {
                return <ListItem
                    removeItem={() => removeItem(index)}
                    key={index}
                    todo={elem}    
                    index={index} />
            })}
        </div>
    )
}

export default List;