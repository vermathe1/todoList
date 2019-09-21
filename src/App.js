import React from 'react';
import logo from './logo.svg';
import './App.css';
import SearchFieldWIthLabel from './components/SearchFieldWIthLabel'
import CreateTodo from './components/CreateTodo'
import TodoList from './components/TodoList'

function App() {
  return (
    <header className="App-header">
      <SearchFieldWIthLabel
        name = "Search"
        onChange = { () =>{} }
        label = "Todo Application"
        placeholder = "Search"
        type = "text"
      />
      <CreateTodo
    name = "add Todo"
    onChange = {  () =>{}  }
    placeholder = "Create Todo"
    type = "text"
    />
    <TodoList
    title = "I am title"
    onDeleteCLick = { () =>{} }
    todos = {[{task:"task1"}]}
    />
    </header>
   
  );
}

export default App;
