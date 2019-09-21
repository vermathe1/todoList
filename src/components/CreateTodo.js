import React from 'react';
import { CreateTodoGroup } from '../styles';
import InputField from '../atoms/inputField';
import searchImg from '../images/add.png';

const CreateTodo = props => {
  const { onChange, name, placeholder, type } = props;
  return (
    <CreateTodoGroup image={searchImg}>
      <div className="createTodo">
        <InputField {...props} />
      </div>
    </CreateTodoGroup>
  );
};

export default CreateTodo;
