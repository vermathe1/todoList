import React from 'react';
import { Searchgroup } from '../styles';
import InputField from '../atoms/inputField';
import searchImg from '../images/search.png';

const SearchFieldWIthLabel = props => {
  const { onChange, name, label, placeholder, type } = props;
  return (
    <Searchgroup image={searchImg}>
      <label htmlFor={name}> {label}</label>
      <div className="searchInput">
        <InputField {...props} />
      </div>
    </Searchgroup>
  );
};

export default SearchFieldWIthLabel;
