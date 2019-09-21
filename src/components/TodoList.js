import React from 'react';
import { TodoListGroup } from '../styles';
import InputField from '../atoms/inputField';

const TodoList = props => {
  const { title, onDeleteCLick, todos } = props;
  return (
    <TodoListGroup>
      <div className="delete">
        <button onclick={onDeleteCLick}>DELETE</button>
      </div>
      <h3>{title}</h3>
      <ul className="list-todo">
        {todos.map(todo => {
          return (
            <li>
              <span>
                {' '}
                <input type="checkbox" />
              </span>
              <span>{todo.task}</span>
            </li>
          );
        })}
      </ul>
    </TodoListGroup>
  );
};

export default TodoList;
