import React from 'react';
import { storiesOf } from '@storybook/react';
import SearchFieldWIthLabel from './SearchFieldWIthLabel';

const mock = () => {
  return true;
};
storiesOf('components/SearchFieldWIthLabel', module).add(
  'InputSearch field',
  () => (
    <SearchFieldWIthLabel
      name="Search"
      onChange={mock}
      label="Todo Application"
      placeholder="Search"
      type="text"
    />
  )
);
