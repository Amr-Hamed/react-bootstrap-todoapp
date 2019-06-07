import React , {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/TodoNavBar/TodoNavBar'
import Main from './components/Main/Main'
import Todos from './components/Todos/Todos'
import './App.css'

class App extends Component {

  state = {
    icons : ['Home' , 'Todos' , 'Logout'],
    todos : [],
    todo : ''
  }

  addTodo = (todo , id)=>{
      let todos = this.state.todos;
      let item = { todo : todo , id : id}
      todos.push(item);
      this.setState({
        todos : todos
      })
  }

  deleteTodo = (id)=>{
    let todos = this.state.todos;
    let index = todos.findIndex( el => el.id == id)
    todos.splice(index,1);
    this.setState({
      todos : todos
    })
  }

  editTodo = (id)=>{
    let todos = this.state.todos;
    let index = todos.find( el => el.id == id)
    todos.splice(todos.indexOf(index),1)
    this.setState({
      todo : index.todo
    })
  }

  render(){
    return (
      <div className="App">
      <link href="https://fonts.googleapis.com/css?family=Righteous|ZCOOL+KuaiLe&display=swap" rel="stylesheet"/>        <Navbar icons={this.state.icons} ></Navbar>
        <div className='bg'></div>
        <Main addTodo={this.addTodo} todo={this.state.todo} todos={this.state.todos}></Main>
        <Todos todos={this.state.todos} editTodo={this.editTodo} deleteTodo={this.deleteTodo}></Todos>
      </div>
    );
  }
}

export default App;
