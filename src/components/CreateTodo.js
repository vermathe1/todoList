import React from 'react';
import { CreateTodoGroup } from '../styles';
import InputField from '../atoms/inputField';
import searchImg from '../images/add.png';
import { createTask } from "../helper";
import {connect} from 'react-redux';
import {addingTodo} from'../actions';

class CreateTodo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };
  }

  handleChange = (e) => {
    this.setState({ value: e.target.value });
  }

  keyPressed = (e) => {
    if (e.key === 'Enter' && this.state.value.length) {
     createTask(this.state.value)
     .then(res=>{

     	if(res.status == 201){
     		this.props.dispatch(addingTodo(res.data.task));
     	}else{
     		console.log("Some issue occured")
     	}
     },
     	 err=>{
     	 	console.log(err)
     	 }

     	)
     this.setState({ value: '' });
    }
  }

  render() {
    const { placeholder, type } = this.props;
    return (
      <CreateTodoGroup image={searchImg}>
        <div
          className="createTodo"
        >
          <InputField {...this.props} defaultValue = {this.state.value} onKeyPress={this.keyPressed} onChange = {this.handleChange}/>
        </div>
      </CreateTodoGroup>
    );
  }
}

export default connect()(CreateTodo);




