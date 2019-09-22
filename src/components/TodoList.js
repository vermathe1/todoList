import React from 'react';
import { Todos } from '../styles';
import InputField from '../atoms/inputField';
import { updateTask, deleteTask, toggleTask } from '../helper';
import { editTodo, deleteTodo, toggleTodo } from '../actions';
import { connect } from 'react-redux';
import LoadingImage from './loading';

const TodoList = props => {
  const [loading, setloading] = React.useState(false);
  const [value, setValue] = React.useState('');
  const [isEditing, setEditing] = React.useState(false);
  const { todos } = props;

  const handleChange = e => {
    setValue(e.target.value);
  };

  const handleSelectChange = e => {
    toggleTask(props.todos.id).then(
      res => {
        props.dispatch(toggleTodo(props.todos.id));
      },
      err => {
        console.log('err');
      }
    );
  };

  const handleEdit = () => {
    setEditing(true);
  };

  const handleDelete = () => {
    setloading(true);
    deleteTask(props.todos.id).then(
      res => {
        setloading(false);
        props.dispatch(deleteTodo(props.todos.id));
      },
      err => {
        console.log('err');
      }
    );
  };

  const keyPressed = e => {
    if (e.key === 'Enter') {
      if (!value.length) {
        setEditing(false);
        return;
      }
      const item = { id: props.todos.id, description: value };
      updateTask(props.todos.id, value).then(
        res => {
          props.dispatch(editTodo(item));
          setEditing(false);
        },
        err => {
          console.log('err');
        }
      );
    }
  };

  const onBlur = e => {
    setEditing(false);
  };

  const renderItems = todos => {
    const taskStyle = {
      color: props.todos.completed ? 'red' : 'white',
      textDecoration: props.todos.completed ? 'line-through' : ''
    };

    if (isEditing) {
      return (
        <InputField
          type="text"
          defaultValue={todos.text}
          onKeyPress={keyPressed}
          onChange={handleChange}
          id="edit"
          onBlur={onBlur}
        />
      );
    }
    return (
      <div className="list-todo" style={taskStyle}>
        <input
          type="checkbox"
          onChange={handleSelectChange}
          defaultChecked={props.todos.completed}
        />
        <span onClick={handleEdit}> {todos.text} </span>
      </div>
    );
  };

  return (
    <>
      {loading ? (
        <LoadingImage />
      ) : (
        <Todos>
          <div className="delete">
            <button onClick={handleDelete}> DELETE</button>
          </div>
          {renderItems(todos)}
        </Todos>
      )}
    </>
  );
};

export default connect()(TodoList);
