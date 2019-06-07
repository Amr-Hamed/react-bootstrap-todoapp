import React from 'react';
import './Todos.css';
import { Jumbotron } from 'reactstrap'
export default class Todos extends React.Component {

  state = {
    todos : []
  }
  
  componentWillReceiveProps(nextProps){
      this.state.todos = nextProps.todos.map( (todo)=>{
          return  <tr key={todo.id}>
                    <th>{todo.todo}</th>
                    <th>
                      <button id={todo.id} onClick={this.editTodo}>Edit</button>
                      <button id={todo.id} onClick={this.deleteTodo}>Delete</button>
                    </th>
                  </tr>
      })
  }


  deleteTodo = (e)=>{
    this.props.deleteTodo(e.target.id)
  }
  editTodo = (e)=>{
    this.props.editTodo(e.target.id)
  }



  render() {
    return (
      <div className='wrapper'>
        <table >
          <thead>
            <tr>
              <th>Todo</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {this.state.todos}         
          </tbody>
        </table>
      </div>
    );
  }
}
