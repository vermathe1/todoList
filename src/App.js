import React from 'react';
import logo from './logo.svg';
import './App.css';
import SearchFieldWIthLabel from './components/SearchFieldWIthLabel';
import CreateTodo from './components/CreateTodo';
import TodoList from './components/TodoList';
import { connect } from 'react-redux';

function App(props) {
  return (
    <header className="App-header">
      <SearchFieldWIthLabel
        name="Search"
        onChange={() => {}}
        label="Todo Application"
        placeholder="Search"
        type="text"
      />
      <CreateTodo
        name="add Todo"
        onChange={() => {}}
        placeholder="Create Todo"
        type="text"
      />
      {props.todos.length &&
        props.todos.map(todo => {
          return (
            <TodoList
              title="I am title"
              onDeleteCLick={() => {}}
              todos={todo}
            />
          );
        })}
    </header>
  );
}

const mapStateToProps = state => {
  const todos = state.todos;
  return { todos };
};

export default connect(mapStateToProps)(App);
