import React, { useState } from "react";
import './App.scss';
import AddTodo from "./components/add-todo/add-todo";
import Header from "./components/header/header";
import List from "./components/list/list";
import ReactStars from "react-stars";
import QRCode from "react-qr-code";
import Form from "./components/form/form";
import products from './products.json';
import category from './category';

const App = () => {
  const [data, setData] = useState(products)
"react"
  const [todos, setTodos] = useState([
    'Написать Программу', 'выучить React js', 'hello world'
  ]);
  
  const onRemoveItem = (index) => {
    console.log(index)
    setTodos(prevState => prevState.filter((elem, i) => i !==index))
  }

  const addTodo = (value) => {
    setTodos(prevState => {
      return [
        ...prevState,
        value,
      ]
    })
  }

  const ratingChanged = (newRating) => {
    console.log(newRating)
  }

  return (
    <div className="app">
      <Header todos={todos} />
      <AddTodo addTodo={addTodo} />
      <List
        removeItem={onRemoveItem}
        todos={todos} />
        <ReactStars 
          count={5}
          size={23}
          onChange={ratingChanged}
          color2={'#ffd700'} 
        />
        <QRCode 
        level={"L"} size={100} 
        value="https://www.youtube.com/"/>
        <Form/>
    </div>
  )
}

export default App;
