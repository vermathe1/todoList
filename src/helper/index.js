import axios from 'axios';
export const API_HOST = 'http://localhost:9001';

export const getAllTasks = () => {
  return axios.get(API_HOST + '/tasks');
};

export const updateTask = (id, description) => {
  return axios({
    method: 'put',
    url: API_HOST + '/task/update',
    params: {
      id,
      description
    }
  });
};

export const createTask = description => {
  return axios({
    method: 'post',
    url: API_HOST + '/task/create',
    params: {
      description
    }
  });
};

export const deleteTask = id => {
  return axios.delete(API_HOST + '/task/delete', { params: { id } });
};

export const toggleTask = (id, description) => {
  return axios({
    method: 'put',
    url: API_HOST + '/task/toggletask',
    params: {
      id
    }
  });
};
