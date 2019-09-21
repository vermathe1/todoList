import React from 'react';
import styled from 'styled-components'

export const TodoListWrapper = styled.div`
    display:flex;
    flex-flow: row wrap;
    font-family : 'sans-serif';
    justify-content: flex-start;
    align-items : flex-start;
`
export const Searchgroup = styled.div`
    display: flex;
    flex-direction: row;
    flex: 1;
    align-items : center;
    margin: 10px
    border-bottom: 1px solid #fff;
    padding-bottom:5px;

    >label {
        flex: 2;
        text-align: right;
        white-space: nowrap;
        margin-right : 10px;
    }
    .searchInput{
        position: relative;
        flex: 5;
    }
    .searchInput:after{
        position: absolute;
        background-image: url(${props => props.image});
        content: "";
        top: 50%;
        left:5px;
        transform: translateY(-50%);
        width: 26px;
        height: 26px;
        background-repeat : no-repeat;
    }
    
    input {
        padding: 5px 20px;
        padding-left: 40px;
        width:60%;
        background-color: #939393;
        border: none;
        border-radius: 10px;
        font-size: 25px;
        outline: none;
    }
`
export const TodoListGroup = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items : flex-start;
    padding:8px;
    border-radius: 8px;
    background-color: #5c5a5d;
    border: 1px solid #939393;
    width: 30%;

    h3{
        margin:5px
        margin-bottom: 20px;
        color: #fff;
    }
    .list-todo{
        list-style : none;
        padding:0;
        margin :0;
        margin-top : 5px;
    }
    input{
        margin-right: 5px;
    }

    span{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    li{
        display: flex;
    }
`
export const CreateTodoGroup =  styled.div`
    display: flex;
    flex-direction: row;
    justify-content : center;
    align-items : center;

    input {
        padding: 5px 20px;
        padding-left: 40px;
        background-color: #939393;
        border: none;
        border-radius: 10px;
        font-size: 25px
        outline: none;
    }
    .createTodo{
        position: relative;
    }
    .createTodo:after{
        position: absolute;
        background-image: url(${props => props.image});
        content: "";
        top: 62%;
        left:10px;
        transform: translateY(-50%);
        width: 26px;
        height: 26px;
        background-repeat : no-repeat;
    }
`

