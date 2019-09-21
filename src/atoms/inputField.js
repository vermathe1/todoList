import React from 'react';

const InputField = (props) => {
	const { onChange, name, type, placeholder, className} = props;
	return(
		<input type = { type } name = { name } onChange = { onChange } placeholder = { placeholder } ></input>
	)
}

export default InputField;