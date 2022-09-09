import React from "react";

const Header = (props) => {
    return (
        <div>Todo List {props.todos.length}</div>
    )
}

export default Header;