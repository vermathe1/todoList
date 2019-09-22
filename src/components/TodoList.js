import React from 'react';
import { TodoListGroup } from '../styles';
import InputField from '../atoms/inputField';
import { updateTask, deleteTask, toggleTask } from "../helper";
import { editTodo, deleteTodo, toggleTodo } from'../actions';
import {connect} from 'react-redux';

class TodoList extends React.Component{

  constructor(props){
    super(props);
    this.state ={
      isEditing: false,
      value: ''
    };
  }

   handleChange = (e) => {
    this.setState({ value: e.target.value });
  }

  handleSelectChange = (e) => {
    toggleTask(this.props.todos.id)
    .then(res=>{this.props.dispatch(toggleTodo(this.props.todos.id))}, err=>{console.log("err")})
 
  }

  handleEdit = () => {
    this.setState({
      isEditing:true
    });
  }

  handleDelete = () => {
    deleteTask(this.props.todos.id)
    .then(res=>{this.props.dispatch(deleteTodo(this.props.todos.id))}, err=>{console.log("err")})
  }

  keyPressed = (e) => {
    if (e.key === 'Enter') {
      if(!this.state.value.length){
         this.setState({
      isEditing:false
    });
      }
      const item = {id :this.props.todos.id, description:this.state.value}
     updateTask(this.props.todos.id,this.state.value)
       .then(res=>{this.props.dispatch(editTodo(item)); this.setState({isEditing: false})}, err=>{console.log("err")})
    }
  }

  onBlur = (e) =>{
    this.setState({
      isEditing:false
    });
  }

   renderItems = (todos) => {

     const taskStyle = {
      "color" : this.props.todos.completed ? 'red' : 'white',
      "textDecoration" : this.props.todos.completed ? 'line-through' : ''
    }

    if(this.state.isEditing){
      return(
          <InputField type="text" defaultValue = { todos.text } onKeyPress={this.keyPressed} onChange = {this.handleChange} id="edit" onBlur = {this.onBlur}/>
      );
    }
    return(
    <ul className="list-todo">
      <li style= {taskStyle}>
         <input type="checkbox" onChange={this.handleSelectChange} defaultChecked={this.props.todos.completed}/>
         <span onClick = {this.handleEdit}> {todos.text} </span>
       </li>
    </ul>
    );
  }
 
 render(){
  const { title, todos } = this.props;
  return(
    <TodoListGroup>
      <div className="delete">
        <button onClick = { this.handleDelete }> DELETE</button>
      </div>
      <h3>{title}</h3>
     {this.renderItems(todos)}
    </TodoListGroup>
  )
 } 
}

export default connect()(TodoList);




