import React from 'react';
import { storiesOf } from '@storybook/react';
import TodoList from './TodoList';
import { TodoListWrapper } from '../styles';

const mock1 = () => {
  return true;
};

storiesOf('components/TodoList', module).add('TodoList Grid', () => (
  <TodoList
    title="I am title"
    onDeleteCLick={mock1}
    todos={[{ task: 'task1' }]}
  />
));
