import { Component } from "react";
// import  GlobalStyle from "./GlobalStyle";
// import ColorPicker from "./Colorpicker/Colorpicker";
// import { Sticker } from "./Sticker/Sticker";
import "../todo.json"
// import { TodoEditor } from "./TodoEditor/TodoEditor";
// import { Filter } from "./Filter/Filter";
// import { InfoBox } from "./App.styled";
// import TodoList from "./TodoList/TodoList";
import { nanoid } from 'nanoid';
import initialTodos from '../todo.json';
// import { StickerList } from "./Sticker/StickerList";
// import stickers from "../sticker.json"
// import Modal from "./Modal/Modal"; 
 

export class App extends Component {
  
  
  state={
    todos: initialTodos,
    filter: '',
    isOpen: false
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

    toggleCompleted = todoId => {
      this.setState(({ todos }) => ({
      todos: todos.map(todo =>
        todo.id === todoId ? { ...todo, completed: !todo.completed } : todo,
      ),
    }));
    };
    
    changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
    };
    
    getVisibleTodos = () => {
    const { filter, todos } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return todos.filter(todo =>
      todo.text.toLowerCase().includes(normalizedFilter),
    );
    };
  
    deleteTodo = todoId => {
        this.setState(prevState => ({
            todos: prevState.todos.filter(todo => todo.id !== todoId),
        }));
    };
    
  
    calculateCompletedTodos = () => {
    const { todos } = this.state;

    return todos.reduce(
      (total, todo) => (todo.completed ? total + 1 : total),
      0,
    );
    };
  
  toggleModal = () => {
    this.setState((prevState => ({isOpen: !prevState.isOpen})))
  }
  
  componentDidMount() {
    const todos = localStorage.getItem("todos");
    const parsedTodos = JSON.parse(todos);

    this.setState({
      todos: parsedTodos
    })
  }
  
  componentDidUpdate(prevState, prevProps) {
    
    const {todos} = this.state
    
    if (prevState.todos !== todos) {
      localStorage.setItem("todos", JSON.stringify(todos))
    }
  }

  render() {

    // const { todos, filter } = this.state;
    // const totalTodoCount = todos.length;
    // const completedTodoCount = this.calculateCompletedTodos();
    // const visibleTodos = this.getVisibleTodos();
    return (
      <>
        
        {/* <ColorPicker/> */}
        {/* <button type="button" onClick={this.toggleModal}>Open modal</button>
        {this.state.isOpen && <Modal onClose={this.toggleModal} />}  */}

        {/* <InfoBox>
          <p>Вього завдань: {totalTodoCount}</p>
          <p>Виконано: {completedTodoCount}</p>
        </InfoBox>
        <TodoEditor addTodo={this.addTodo} />
        
        <Filter value={filter} onChange={this.changeFilter} />

        <TodoList todos={visibleTodos}
                  onDeleteTodo={this.deleteTodo}
                  onToggleCompleted={this.toggleCompleted}
        /> */}
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