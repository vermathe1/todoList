import React from 'react';
import { storiesOf } from '@storybook/react';
import CreateTodo from './CreateTodo';

const mock = () => {
  return true;
};
storiesOf('components/CreateTodo', module).add('Createtodo field', () => (
  <CreateTodo
    name="add Todo"
    onChange={mock}
    placeholder="Create Todo"
    type="text"
  />
));
