import React from 'react';
import { Searchgroup } from '../styles';
import searchImg from '../images/search.png';

const SearchFieldWIthLabel = props => {
  const { name, label } = props;
  return (
    <Searchgroup image={searchImg}>
      <label htmlFor={name}> {label}</label>
    </Searchgroup>
  );
};

export default SearchFieldWIthLabel;
