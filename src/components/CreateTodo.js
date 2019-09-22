import React from 'react';
import { CreateTodoGroup } from '../styles';
import InputField from '../atoms/inputField';
import searchImg from '../images/add.png';
import { createTask } from '../helper';
import { connect } from 'react-redux';
import { addingTodo } from '../actions';
import LoadingImage from './loading';

const CreateTodo = props => {
  const [value, setValue] = React.useState('');

  const handleChange = e => {
    setValue(e.target.value);
  };

  const keyPressed = e => {
    if (e.key === 'Enter' && value.length) {
      e.target.value = '';
      createTask(value).then(
        res => {
          if (res.status === 201) {
            props.dispatch(addingTodo(res.data.task));
          } else {
            console.log('Some issue occured');
          }
        },
        err => {
          console.log(err);
        }
      );
    }
  };

  return (
    <CreateTodoGroup image={searchImg}>
      <div className="createTodo">
        <InputField
          {...props}
          defaultValue={value}
          onKeyPress={keyPressed}
          onChange={handleChange}
        />
      </div>
    </CreateTodoGroup>
  );
};

export default connect()(CreateTodo);
