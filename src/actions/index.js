export const toggleTodo = (id)=>{
	return {
		type: 'TOGGLE_TODO',
		id
	};
};

export const deleteTodo = (id)=>{
	return {
		type: 'DELETE_TODO',
		id
	};
};
export const addingTodo = ({id,description})=>{
	console.log(" addingTodo Action")
	return{
		type:'ADD_TODO',
		id,
		description
	}
};

export const editTodo = ({id,description})=>{
	return {
		type:'EDIT_TODO',
		id,
		description
	};
};

export const saveAllTodos = (todos)=>{
	return {
		type:'SAVE_TODOS',
		todos
	};
};

