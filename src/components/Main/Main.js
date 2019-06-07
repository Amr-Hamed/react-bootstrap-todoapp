import React , {Component} from 'react';
import './Main.css'
class Main extends Component {

  state = {
    todo : '',
    id : '',
    todos : []
  }
  addText = (e)=>{
    this.setState({
      todo : e.target.value,
      id : Math.random()*10,
    })
  }

  submitTodo = ()=>{
    this.props.addTodo(this.state.todo , this.state.id);
    this.setState({
      todo : ''
    })
  }

  componentWillReceiveProps(nextProps){
    this.setState({
      todo : nextProps.todo,
      todos : this.props.todos
    })
  }


  render(){
    return (
      <div className='header'>
        
        <input type='text' onChange={this.addText} placeholder='Add todo..' value={this.state.todo}/>
        <button onClick={this.submitTodo}>Add Todo</button>
        {this.state.edit}
      </div>
    );
  }
  
};

export default Main;
