import { Component } from "react";
// import  GlobalStyle from "./GlobalStyle";
import "../todo.json"
import { TodoEditor } from "./TodoEditor/TodoEditor";
import TodoList from "./TodoList/TodoList";
import { nanoid } from 'nanoid';
import initialTodos from '../todo.json';
// import { StickerList } from "./Sticker/StickerList";
// import stickers from "../sticker.json"
 

export class App extends Component {
  
  
  state={
    todos: initialTodos,
  }
 
  addTodo = (text)=>{
    const newTodo = {
      id: nanoid(),
      text,
      completed: false
    }
    
  this.setState((prevState)=>{
    return {
      todos: [newTodo, ...prevState.todos]
    }
  })
  }

  render(){
    return (
      <>
      <TodoEditor addTodo={this.addTodo}/>
      <TodoList todos={this.state.todos}/>
      {/* <GlobalStyle/> */}
      </>
    );
  }
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  // state = {
  //   stickerLabel: null
  // }
  
  // labelHandler = label => {
  //   this.setState({stickerLabel: label})
  // }
  
  // render() {
  //   const {stickerLabel} = this.state
  //     return (
  //   <>
  //     { stickerLabel && <h1>{stickerLabel}</h1>}
  //     <StickerList stickers={stickers} labelHandler={this.labelHandler} />
  //      {/* <ColorPicker options={colorOptions}/> */}
  // </>
  // );
  // }
};