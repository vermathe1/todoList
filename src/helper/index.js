import React from 'react';
import axios from 'axios';
export const API_HOST = 'http://localhost:9001';

export const getAllTasks = () => {
  return axios.get(API_HOST + '/tasks').then(
    suc => {
      console.log(suc);
    },
    err => {
      console.log(err);
    }
  );
};

export const updateTask = (id, title, description) => {
  return axios({
    method: 'put',
    url: API_HOST + '/task/update',
    params: {
      id,
      title,
      description
    }
  }).then(
    suc => {
      console.log(suc);
    },
    err => {
      console.log(err);
    }
  );
};

export const createTask = (title, descrition) => {
  return axios({
    method: 'put',
    url: API_HOST + '/task/create/',
    params: {
      title,
      description
    }
  }).then(
    suc => {
      console.log(suc);
    },
    err => {
      console.log(err);
    }
  );
};

export const deleteTask = id => {
  return axios.delete(API_HOST + '/task/delete', { params: { id: id } }).then(
    suc => {
      console.log(suc);
    },
    err => {
      console.log(err);
    }
  );
};
